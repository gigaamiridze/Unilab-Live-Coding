const btn = document.querySelectorAll('.btn');
const modal = document.querySelectorAll('.modal');

btn.forEach((item) => {
  item.addEventListener('click', () => {
    modal.forEach((item) => {
      item.classList.toggle('active');
    })
  })
})