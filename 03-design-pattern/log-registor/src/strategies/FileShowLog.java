package strategies;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class FileShowLog implements  ShowLog {

    @Override
    public void showLog(List<String> logs) {
        try (FileWriter writer = new FileWriter("logs.txt", false)) {
            for (String log : logs) {
                writer.write(log + System.lineSeparator());
            }
            writer.flush();
            System.out.println("Logs salvos em logs.txt com sucesso!");
        } catch (IOException e) {
            System.err.println("Erro ao salvar logs no arquivo: " + e.getMessage());
        }
    }
}
