async function convertCurrency(){

    const amount =
        document.getElementById("amount").value;

    const from =
        document.getElementById("from").value;

    const to =
        document.getElementById("to").value;

    const url =
        `https://open.er-api.com/v6/latest/${from}`;

    const response = await fetch(url);

    const data = await response.json();

    const rate = data.rates[to];

    const converted = amount * rate;

    document.getElementById("result")
        .innerHTML =
        `${amount} ${from}
         = ${converted.toFixed(2)} ${to}`;
}