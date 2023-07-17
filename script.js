// declare global variables for currencies and amts

    //currencies
    let fromC = document.getElementById("fromCurr");
    let toC = document.getElementById("toCurr");

    // amounts
    let fromAmt = document.getElementById("fromAmt");
    let toAmt = document.getElementById("toAmt");

    // USD rates
    let fromP = 0;
    let toP = 0;
    let rates = {};

refreshData();

//refresh data function:
async function refreshData() {
    const options = {
        method: 'GET',
    };
    
    // fetch current rates

    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Csolana%2Cbitcoin%2Cmatic-network%2Cbinancecoin&vs_currencies=usd');
    const rec = await res.json();

    console.log(rec);
    
    // return an array with rates [input, output]
    let newrates = {
        ETH: rec.ethereum.usd,
        SOL: rec.solana.usd,
        BTC: rec.bitcoin.usd,
        MATIC: rec["matic-network"].usd,
        BNB: rec.binancecoin.usd,
        USD : 1
    };

    console.log(newrates);
    let arg = 0;
    init(newrates,arg);
}

// init function updates vars with new rates and runs conversion
function init(newrates, y) {
    rates = newrates;

    fromP = rates[fromC.value];
    toP = rates[toC.value];

    // update symbols on USD conversion footnote
    document.querySelector("#from-c").innerHTML = fromC.value;
    document.querySelector("#to-c").innerHTML = toC.value;
    
    //change per USD value on conversion footnote
    document.querySelector("#from-v").innerHTML = (fromP).toFixed(2);
    document.querySelector("#to-v").innerHTML = (toP).toFixed(2);

    //if statement to determine which field has been modified
    //if to field changes ie. y arg = 1
    if (y == 1) {
        let ans = (toP/fromP) * toAmt.value;
        document.getElementById("fromAmt").value = ans.toFixed(5);
    }
    //else (default y arg = 0)
    else {
        let ans = (fromP/toP) * fromAmt.value;
        document.getElementById("toAmt").value = ans.toFixed(5);
    }
}

// add event listeners
// currency swap
let swapbtn = document.getElementById('swap');
swapbtn.addEventListener('click', event => {
    event.preventDefault();
    let a = fromC.value;
    let b = toC.value;
    [fromC.value, toC.value] = [b, a]
    init(rates, 0);
});

// refresh
let refreshbtn = document.querySelector('#refreshbutton');
let refreshimg = document.querySelector('#refresh');

refreshbtn.addEventListener('click', event => {
    event.preventDefault();
    refreshbtn.disabled = true;
    refreshimg.src = "images/refresh-disable.svg";

    setTimeout(function() {
        refreshbtn.disabled = false;
        refreshimg.src = "images/refresh.svg";
    }, 60000);

    refreshData();
});

// from currency  change
let fromInputC = document.getElementById('fromCurr');

fromInputC.addEventListener('change', event => {
    event.preventDefault();
    init(rates, 0);
});

// to input change
let toInputC = document.getElementById('toCurr');

toInputC.addEventListener('change', event => {
    event.preventDefault();
    init(rates, 0);
});

// from input change
let fromInput = document.getElementById('fromAmt');

fromInput.addEventListener('input', event => {
    event.preventDefault();
    init(rates, 0);
});

// to input change
let toInput = document.getElementById('toAmt');

toInput.addEventListener('input', event => {
    event.preventDefault();
    init(rates, 1);
});

