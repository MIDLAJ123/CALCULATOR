"use strict";

const input = document.getElementById('input');

function appendToInput(value) {
    input.innerHTML += value;
}

function clearInput() {
    input.innerHTML = '';
}

function calculate() {
    try {
        const result = eval(input.innerHTML);
        input.innerHTML = result;
    } catch (error) {
        input.innerHTML = 'Error';
    }
}
