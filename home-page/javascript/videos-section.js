function bodyBackgroundColorChange() {
    var element = document.getElementById("body");
    element
        .classList
        .toggle("change");
}

function bodyTextColorChange() {

    var videos = document
        .getElementsByClassName("video-title")
        .length;

    for (var i = 0; i < videos; i++) {
        var element = document.getElementsByClassName("video-title")[i];
        element
            .classList
            .toggle("change");
    }

    // var element = document.getElementsByClassName("video-title")[0]; element
    // .classList     .toggle("change");
}

let uploaded_videos = [
    {
        thumbnail: "images/videos-section/thumbnail-1.jpg",
        video_time: "6:31",
        channel_logo: "images/videos-section/channel-logo-1.jpg",
        title: "Skye to Immortal (Flashes 💥💥😂)",
        channel_name: "Captain Raj",
        video_views: "68 views &#xb7 8 days ago",
        video_link: "https://www.youtube.com/watch?v=8--NHAz2xA4&t=305s",
        channel_link: "https://www.youtube.com/captainraj"
    }, {
        thumbnail: "images/videos-section/thumbnail-2.jpg",
        video_time: "8:31",
        channel_logo: "images/videos-section/channel-logo-2.jpg",
        title: "Where Have I Been?",
        channel_name: "BeastBoyShub",
        video_views: "3.5M views &#xb7 1 month ago",
        video_link: "https://www.youtube.com/watch?v=FUR9TsEYOIg&t=255s",
        channel_link: "https://www.youtube.com/c/BeastBoyShub"
    }, {
        thumbnail: "images/videos-section/thumbnail-3.jpg",
        video_time: "6:31:24",
        channel_logo: "images/videos-section/channel-logo-3.jpg",
        title: "HTML & CSS Full Course - Beginner to Pro (2022)",
        channel_name: "SuperSimpleDev",
        video_views: "465K views &#xb7 13 hours ago",
        video_link: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=15838s",
        channel_link: "https://www.youtube.com/c/SuperSimpleDev"
    }, {
        thumbnail: "images/videos-section/thumbnail-4.jpg",
        video_time: "",
        channel_logo: "images/videos-section/channel-logo-4.jpg",
        title: "lofi hip hop radio - beats to relax/study to",
        channel_name: "Lofi Girl",
        video_views: "20,518 watching now &#xb7 Started streaming on Feb 23, 2020",
        video_link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
        channel_link: "https://www.youtube.com/c/LofiGirl"
    }, {
        thumbnail: "images/videos-section/thumbnail-5.jpg",
        video_time: "10:25",
        channel_logo: "images/videos-section/channel-logo-5.jpg",
        title: "Indian Streamer Solo Hacking in Valorant | Proof?",
        channel_name: "Solo",
        video_views: "100K views &#xb7 1 year ago",
        video_link: "https://www.youtube.com/watch?v=4v8z5itl1Kc&t=466s",
        channel_link: "https://www.youtube.com/c/Solomanan"
    }, {
        thumbnail: "images/videos-section/thumbnail-6.jpg",
        video_time: "6:31",
        channel_logo: "images/videos-section/channel-logo-6.jpg",
        title: "Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java",
        channel_name: "CodeWithHarry",
        video_views: "2.8M views &#xb7 1 year ago",
        video_link: "https://www.youtube.com/watch?v=ntLJmHOJ0ME",
        channel_link: "https://www.youtube.com/c/CodeWithHarry"
    }, {
        thumbnail: "images/videos-section/thumbnail-7.jpg",
        video_time: "1:08:02",
        channel_logo: "images/videos-section/channel-logo-7.jpg",
        title: "True Side of the Story",
        channel_name: "Amaterasu",
        video_views: "237K views &#xb7 Streamed 11 months ago",
        video_link: "https://www.youtube.com/watch?v=Trg3-Jiz6tI",
        channel_link: "https://www.youtube.com/c/AmaterasuOfficial"
    }, {
        thumbnail: "images/videos-section/thumbnail-8.jpg",
        video_time: "4:40",
        channel_logo: "images/videos-section/channel-logo-8.jpg",
        title: "The Dark Knight Rises - Batman's First Appearance[HD]",
        channel_name: "Darkknight6749Return",
        video_views: "18M views &#xb7 9 years ago",
        video_link: "https://www.youtube.com/watch?v=aj1Q_BAqwa8&t=164s",
        channel_link: "https://www.youtube.com/user/Darkknight6749Return"
    }, {
        thumbnail: "images/videos-section/thumbnail-9.jpg",
        video_time: "9:08",
        channel_logo: "images/videos-section/channel-logo-9.jpg",
        title: "Haircut | Short Film | By Anand Tiwari & Sumeet Vyas",
        channel_name: "humaramovie",
        video_views: "10M views &#xb7 8 years ago",
        video_link: "https://www.youtube.com/watch?v=5NErG3iCZ4w&t=14s",
        channel_link: "https://www.youtube.com/c/humaramovie"
    }, {
        thumbnail: "images/videos-section/thumbnail-10.jpg",
        video_time: "1:30",
        channel_logo: "images/videos-section/channel-logo-10.jpg",
        title: "Enemy 😈 Valorant Montage",
        channel_name: "Aksh Stovia",
        video_views: "111 views &#xb7 1 month ago",
        video_link: "https://www.youtube.com/watch?v=8--NHAz2xA4&t=305s",
        channel_link: "https://www.youtube.com/captainraj"
    }, {
        thumbnail: "images/videos-section/thumbnail-11.jpg",
        video_time: "23:37",
        channel_logo: "images/videos-section/channel-logo-11.jpg",
        title: "(84 Kill Game)We broke our own best Record",
        channel_name: "Mackle",
        video_views: "7K views &#xb7 1 year ago",
        video_link: "https://www.youtube.com/watch?v=xhwXy3d5WQg",
        channel_link: "https://www.youtube.com/c/Mackleyt"
    }, {
        thumbnail: "images/videos-section/thumbnail-12.jpg",
        video_time: "1:27",
        channel_logo: "images/videos-section/channel-logo-12.jpg",
        title: "Welcome @RakaZone Gaming | WELCOME TO THE VLT FAMILY #feelthevelocity #VLTRaka",
        channel_name: "VELOCITY GAMING",
        video_views: "96K views &#xb7 1 month ago",
        video_link: "https://www.youtube.com/watch?v=yob5AkDYLDI",
        channel_link: "https://www.youtube.com/c/VELOCITYGAMING01"
    }
];

function videosSectionRender() {
    let videos_section = document.getElementById("videos-section");
    uploaded_videos.forEach(function (videos) {
        videos_section.innerHTML += `<div class="video-grid">
        <div class="thumbnail-section">
            <a href="${videos.video_link}">
                <img class="thumbnail" src="${videos.thumbnail}">
            </a>
            <div class="video-time">${videos.video_time}</div>
        </div>

        <div class="video-info">
            <div class="channel-icon">
                <a class="channel-link" href="${videos.channel_link}">
                    <img class="channel-logo" src="${videos.channel_logo}">
                </a>
            </div>

            <div class="about-video">
                <a
                    class="channel-link"
                    target_="blank"
                    href="${videos.video_link}">
                    <p class="video-title">${videos.title}</p>
                </a>
                <a class="channel-link" href="${videos.channel_link}">
                    <p class="channel-name">${videos.channel_name}
                    </p>
                </a>
                <p class="videos-stats">${videos.video_views}</p>
            </div>
        </div>
    </div>`;
    });
}