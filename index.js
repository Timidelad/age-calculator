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

    let dayInputConverted = dayInput.value;
    let monthInputConverted = monthInput.value;
    let yearInputConverted = yearInput.value;

    const d = new Date();

    let currentYear = d.getFullYear();
    let currentMonth = d.getMonth() + 1;
    let currentDay = d.getDate();

    if ((dayInputConverted == "" || dayInputConverted == " ") || (monthInputConverted == "" || monthInputConverted == " ") || (yearInputConverted == "" || yearInputConverted == " ") || (monthInputConverted == 1 && dayInputConverted > 31) || (monthInputConverted == 2 && dayInputConverted > 29) || (monthInputConverted == 3 && dayInputConverted > 31) || (monthInputConverted == 4 && dayInputConverted > 30) || (monthInputConverted == 5 && dayInputConverted > 31) || (monthInputConverted == 6 && dayInputConverted > 30) || (monthInputConverted == 7 && dayInputConverted > 31) || (monthInputConverted == 8 && dayInputConverted > 31) || (monthInputConverted == 9 && dayInputConverted > 30) || (monthInputConverted == 10 && dayInputConverted > 31) || (monthInputConverted == 11 && dayInputConverted > 30) || (monthInputConverted == 12 && dayInputConverted > 31) || (monthInputConverted > 12) || (monthInputConverted < 1) || (dayInputConverted < 1) || (yearInputConverted > currentYear)) {
        document.querySelector('#errorMessage').innerHTML = "invalid input";
        return
    }

        function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function calculateAge(yearInputConverted, monthInputConverted, dayInputConverted, currentYear, currentMonth, currentDay) {

        let years = currentYear - yearInputConverted;
        let months = currentMonth - monthInputConverted;
        let days = currentDay - dayInputConverted;

        if (days < 0) {

            const daysInPreviousMonth = getDaysInMonth(currentMonth, currentYear);
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

    

    document.querySelector('.day-result').innerHTML = age.days;
    document.querySelector('.month-result').innerHTML = age.months;
    document.querySelector('.year-result').innerHTML = age.years;
}
document.getElementById('clickImg').onclick = clickImgFunction;