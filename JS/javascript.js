{

const calculateResult = (value, currency) => {

const CHF = 4.74;
const EUR = 4.69;
const GBP = 5.35;
const USD = 4.71;

    switch (currency) {
        case "CHF":
            return value / CHF;
            
        case "EUR":
            return  value / EUR;
            
        case "GBP":
            return  value / GBP;
            
        case "USD":
            return  value / USD;
    }
}

const resultCurrency = (event) => {
    event.preventDefault();
    
    const valueElement = document.querySelector(".js-value");
    const currencyElement = document.querySelector(".js-currency");
    



    const value = valueElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(value, currency);

    updateResulteText(result, currency, value);
};

const updateResulteText = (result, currency) => {
    const resultElement = document.querySelector(".js-result");
    

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
}

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", resultCurrency)
}

init();

}




