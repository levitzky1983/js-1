function f(img) {
    var src = img.src; //создаем переменную атрибута src текущего объекта
    var bigImage = document.createElement("img"); //создаем элемент img
    bigImage.src = src.replace("small", "big");
    /* src созданного img присваиваем src текущего объекта с заменой слова small на big т.е. меняем папки*/
    
    var divRemove = document.querySelector(".big-image");//смотрим, есть ли уже открытое изображение
    if (divRemove == null) { 
        bigImage.onload = function () {           //если изображение загрузилось создаем div.big-image и вставляем в него img
            var divBigImage = document.createElement("div");
            divBigImage.classList.add("big-image");
            document.body.appendChild(divBigImage);
            divBigImage.appendChild(bigImage);
            bigImage.onclick = function () {
                document.body.removeChild(divBigImage);  //удаляем блок с картинкой по клику на него
            }
        }


    } else {
        document.body.removeChild(divRemove);  //если большя картинку уже открыта, то удаляем ее и заново запускаем f(img)
        f(img);
    }
    bigImage.onerror = function () {   //если src большой картинки не существут, выводим предупреждение.
        alert("изображение отсутствует");
    }

}
