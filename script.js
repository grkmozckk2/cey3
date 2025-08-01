window.onload = () => {
  const blackScreen = document.getElementById('black-screen');
  const introVideo = document.getElementById('intro-video');
  const mainContent = document.getElementById('main-content');
  const heartBtn = document.getElementById('heart-button');
  const heart1 = document.getElementById('heart1-video');
  const heart2 = document.getElementById('heart2-video');

  // Açılış karanlık ekran
  setTimeout(() => {
    blackScreen.style.opacity = 0;
    introVideo.style.display = 'block';
    introVideo.play();

    // Video biterken tekrar karart
    introVideo.onended = () => {
      blackScreen.style.opacity = 1;
      setTimeout(() => {
        introVideo.style.display = 'none';
        blackScreen.style.display = 'none';
        mainContent.style.display = 'block';
      }, 2000);
    };
  }, 2000);

  // Buton tıklanınca kalp1.mp4 oynat
  heartBtn.onclick = () => {
    mainContent.style.display = 'none';
    heart1.style.display = 'block';
    heart1.play();

    heart1.onended = () => {
      heart1.style.display = 'none';
      
      // Ekran siyah-beyaz geçişi
      document.body.style.transition = "background 2s";
      document.body.style.background = "white";
      
      heart2.style.display = 'block';
      heart2.play();
    };
  };
};