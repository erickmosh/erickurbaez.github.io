const services = document.querySelectorAll('.service');

services.forEach(service => {
  const img = service.querySelector('img');
  const description = service.querySelector('p');

  img.addEventListener('click', () => {
    description.classList.toggle('show');
  });
});
.service p {
  display: none;
}

.service p.show {
  display: block;
}
