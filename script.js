window.onload = () => {
  const blackScreen = document.getElementById('black-screen');
  const introVideo = document.getElementById('intro-video');
  const mainContent = document.getElementById('main-content');
  const heartBtn = document.getElementById('heart-button');
  const heart2 = document.getElementById('heart2-video');

  // Açılışta karanlık ekran + intro video
  setTimeout(() => {
    blackScreen.style.opacity = 0;
    introVideo.style.display = 'block';
    introVideo.play();

    introVideo.onended = () => {
      blackScreen.style.opacity = 1;
      setTimeout(() => {
        introVideo.style.display = 'none';
        blackScreen.style.display = 'none';
        mainContent.style.display = 'flex';
      }, 2000);
    };
  }, 2000);

  // ❤️ Kalp butonuna basınca sadece klp1.mp4 oynat
  heartBtn.onclick = () => {
    mainContent.style.display = 'none';

    heart2.style.display = 'block';
    heart2.currentTime = 0;

    const playPromise = heart2.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error("Video oynatma hatası:", error);
      });
    }
  };
};
