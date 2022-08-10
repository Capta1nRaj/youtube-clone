// Form To Submit The Custom Uploaded Videos Without Getting Refresh
form.addEventListener("submit", function (e) {
  e.preventDefault(); // This Don't Refresh The Page Which Allow Us To Upload The Video In The Array
  const form = new FormData(e.target);

  const thumbnail = form.get("thumbnail");
  const video_time = form.get("video_time");
  const channel_logo = form.get("channel_logo");
  const title = form.get("title");
  const channel_name = form.get("channel_name");
  const video_views = form.get("video_views");
  const video_link = form.get("video_link");
  const channel_link = form.get("channel_link");

  // Pushing The Data To The Object Of The Array
  addVideo(thumbnail, video_time, channel_logo, title, channel_name, video_views, video_link, channel_link);
  const pushing_Video_Details_In_Object_Of_The_Array = { thumbnail, video_time, channel_logo, title, channel_name, video_views, video_link, channel_link };
  uploaded_videos.push(pushing_Video_Details_In_Object_Of_The_Array);

  // To Store The Pushed Data In Local Storage
  localStorage.setItem("local_storage_for_videos", JSON.stringify(uploaded_videos));

  // console.log(uploaded_videos);

  // Clear Form After Clicking The Submit Button
  document.getElementById("form").reset();
});

// To Upload Thumbnail From Choose File Button
document.querySelector("#myFileInput").addEventListener("change", function () {
  const reader = new FileReader(); //Converting File To Data URL (Data URL is a URL which contains data of the uploaded file.)

  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
    // This Will Update The Data URL Inside The Input Value
    function upload_thumbnail() {
      const recentImageDataURL = localStorage.getItem("recent-image");
      if (recentImageDataURL) {
        var localStorageValue = localStorage.getItem("recent-image");
        document.getElementById("input-field-id").value = localStorageValue;
      }
    }
    upload_thumbnail();
  });

  // To Get The Data URL
  reader.readAsDataURL(this.files[0]);
});

// To Generate Randoms Link For The Video
const totalCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345" + "678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";
var button = document.getElementsByClassName("generate-link-button");

function randomsLinkGenerator() {
  var generatedLink = "";
  generaterLink.value = "";
  for (var i = 0; i <= 16; i++) {
    var randomsLink = Math.floor(Math.random() * totalCharacters.length + 1);
    generatedLink += totalCharacters.charAt(randomsLink);
  }
  return generatedLink;
}

var generaterLink = document.getElementById("password-input");
function generater_password_onclick() {
  generaterLink.value = "https://www.youtube.com/" + randomsLinkGenerator();
}

// Change Text Color When Turned On Dark Mode
function textColorChange() {
  var form_text_length = document.getElementsByClassName("form-text").length;
  for (var i = 0; i < form_text_length; i++) {
    document.getElementsByClassName("form-text")[i].classList.toggle("dark-mode");
  }

  document.getElementById("myFileInput").classList.toggle("dark-mode");

  var collection = document.getElementsByTagName("input").length;
  for (var i = 0; i < collection; i++) {
    document.getElementsByTagName("input")[i].classList.toggle("dark-mode");
  }
}
