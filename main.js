// feauture arrow 
let Feauturelinks = document.querySelector('.Feauture-links');
let ArrowFeauture = document.querySelector('.Feauture img');
ArrowFeauture.onclick = function () {
    Feauturelinks.classList.toggle('active');
    ArrowFeauture.classList.toggle('active');
}
// Company 
let companyLinks = document.querySelector('.company-links');
let arrowCompany = document.querySelector('.Copmany img');
arrowCompany.onclick = function () {
    companyLinks.classList.toggle('active');
    arrowCompany.classList.toggle('active');
}
//  menu bar open
let menuBar = document.querySelector('.menu-btn');
let menu_bar_mobil = document.querySelector('.menu-bar-mobil');
let main_content_mobil = document.querySelector('.main-content-mobil')
menuBar.onclick = function () {
    menu_bar_mobil.classList.add('active');
    main_content_mobil.classList.add('active');

}
// menu bar close
let close_menu = document.querySelector('.close-menu img');
close_menu.onclick = () => {
    menu_bar_mobil.classList.remove('active');
    main_content_mobil.classList.remove('active');
}
// feuature mobil
let Feauture_inside_mobil = document.querySelector('.Feauture-inside-mobil');
let Feauture_mobil_arrow = document.querySelector('.Feauture-mobil img');
Feauture_mobil_arrow.onclick = () => {
    Feauture_inside_mobil.classList.toggle('active');
    Feauture_mobil_arrow.classList.toggle('active');
}
// Comoany mobil
let Copmany_arrow_mobil = document.querySelector('.Copmany-mobil img');
let Comoany_links_mobil = document.querySelector('.company-links-mobil');
Copmany_arrow_mobil.onclick = () => {
    Copmany_arrow_mobil.classList.toggle('active');
    Comoany_links_mobil.classList.toggle('active');
}

