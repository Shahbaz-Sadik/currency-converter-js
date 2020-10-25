






const currencyOne = document.getElementById('select-currency-one');
const inputOne= document.getElementById('input-one');
const currencyTwo = document.getElementById('select-currency-two');
const inputTwo = document.getElementById('input-2');
const rateValue = document.getElementById('rate-value');


currencyOne.addEventListener('change', convator);
currencyTwo.addEventListener('change', convator);
inputOne.addEventListener('input', convator);
inputTwo.addEventListener('input', convator);

async function convator(){
    const currencyValueOne = currencyOne.value;
    const currencyValueTwo = currencyTwo.value;
    console.log(currencyValueTwo);

        const result = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValueOne}`);
        const data = await result.json();
        console.log(data);
        const rates = data.rates[currencyValueTwo];

        console.log(rates);
        rateValue.innerText = (`1 ${currencyValueOne} = ${rates} ${currencyValueTwo}`);

        inputTwo.value = (rates * inputOne.value).toFixed(2);

}

convator();
