const apiKey = "YOUR_YOUTUBE_API_KEY"; 
const channelId = "Noob to Pro MK";
const videoContainer = document.getElementById("videoContainer");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`)
.then(res => res.json())
.then(data => {
  data.items.forEach(video => {
    if (video.id.videoId) {
      videoContainer.innerHTML += `
        <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      `;
    }
  });
});
