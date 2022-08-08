function backgroundAndTextColorChange() {
  // Background Color Change
  document.getElementsByTagName("body")[0].classList.toggle("dark-mode");

  // Text Color Change Can Be Used Upto Infinite Number Of Videos
  const totalVideosCount = document.querySelectorAll(".video-title,a,.video-stats").length;

  for (var i = 0; i < totalVideosCount; i++) {
    document.querySelectorAll(".video-title,a,.video-stats")[i].classList.toggle("dark-mode");
  }
}

// Change Margin Of Video Section
function change_Margin_Of_Videos_Section_When_Clicked_On_Hamburger_Menu() {
  // Function Executed In hamburger-menu-expand.js -> hamburgerMenuExpand();
  document.getElementsByClassName("videos-section")[0].classList.toggle("change");
}

// Change Margin Of Video Upload Section
function change_Margin_Of_Video_Upload_Section() {
  document.getElementsByClassName("form")[0].classList.toggle("change");
}

// Pre-Uploaded Videos, and Arrays To Store The Upcoming Uploaded Videos
var uploaded_videos = [];

// Render Uplaoded Videos
var videos_section = document.getElementsByClassName("videos-section")[0];

// Render Video Even After Refresh
function rendering_Videos_After_Refresh() {
  let data = JSON.parse(sessionStorage.getItem("local_storage_for_videos"));

  if (data == null) {
    uploaded_videos = [
      {
        thumbnail: "../images/videos-section/thumbnail-1.jpg",
        video_time: "6:31",
        channel_logo: "../images/videos-section/channel-logo-1.jpg",
        title: "Skye to Immortal (Flashes 💥💥😂)",
        channel_name: "Captain Raj",
        video_views: "68 views &#xb7 8 days ago",
        video_link: "https://www.youtube.com/watch?v=8--NHAz2xA4&t=305s",
        channel_link: "https://www.youtube.com/captainraj",
      },
      {
        thumbnail: "../images/videos-section/thumbnail-2.jpg",
        video_time: "8:31",
        channel_logo: "../images/videos-section/channel-logo-2.jpg",
        title: "Where Have I Been?",
        channel_name: "BeastBoyShub",
        video_views: "3.5M views &#xb7 1 month ago",
        video_link: "https://www.youtube.com/watch?v=FUR9TsEYOIg&t=255s",
        channel_link: "https://www.youtube.com/c/BeastBoyShub",
      },
      {
        thumbnail: "../images/videos-section/thumbnail-3.jpg",
        video_time: "6:31:24",
        channel_logo: "../images/videos-section/channel-logo-3.jpg",
        title: "HTML & CSS Full Course - Beginner to Pro (2022)",
        channel_name: "SuperSimpleDev",
        video_views: "465K views &#xb7 13 hours ago",
        video_link: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=15838s",
        channel_link: "https://www.youtube.com/c/SuperSimpleDev",
      },
      {
        thumbnail: "../images/videos-section/thumbnail-4.jpg",
        video_time: "Live",
        channel_logo: "../images/videos-section/channel-logo-4.jpg",
        title: "lofi hip hop radio - beats to relax/study to",
        channel_name: "Lofi Girl",
        video_views: "20,518 watching now &#xb7 Started streaming on Feb 23, 2020",
        video_link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
        channel_link: "https://www.youtube.com/c/LofiGirl",
      },
      {
        thumbnail: "../images/videos-section/thumbnail-5.jpg",
        video_time: "10:25",
        channel_logo: "../images/videos-section/channel-logo-5.jpg",
        title: "Indian Streamer Solo Hacking in Valorant | Proof?",
        channel_name: "Solo",
        video_views: "100K views &#xb7 1 year ago",
        video_link: "https://www.youtube.com/watch?v=4v8z5itl1Kc&t=466s",
        channel_link: "https://www.youtube.com/c/Solomanan",
      },
      {
        thumbnail: "../images/videos-section/thumbnail-6.jpg",
        video_time: "6:31",
        channel_logo: "../images/videos-section/channel-logo-6.jpg",
        title: "Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java",
        channel_name: "CodeWithHarry",
        video_views: "2.8M views &#xb7 1 year ago",
        video_link: "https://www.youtube.com/watch?v=ntLJmHOJ0ME",
        channel_link: "https://www.youtube.com/c/CodeWithHarry",
      },
    ];
  } else {
    data.forEach((element) => {
      uploaded_videos.push(element);
    });
  }
}

rendering_Videos_After_Refresh();

uploaded_videos.forEach(function (videos) {
  addVideo(videos.thumbnail, videos.video_time, videos.channel_logo, videos.title, videos.channel_name, videos.video_views, videos.video_link, videos.channel_link);
});

// Funtcion To Upload Custom Videos
function addVideo(thumbnail, video_time, channel_logo, title, channel_name, video_views, video_link, channel_link) {
  videos_section.innerHTML += `<div class="video-grid">
        <div class="thumbnail-image-container">
            <a href="${video_link}">
                <img
                    class="thumbnail-image-source"
                    src="${thumbnail}"
                    alt="">
            </a>
            <div class="video-time">${video_time}</div>
        </div>
        <div class="video-info-container">
            <div class="channe-logo-container">
                <a href="${channel_link}">
                    <img class="channel-logo" src="${channel_logo}">
                </a>
            </div>
            <div class="video-stats-container">
                <div class="video-title">
                    <a href="${video_link}">${title}</a>
                </div>
                <div class="channel-name">
                    <a href="${channel_link}">${channel_name}</a>
                </div>
                <div class="video-stats">${video_views}</div>
            </div>
        </div>
    </div>`;
}
