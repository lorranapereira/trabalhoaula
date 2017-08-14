const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  Local.adiciona('series', {
    serie: form.serie.value,
    temporada: form.temporada.value,
    episodio: form.episodio.value
  });
  form.reset();
  e.preventDefault();
});
