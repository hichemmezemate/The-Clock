function TimeNow() {
    var date = new Date();
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();


    if(heures < 10) {
        heures = "0" + heures
    }

    if(minutes < 10) {
        minutes = "0" + minutes
    }

    if(secondes < 10) {
        secondes = "0" + secondes
    }

    const h = (heures < 10) ? "0" + heures : heures;


    var temps = heures + ":" + minutes + ":" + secondes;
    document.getElementById("LeTemps").innerText = temps;
    document.getElementById("LeTemps").textContent = temps;
    setTimeout (TimeNow, 1000);

}

TimeNow()

function Waktt() {
    var wakt = new Date();
    var hours = wakt.getHours();
    var minutes = wakt.getMinutes();
    var seconds = wakt.getSeconds();
    // var hour = (Math.PI * hours / 6) + (Math.PI / 2);
    // var hour = (Math.PI / 6 - Math.PI / 2) * hours;
    var hour = (30 * hours) + 180;
    var minute = (minutes * 6) + 180;
    var second = (seconds * 6) + 180;
    var h = (hours < 10) ? "0" + hours : hours;
    var m = (minutes < 10) ? "0" + minutes : minutes;
    var s = (seconds < 10) ? "0" + seconds : seconds;


    // document.querySelector('span.hour').innerHTML = h;
    // document.querySelector('span.minute').innerHTML = m;
    document.querySelector('span.hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('span.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('span.second').style.transform = `rotate(${second}deg)`;

    setTimeout(Waktt, 1000);
}    

Waktt()



