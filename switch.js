document.addEventListener('keydown', function (event) {
    // Verificar si la tecla presionada es la flecha derecha (keyCode 39)
    if (event.keyCode === 37) {
      window.location.href = document.getElementById('iz').href;
    }
    // Verificar si la tecla presionada es la flecha izquierda (keyCode 37)
    else if (event.keyCode === 39) {
      window.location.href = document.getElementById('de').href;
    }
  });