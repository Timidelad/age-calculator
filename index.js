function dayNumber(input) {
    let maxLength = 2;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

function monthNumber(input) {
    let maxLength = 2;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

function yearNumber(input) {
    let maxLength = 4;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let numberElement = document.getElementById('day');

    numberElement.addEventListener('input', function () {
      let numberValue = numberElement.value;

      // Remove non-alphabetic characters and spaces
      let sanitizedNumberValue = numberValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      numberElement.value = sanitizedNumberValue;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let numberElement = document.getElementById('month');

    numberElement.addEventListener('input', function () {
      let numberValue = numberElement.value;

      // Remove non-alphabetic characters and spaces
      let sanitizedNumberValue = numberValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      numberElement.value = sanitizedNumberValue;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let numberElement = document.getElementById('year');

    numberElement.addEventListener('input', function () {
      let numberValue = numberElement.value;

      // Remove non-alphabetic characters and spaces
      let sanitizedNumberValue = numberValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      numberElement.value = sanitizedNumberValue;
    });
});

function clickImgFunction() {
    let dayInput = document.getElementById('day');
    let monthInput = document.getElementById('month');
    let yearInput = document.getElementById('year');

    let dayInputConverted = parseInt(dayInput.input);
    let monthInputConverted = parseInt(monthInput.input);
    let yearInputConverted = parseInt(yearInput.input);

    const d = new Date();

    let currentDay = d.getDay();
}

document.getElementById('clickImg').onclick = clickImgFunction;