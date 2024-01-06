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

let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');

let dayInputConverted = parseInt(dayInput.value);
let monthInputConverted = parseInt(monthInput.value);
let yearInputConverted = parseInt(yearInput.value);

const d = new Date();

let currentYear = d.getFullYear();
let currentMonth = d.getMonth() + 1;
let currentDay = d.getDate();
console.log(currentDay)

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function calculateAge(yearInputConverted, monthInputConverted, dayInputConverted, currentYear, currentMonth, currentDay) {

    let years = currentYear - yearInputConverted;
    let months = currentMonth - monthInputConverted;
    let days = currentDay - dayInputConverted;

    if (days < 0) {

        const daysInPreviousMonth = getDaysInMonth(currentMonth - 2, currentYear);
        days += daysInPreviousMonth;

        months -= 1;
    }

    if (months < 0) {
        months += 12;
        
        years -= 1;
    }

    return { years, months, days };
}

let age = calculateAge(yearInputConverted, monthInputConverted, dayInputConverted, currentYear, currentMonth, currentDay);

function clickImgFunction() {

    if((dayInputConverted == "" || dayInputConverted == " ") || (monthInputConverted == "" || monthInputConverted == " ") (yearInputConverted == "" || yearInputConverted == " ")) {
        document.getElementById('errorMessage')
    }
}
// document.getElementById('clickImg').onclick = clickImgFunction;