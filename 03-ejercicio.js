const nameTitle = document.querySelector('#name');
const input = document.querySelector('#input');

const writeAge = () => {
    const inputValue = input.value;
    const mensaje = parseInt(inputValue) >= 18 ? 'Eres mayor de edad' :'No eres mayor de dad';
    nameTitle.textContent = mensaje;
}