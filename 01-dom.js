/*const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'titulo cambiado desde js';
const texto = document.getElementById('text')
texto.innerHTML = 'escrito desde js';
texto.style.background = 'red';
texto.style.color = 'white';
console.log(texto);*/
/*Obtiene un elemento por id*/
document.getElementById
/*Obtiene todos los elementos de una clase y devuleve un arreglo*/
document.getElementsByClassName
/*obtiene todos los elementos por nombre y devuelve un arreglo*/
document.getElementsByName

/*Crear elementos html*/
const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde el js';

const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);