import readline from 'readline';
import { Config } from './Config';
import { PriceMonitor } from './PriceMonitor';
import { ThresholdAlertStrategy } from './alertStrategies/ThresholdStrategy';
import { coinsList } from './coinsList';
import { AlertStrategy } from './alertStrategies/AlertStrategy';

const config = Config.getInstance().data;
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let coin = config.defaultCoin;
let lastPrice: number | null = null;
let running = true;

function askQuestion(query: string): Promise<string> {
	return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
	console.log('Welcome to Crypto Monitor!');
	console.log('Available coins:');
	console.log(coinsList.join(', '));
	const coinInput = await askQuestion(`Enter the coin to monitor [default: ${coin}]: `);
	if (coinInput.trim() && coinsList.includes(coinInput.trim().toLowerCase())) {
		coin = coinInput.trim().toLowerCase();
	} else if (coinInput.trim()) {
		console.log('Coin not recognized. Using default.');
	}

	let strategyType: 'threshold' | 'variation' = 'threshold';
	const stratInput = await askQuestion('Choose alert strategy: [threshold/variation] (default: threshold): ');
	if (stratInput.trim().toLowerCase() === 'variation') {
		strategyType = 'variation';
	}
	return strategyType;
}



async function main() {
	const strategyType = await setup();
	let strategy: AlertStrategy;
	const strategyMap: Record<string, () => Promise<AlertStrategy>> = {
		'threshold': async () => {
			const { ThresholdAlertStrategy } = await import('./alertStrategies/ThresholdStrategy');
			return new ThresholdAlertStrategy();
		},
		'variation': async () => {
			const { VariationAlertStrategy } = await import('./alertStrategies/VariationStrategy');
			return new VariationAlertStrategy();
		}
	};
	strategy = await strategyMap[strategyType]();
	const monitor = PriceMonitor.getInstance();
	monitor.configure(coin, strategy, config.variation.minutos);
	console.log(`Monitoring ${coin} with strategy '${strategyType}'... Type 'exit' to stop.`);

	rl.on('line', (input) => {
		if (input.trim().toLowerCase() === 'exit') {
			running = false;
			rl.close();
			console.log('Exiting...');
		}
	});

	while (running) {
		try {
			const price = await monitor.fetchCurrentPrice();
			if (lastPrice === null || price !== lastPrice) {
				console.log(`[${new Date().toLocaleTimeString()}] ${coin} price: $${price}`);
				lastPrice = price;
			}
			const alert = await monitor.checkPrice();
			if (alert) {
				console.log(`[ALERT] ${alert}`);
			}
		} catch (e) {
			console.log('Error fetching price. Check the coin name.');
		}
		await new Promise(res => setTimeout(res, (config.secundsToFetch || 10) * 1000));
	}
}

main();
