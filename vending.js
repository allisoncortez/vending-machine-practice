// console.log("vending..")
let change = 0;
let moneyInserted = 0;
let totalPaid = 0;

const currency_nickel = 0.05;
const currency_dime = 0.1;
const currency_quarter = 0.25;

function getTotal() {
    //when you're getting value from text field,it comes back as a string..
    var nickel_amount = Number(document.getElementById("nickels").value);
    var dime_amount = Number(document.getElementById("dimes").value);
    var quarter_amount = Number(document.getElementById("quarters").value);

    if (nickel_amount > 0) {
        nickel_amount = nickel_amount * currency_nickel;
    }

    if (dime_amount > 0) {
        dime_amount = dime_amount * currency_dime;
    }

    if (quarter_amount > 0) {
        quarter_amount = quarter_amount * currency_quarter;
    }
    totalPaid = nickel_amount + dime_amount + quarter_amount;
    return totalPaid.toFixed(2);
}

// console.log(getTotal());

function countMoney() {
    moneyInserted = getTotal()

    document.getElementById("")
}


