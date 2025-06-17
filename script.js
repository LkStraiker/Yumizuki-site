
  const btnMenu = document.getElementById('btn-menu');
  const menuDropdown = document.getElementById('menu-dropdown');

  btnMenu.addEventListener('click', function (e) {
    e.preventDefault();
    menuDropdown.classList.toggle('oculto');
  });

  document.addEventListener('click', function (event) {
    if (!menuDropdown.contains(event.target) && !btnMenu.contains(event.target)) {
      menuDropdown.classList.add('oculto');
    }
  });

  

