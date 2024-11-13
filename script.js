
function zadanie1(){

    document.getElementById("xd2").innerHTML = '';

    var iloscLiczb = Number(prompt("Подай текст"));

    document.getElementById("obraz").style.opacity = 1;
    var text = "" + iloscLiczb + ":<br>";

    for (var i = 1; i <= iloscLiczb; i++) {
        text += i + " ";
    }

    document.getElementById("xd").innerHTML = text;
}

function zadanie2(){

    document.getElementById("xd").innerHTML = '';

    var iloscLiczb = Number(prompt("Подай текст"));

    document.getElementById("obraz").style.opacity = 1;
    var text = "" + iloscLiczb;

    document.getElementById("xd").innerHTML = text;

    const xdElement = document.getElementById('xd2');
    let result = '';

    for (let i = iloscLiczb; i >= 1; i--) {
        result += i + ' ';
    }

    xdElement.textContent = result.trim();
}

function zadanie3(){

    document.getElementById("xd").innerHTML = '';

        let suma = 0;
    
        for (let i = 1; i <= 10; i++) {
            suma += i;
        }

        document.getElementById("xd").innerHTML = "Suma kolejnych 10 liczb całkowitych począwszy od 1 to: ";
        const xdElement = document.getElementById('xd2').innerHTML = + suma;
    }
    


function zadanie4(){
    document.getElementById('xd').innerHTML = ''
        document.getElementById('xd2').innerHTML = ''

    var liczbePar = Number(prompt("Podaj liczbe 2,4,6,8"));
    document.getElementById("obraz").style.opacity = 1;
    var text = "" + liczbePar
    document.getElementById("xd").innerHTML = text;

    let tekst = "";

    for (let i = 2; i <= liczbePar * 2; i += 2)  {
        tekst += i + " ";
    }

    document.getElementById("xd").innerHTML = "liczb całkowitych: " + tekst;
}
