var products = [
    {
        name: "Леопард",
        src: "img/small/Leopard.jpg",
        price: 2500,
        id: "1"
    },
    {
        name: "Обезьяна",
        src: "img/small/monkey.jpg",        //Создаем массив объектов(товаров)
        price: 1300,
        id: "2"
    },
    {
        name: "Слон",
        src: "img/small/elep.jpg",
        price: 9800,
        id: "3"
    }
]

function getProducts(arr) {  //функция создания каталога

    var catalog = document.querySelector(".catalog");
    for (i of arr) {

        var product = document.createElement("div");  //создание div для товара
        product.classList.add("product");
        catalog.appendChild(product);
        var productName = document.createElement("h3"); //создание заголовка имени товара
        productName.classList.add("product-name");
        productName.id = i.id + "n";                     //присвоение id для заголовка имени
        //alert(productName.id);
        productName.innerText = i.name;
        product.appendChild(productName);
        var productImage = document.createElement("img");  //создание картинки товара
        productImage.classList.add("product-image");
        productImage.src = i.src;                         //создание аттрибутов картинки товара
        productImage.alt = i.name;
        productImage.width = "200";
        productImage.height = "150";
        product.appendChild(productImage);
        var productPrice = document.createElement("p");
        productPrice.classList.add("product-price");           //создание блока цены для товара
        productPrice.innerText = "ЦЕНА: ";
        var productPriceSpan = document.createElement("span");
        productPriceSpan.id = i.id;                            //присвоение id для цены имени
        productPriceSpan.innerText = i.price;
        productPrice.appendChild(productPriceSpan);
        // productPrice.innerText += " руб";
        product.appendChild(productPrice);
        var button = document.createElement("button");
        button.classList.add("button-buy");                    //создание кнопки "добавить в корзину"
        button.id = i.id + "b";                                 //создание id кнопки "добавить в корзину"
        button.innerText = "В корзину";
        button.onclick = toBascet;                           //на событие клик добавляем функцию обработки
        product.appendChild(button);
    }
}

var bascetArray = [];                                 //массив добавленных в корзину товаров
var allPrice = 0;                                       //переменная суммарной стоимости корзины

function toBascet(event) {                      //функция обработки события клик
    var x = event.target.id.split("");          //получаем id нажатой кнопки и представляем как массив
    x.pop();                                    //убираем последний элемент массива, чтобы получить id цены товара
    var productCostId = x.join("");
    var price = +(document.getElementById(productCostId).innerText);  //получаем стоимость товара
    allPrice += price;                                                  //получаем стоимость всей корзины
    var bascetCost = document.getElementById("cost");
    bascetCost.innerText = allPrice;                                    //выводим на экран
    var productNameId = productCostId + "n";            //получаем id имени товара
    //alert(productNameId);
    bascetArray.push(document.getElementById(productNameId).innerText);  //добавляем в массив товаров корзины
    var bascetName = document.getElementById("products");
    bascetName.innerText = bascetArray;                             //выводим на экран

}

getProducts(products);
                                