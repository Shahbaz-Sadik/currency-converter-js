

//select dom element
const currencyOne = document.getElementById('select-currency-one');
const inputOne = document.getElementById('input-one');
const currencyTwo = document.getElementById('select-currency-two');

const resultShow= document.getElementById('result');
const rateValue = document.getElementById('rate-value');
const swapButton = document.getElementById('swap-btn');

//add eventlistener to selected dom element
currencyOne.addEventListener('change', calculateCurrency);
currencyTwo.addEventListener('change', calculateCurrency);
inputOne.addEventListener('input', calculateCurrency);
//inputTwo.addEventListener('input', convator);


//swap button for the select value
swapButton.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    //convator();
    calculateCurrency();

});

//call api and calculate functionn
async function fetchCurrencyRate() {
    const currencyValueOne = currencyOne.value;
    const currencyValueTwo = currencyTwo.value;
    //console.log(currencyValueTwo);
    try {
        const result = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValueOne}`);
        const data = await result.json();
        //console.log(data);
        const rates = data.rates[currencyValueTwo];
        //console.log(rates);

        
        rateValue.innerText = (`1 ${currencyValueOne} = ${rates} ${currencyValueTwo}`);

        //resultShow.innerText = (rates * inputOne.value).toFixed(2);

        return rates;

    } catch (error) {
        alert(error);
    }

}

async function calculateCurrency() {
    const getRates = await fetchCurrencyRate();

    resultShow.innerText = (getRates * inputOne.value).toFixed(2);
    //console.log(getRates);
}



//initial call
calculateCurrency();
