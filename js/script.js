'use strict'

//Les variqbles dont on a besoin 
let sp, btn_start, btn_stop, t, ms, s, mn, h;

//Fonction pour initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    console.log(sp);
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

//mettre en place le compteur
function update_chrono(){
    ms += 1;
    if(ms === 10){
        ms = 1;
        s += 1;
    }
    if(s === 60){
        s = 0;
        mn += 1;
    }
    if(mn === 60){
        mn = 0;
        h += 1;
    }

    //insertion des valeurs dans les spans
    //[0] per;et de selectionner le premier span
    // ainai de suite jusqu'au trois
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}


//mettre en place la fonction du bouton start
function start(){
    //cette ligne de code execute la function update_chrono ttes les 100 ms
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true; 
    // btn_stop.disabled = false;
} 


//mettre en place la fonction du bouton stop
function stop(){
    // cette permet de supprinmer l'interval en recuperant l'id dans la variable t
    clearInterval(t);
    // btn_stop.disabled = true;
    btn_start.disabled = false;
}

//Iniatialiser les valeurs du compteur
function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    //inserer ces nouvelles valeurs dans les spans
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}
