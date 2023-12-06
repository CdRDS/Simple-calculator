const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const inputs = document.querySelectorAll("input");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const displayValue = document.querySelector(".value");
let val1 = Number(input1.value);
let val2 = Number(input2.value);
let result;


inputs.forEach(input => {
    input.addEventListener("input", () => {
        if(isNaN(input.value) || input.value === "") {
            input.classList.add("outline");
        } else {
            input.classList.remove("outline");
        }
    });
});

    function resultFunction() {
        displayValue.innerText = Number.isInteger(result) ? result : result.toFixed(2);
    }

    plus.addEventListener("click", () => {
        result = val1 + val2;
        resultFunction();
    });

    minus.addEventListener("click", () => {
        result = val1 - val2;
        resultFunction();
    });

    divide.addEventListener("click", () => {
        result = val1 / val2;
        resultFunction();
    });

    multiply.addEventListener("click", () => {
        result = val1 * val2;
        resultFunction();
    });

