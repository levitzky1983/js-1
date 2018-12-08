function start() {
    var field = document.createElement("div");
    field.className = "field";
    document.getElementById("main").appendChild(field);


    //Создаем поле. Сетка 10*10. Крайние блоки отведены под буквы и цифры
    for (var i = 1; i <= 10; i++) {
        var row = document.createElement("div");
        row.classList.add("rows");

        field.appendChild(row);
        for (var j = 1; j <= 10; j++) {
            var col = document.createElement("div");
            col.classList.add("columns");
            if (i != 1 && i != 10 && j != 1 && j != 10) {
                if (i % 2 == 0 && j % 2 == 0) {
                    col.classList.add("white-field", "chess-field");
                } else if (i % 2 != 0 && j % 2 == 0) {
                    col.classList.add("black-field", "chess-field");
                } else if (i % 2 == 0 && j != 0) {
                    col.classList.add("black-field", "chess-field");
                } else {
                    col.classList.add("white-field", "chess-field");
                }
            } else if ((i == 1 || i == 10) && (j != 1 && j != 10)) {
                switch (j - 1) {
                    case 1:
                        col.innerHTML = "<p>A</p>";
                        break;
                    case 2:
                        col.innerHTML = "<p>B</p>";
                        break;
                    case 3:
                        col.innerHTML = "<p>C</p>";
                        break;
                    case 4:
                        col.innerHTML = "<p>D</p>";
                        break;
                    case 5:
                        col.innerHTML = "<p>E</p>";
                        break;
                    case 6:
                        col.innerHTML = "<p>F</p>";
                        break;
                    case 7:
                        col.innerHTML = "<p>G</p>";
                        break;
                    case 8:
                        col.innerHTML = "<p>F</p>";
                        break;
                    default:
                        alert("error");

                }

                if (i == 1) {
                    col.classList.add("rotate");
                }
            } else if ((j == 1 || j == 10) && (i != 1 && i != 10)) {
                col.innerHTML = "<p>" + (i - 1) + "</p>";
                if (j == 10) {
                    col.classList.add("rotate");
                }
            }

            row.appendChild(col);
        }
    }

    var buttonFigures = document.createElement("button");
    buttonFigures.classList.add("button-figures");
    buttonFigures.innerText = "Расставить фигуры";
    buttonFigures.onclick = startFigures;
    field.appendChild(buttonFigures);

}

function startFigures() {
    //создаем массив из клеток игрового поля
    var fieldChess = document.querySelectorAll(".chess-field");
    //создаем конструктор фигур. Я думаю в дальнейшем понадобится
    function figure(name, color, code) {
        this.name = name;
        this.color = color;
        this.code = code;
    }
    var whitePawn = new figure("пешка", "белая", "&#9817;");
    var blackPawn = new figure("пешка", "черная", "&#9823;");
    var whiteTower = new figure("ладья", "белая", "&#9814;");
    var blackTower = new figure("ладья", "черная", "&#9820;");
    var whiteHorse = new figure("лошадь", "белая", "&#9816;");
    var blackHorse = new figure("лошадь", "черная", "&#9822;");
    var whiteElephant = new figure("слон", "белый", "&#9815;");
    var blackElephant = new figure("слон", "черный", "&#9821;");
    var whiteQueen = new figure("ферзь", "белый", "&#9813;");
    var blackQueen = new figure("ферзь", "черный", "&#9820;");
    var whiteKing = new figure("король", "белый", "&#9812;");
    var blackKing = new figure("король", "черный", "&#9818;");
    var whiteFigures = [whiteTower, whiteHorse, whiteElephant, whiteQueen, whiteKing, whiteElephant, whiteHorse, whiteTower];
    var blackFigures = [blackTower, blackHorse, blackElephant, blackQueen, blackKing, blackElephant, blackHorse, blackTower];
    //расставляем фигуры
    for (var i = 48; i < 56; i++) {
        fieldChess[i].innerHTML = whitePawn.code;
        fieldChess[i].style.color = "#ffffff";
    }
    for (var i = 8; i < 16; i++) {
        fieldChess[i].innerHTML = blackPawn.code;
    }

    for (var i = 56, j = 0; i < 64; i++, j++) {
        fieldChess[i].innerHTML = whiteFigures[j].code;
        fieldChess[i].style.color = "#ffffff";
    }
    for (var i = 0; i < 8; i++) {
        fieldChess[i].innerHTML = blackFigures[i].code;
    }
}
