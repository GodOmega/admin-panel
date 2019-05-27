const menuLateral = document.querySelector('.menu-lateral');
const cerraMenu = document.querySelector('.close');

menuLateral.addEventListener('click', (e) => {

    const claseMenu = e.target.classList;
    console.log(claseMenu);

      const contenedor =document.querySelector('.pagina');
      const menu = document.querySelector('.fa-bars');
      console.log(menu);

      if(claseMenu.contains('fa-bars')){
          menu.style.display= 'none';
          contenedor.classList.add('no-menu');
      }
});

cerraMenu.addEventListener('click', (e) => {
    const claseCerrar = e.target.classList;
    console.log(claseCerrar);

    const contenedor =document.querySelector('.pagina');
    const menu = document.querySelector('.fa-bars');

    if(claseCerrar.contains('fa-times')){
        menu.style.display = "block"
        contenedor.classList.remove('no-menu');
    }


});