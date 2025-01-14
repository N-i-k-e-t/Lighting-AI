const promptInput = document.getElementById('promptInput');
const enterButton = document.getElementById('enterButton');
const videoContainer = document.querySelector('.video-container');
const videoPlayer = document.getElementById('videoPlayer');
const loader = document.getElementById('loader');

enterButton.addEventListener('click', () => {
  const prompt = promptInput.value.trim().toLowerCase();
  if (prompt.length === 0) {
    alert("Please enter a prompt!");
    return;
  }

  //Crucially, no more specific prompt mapping; any word will work
  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.display = 'none';
    const videoURL = "/assets/Flame.mp4"; // Or any default video path
    videoPlayer.src = videoURL;
    videoPlayer.onloadedmetadata = () => {
      videoContainer.classList.add('visible');
      videoPlayer.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    };
    videoPlayer.onerror = (error) => {
      console.error("Error loading video:", error);
      alert("Error loading video. Check file name and path.");
    };
  }, 4000);
});

promptInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    enterButton.click();
  }
});
///This function now uses relative paths (adjust if your videos are in a subfolder)
//function getVideoURL(prompt) {
    //const videoUrls = {
       // "lighting lamp": "/assets/Flame.mp4", // Relative path from your HTML
        /// Add more prompts and video URLs as needed...
   // };
    //return videoUrls[prompt] || null;
//}