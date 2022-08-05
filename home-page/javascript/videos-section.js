function backgroundAndTextColorChange() {
    // Background Color Change
    document
        .getElementsByTagName("body")[0]
        .classList
        .toggle("dark-mode");

    // Text Color Change Can Be Used Upto Infinite Number Of Videos
    const totalVideosCount = document
        .querySelectorAll(
            ".video-title,.channel-name,.video-stats"
        )
        .length;

    for (var i = 0; i < totalVideosCount; i++) {
        document
            .querySelectorAll(".video-title,.channel-name,.video-stats")[i]
            .classList
            .toggle("dark-mode");
    }
}