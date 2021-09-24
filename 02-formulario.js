const nameTitle = document.querySelector('#name');
const input = document.querySelector('#input');

const writeName = () => {
    const inputValue = input.value;
    parseInt(inputValue) >= 18 ? 'Eres mayor de edad' :'no eres mayor de dad';
    nameTitle.textContent = inputValue;
}