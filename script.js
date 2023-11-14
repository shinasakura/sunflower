function transformToSunflower() {
  const circle = document.getElementById('circle');
  const message = document.getElementById('message');

  // Transform the circle into a sunflower
  circle.style.transform = 'rotate(720deg) scale(10)';

  // Show the message after the transformation
  setTimeout(() => {
    message.classList.remove('hidden');
  }, 2000);
}
