package commands;

import models.Video;
import proxy.VideoProxy;
import service.UserService;
import service.UserServiceSingletonImpl;

public class WatchVideoCommand implements  Command {
    private final String videoName;

    public WatchVideoCommand(String videoName) {
        this.videoName = videoName;
    }

    @Override
    public void execute() {
        Video video = Video.database(videoName);
        if (video == null) {
            System.out.println("Video not found.");
            return;
        }
        UserService userService = UserServiceSingletonImpl.getInstance();
        VideoProxy videoProxy = new VideoProxy(userService.getLoggedUser(), video);
        videoProxy.watchVideo();
    }
}
