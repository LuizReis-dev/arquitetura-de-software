package models;

import proxy.VideoSubject;

public class Video implements VideoSubject {
    private final String title;
    private final boolean isPremium;

    public Video(String title, boolean isPremium) {
        this.title = title;
        this.isPremium = isPremium;
    }

    public String getTitle() {
        return title;
    }

    public boolean isPremium() {
        return isPremium;
    }

    @Override
    public void watchVideo() {
        System.out.println("Watching video: " + this.title);
    }

    public static Video database(String videoName) {
        if (videoName.equals("video")) {
            return new Video("Normal video", false);
        }

        if (videoName.equals("premium_video")) {
            return new Video("Premium Video", true);
        }

        return null;
    }
}
