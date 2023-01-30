let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let CHF = 4.74;
let EUR = 4.69;
let GBP = 5.35;
let USD = 4.71;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = valueElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "CHF":
            result = value / CHF;
            break;
        case "EUR":
            result = value / EUR;
            break;
        case "GBP":
            result = value / GBP;
            break;
        case "USD":
            result = value / USD;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});


