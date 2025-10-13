package proxy;

import models.User;
import models.Video;

public class VideoProxy implements  VideoSubject {
    private final User user;
    private final Video video;
    public VideoProxy(User user, Video video) {
        this.user = user;
        this.video = video;
    }

    @Override
    public void watchVideo() {
        if (this.user == null) {
            System.out.println("Please log in to watch videos.");
            return;
        }

        if (this.video.isPremium() && !this.user.isPremium()) {
            System.out.println("Upgrade to premium to watch this video.");
            return;
        }
        this.video.watchVideo();
    }
}
