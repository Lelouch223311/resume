
function toHome() {
    window.location.href="./index.html"
}

function aboutme() {
    let confirmm = confirm('Вы хотите перейти к страничке "Обо мне" ?')
    if (confirmm === true) {
        window.location.href = "./aboutme.html"
    } else {
        let randomka = Math.floor(Math.random() * 5) + 1;

        if(randomka == 1){
            alert("Okey,вы отказались(( \n\ |1|")
        } else if(randomka == 2){
            alert("Не хочешь узнать обо мне ? :C \n\ \n\ я расстроился :c \n\ |2|")
        } else if(randomka == 3){
            alert("Твой Отказ... Бог простит,а я запомню ^_^ \n\ |3|")
        } else if(randomka == 4){
            alert("Ну... На нет и Суда нет. \n\ |4|")
        } else if(randomka == 5){
            alert("Так и запишем... \n\ \n\ Расстреляем,завтра вечером 0_o \n\ |5|")
        }
    }
    
}


function pawnInfo() {
    let link = 'https://ru.wikipedia.org/wiki/Pawn';
    let confirmm = confirm('Вы хотите перейти на Wiki [PAWN] ?')
    if (confirmm === true) {
        window.open(link, '_blank', 'width=800,height=600');
    } else {
        alert("Okey,вы отказались.")
    }
}

function myProjects(){
    
    window.location.href="./myProjects.html" 

}
function toDiplom(){

    let link = 'https://lelouch223311.github.io/'
    let confirmm = confirm('Вы хотите перейти к просмотру Проекта ?')
    if (confirmm === true) {
        window.open(link, '_blank', 'width=max-width,height=max-height'); // :3
    } else {
        alert("Вы отказались посмотреть на мой проект :v")
    }
}
function toMyGH(){

    let link = 'https://github.com/Lelouch223311'
    let confirmm = confirm('Вы хотите перейти к просмотру моего Гитхаба ?')
    if (confirmm === true) {
        window.open(link, '_blank', 'width=max-width,height=max-height'); // :3
    } else {
        alert("Вы отказались посмотреть :v")
    }
}


