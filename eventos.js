document.getElementById('btn_perfil').onclick = function (){
    console.log("capturamos el evento click");
    document.getElementById('habilidades').style='display: none';
    document.getElementById('experiencia').style='display: none';
    document.getElementById('contacto').style='display: none';
    document.getElementById('perfil').style='display: block';
}

document.getElementById('btn_habilidades').onclick = function (){
    console.log("capturamos el evento click");
    document.getElementById('perfil').style='display: none';
    document.getElementById('experiencia').style='display: none';
    document.getElementById('contacto').style='display: none';
    document.getElementById('habilidades').style='display: block';
}

document.getElementById('btne_xperiencia').onclick = function (){
    console.log("capturamos el evento click");
    document.getElementById('habilidades').style='display: none';
    document.getElementById('perfil').style='display: none';
    document.getElementById('contacto').style='display: none';
    document.getElementById('experiencia').style='display: block';
}

document.getElementById('btn_contacto').onclick = function (){
    console.log("capturamos el evento click");
    document.getElementById('habilidades').style='display: none';
    document.getElementById('experiencia').style='display: none';
    document.getElementById('perfil').style='display: none';
    document.getElementById('contacto').style='display: block';
}




