const mlNav = document.querySelector('.ml-nav');
const navBar = mlNav.querySelector('.navbar-nav');
const dropDown = navBar.querySelector('.dropdown');
const dropDownOne = dropDown.querySelector('.dropdown-menu.sub-one');
const dropDownOneItem = dropDownOne.querySelectorAll('.dropdown-item');


dropDown.addEventListener("mouseenter", event => {

  // if(event.target.querySelector('.dropdown')) {
    event.target.classList.add('active');
  // }

  dropDownOneItem.forEach( elem => {

    // elem.classList.add('drrrr');
  
    elem.addEventListener("mouseover", event => {
      event.target.classList.add('active');
    }, false);
    
    elem.addEventListener("mouseleave", event => {
    
      event.target.classList.remove('active');
    
    }, false);
  
  });

}, false);

dropDown.addEventListener("mouseleave", event => {

  event.target.classList.remove('active');

}, false);



  // dropDownOne.addEventListener("mouseenter", event => {
  //   event.target.querySelector('.dropdown-item').classList.add('active');
  // }, false);