/*
* Создать эмулятор светофора: 3 элемента, которые в выключенном состоянии серые, 
* во включенном - трех цветов светофора, цвета переключаются по кнопке (всегда горит только 1 цвет). 
* По событию загрузки страницы должен загораться зеленый. 
*/
var grey = '#454545';
var green = '#27ae60';
var red = '#FF0000';
var yellow = '#FFFF00';
var color;

window.onload = function() { 
  // при загрузке страницы горит зеленый
   color = document.getElementsByClassName('tlight__color')[2].style.background = green;
    
};

  let button = document.querySelector('.button');

  button.addEventListener('click', function () {
      if(color == green){
        document.getElementsByClassName('tlight__color')[0].style.background = red;
        document.getElementsByClassName('tlight__color')[2].style.background = grey;
        color = red;
      }else if(color == red){
        document.getElementsByClassName('tlight__color')[0].style.background = grey;
        document.getElementsByClassName('tlight__color')[1].style.background = yellow;
        color = yellow;
      }else if(color == yellow){
        document.getElementsByClassName('tlight__color')[1].style.background = grey;
        document.getElementsByClassName('tlight__color')[2].style.background = green;
        color = green;
      }
  })

 
   