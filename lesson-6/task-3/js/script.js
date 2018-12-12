/*В HTML задали 4 блока. У каждого своя картинка background. На одном блоке display:block и атрибут flag, 
на остальных none и нет атрибута. Работа кода js заключается в изменении display и атрибута flag, 
чтобы показывался блок с нужным background*/


function left() {                       //функция стрелки влево
    var slides = document.querySelectorAll(".slide");    //создаем массив из блоков класса slide 
    for (var i = 0; i < slides.length; i++) {

        if (slides[i].hasAttribute('flag')) {     //в цикле пробегаемся по массиву и находим блок с атрибутом flag
            if (i != 0) {                           // если картинка не первая
                slides[i].style.display = "none";
                slides[i - 1].style.display = "block";   //показываем предыдущую картинку
                slides[i].removeAttribute('flag');
                slides[i - 1].setAttribute('flag', "on");  // удаляем флаг с текущей картинки и ставим на открывшуюся
                break;
            } else {
                slides[i].style.display = "none";               //если картинка первая, то переходим на последнюю
                slides[slides.length - 1].style.display = "block";
                slides[i].removeAttribute('flag');
                slides[slides.length - 1].setAttribute('flag', "on");
                break;
            }

        } else {
            continue;
        }

    }
}

function right() {                     //аналогично функции left(), только если открыта последняя картинка, переходим на первую
    var slides = document.querySelectorAll(".slide");
    for (var i = 0; i < slides.length; i++) {

        if (slides[i].hasAttribute('flag')) {
            if (i != slides.length - 1) {
                slides[i].style.display = "none";
                slides[i + 1].style.display = "block";
                slides[i].removeAttribute('flag');
                slides[i + 1].setAttribute('flag', "on");
                break;
            } else {
                slides[i].style.display = "none";
                slides[0].style.display = "block";
                slides[i].removeAttribute('flag');
                slides[0].setAttribute('flag', "on");
                break;
            }

        } else {
            continue;
        }

    }
}
