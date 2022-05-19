function setDate()
{
    let date = new Date();
    let text = date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth() + ", " + date.getDay();
    document.getElementById("time").innerText = text;
}

function change()
{
    setInterval(() => {
        let divs = document.getElementsByClassName("cell");
        for (let i=0; i<divs.length; i++) {
            divs[i].innerHTML = "";
        }

        let choosen = Math.floor(Math.random()*divs.length);
        divs[choosen].innerHTML ='<img src="img/k.gif" alt="coming in your life" width=100% height=100%>';}, 500);
}

function dispimage()
{
    const image = document.getElementById("Image");
    var opacity = 0;
    var isMouseIn = false;
    const speed = 0.05;

    image.onmouseenter = () => {
        isMouseIn = true;
    }

    image.onmouseleave = () => {
        isMouseIn = false;
    }

    setInterval(() => {
        if (isMouseIn && opacity > 0) {
            opacity -= speed;
            image.style.opacity = opacity.toString();
        }

        else if (!isMouseIn && opacity < 1) {
            opacity += speed;
            image.style.opacity = opacity.toString();
        }
    }, 16);

}
// this - обращение к нынешнему объеку
function acc() {
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") { //вываливает блок
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}
// function link () {
//     const div = document.getElementById("link");
//     let input = prompt("Введите ссылку:");
//     let index = 0;
//     while (input) {
//         index++
//
//         const anchor = document.createElement("a");
//         anchor.href = input;
//         anchor.innerText = "#" + index + ":" + input;
//         div.appendChild(anchor)
//         div.appendChild(document.createElement("br"));
//         input = prompt("Введите ссылку:");
//     }
//     input = prompt("Удалите элемент НАД которым будет удален элемент (типа при вводе 4, будет удален 3):");
//     while (input) {
//     let inputInt = parseInt(input);
//
//     index = 0;
//     document.querySelectorAll("#link a").forEach(element => {
//         index += 1;
//         if (index == inputInt - 1) {
//             element.remove();
//         }
//     });
//
//     input = prompt("Введите ссылку для вставки:");
//     }
// }
//
// window.onload = link


