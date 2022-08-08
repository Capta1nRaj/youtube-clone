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
  sessionStorage.setItem("local_storage_for_videos", JSON.stringify(uploaded_videos));

  // console.log(uploaded_videos);

  // Clear Form After Clicking The Submit Button
  document.getElementById("form").reset();
});
