//Code a vending machine that needs to
// -track inventory
// return correct change in denominations of 5, 10 and 25 cents.  

// insertCoin(), pressButton(),dispenseItem()


// snacks = {
//         a: {code:"1", quantity: 6, price: 1.50},
//         b: {code:"2", quantity: 2, price: 2.00},
//         c: {code:"3", quantity: 0, price: 0.50}
//     }

// class Snack {
//     constructor(data) {
//         this.code = data.code,
//         this.quantity = data.quantity 
//         this.price = data.price
//         Syllabus.all.push(this)
//     }

//     updateInv() {
//         return console.log('quantity updated')
//     }
// }
var VendingMachine = {
    //if we were adding in our own snacks, we'd need a newSnack function, and a seperate snack class, so this would be moved to that snack obj/class 
    // newSnack(code,quantity,price) {
    //     this.code = code,
    //     this.quantity = quantity,
    //     this.price = price
    // }

    snackData = {
        a: {code:"1", quantity: 6, price: 1.50},
        b: {code:"2", quantity: 2, price: 2.00},
        c: {code:"3", quantity: 0, price: 0.50}
    }
    

    // let snack1 = newSnack("1A",5, 2.00)

    // updateInv(item) {
    //     return console.log('quantity updated')
    // }

    // calculateChange(amount, snack){
    //     //take amount and subtract it from item price
    //     var change = amount - item.amount

    //     return change
    // }

    //when vend button is clicked => call getItem(code, amount)
    // getItem(code, amount) {
    //     //check if we have the amount
    //     // -1 from item inventory
    //     // return change, console.log "here is 1A, with .50 in change."

    //     console.log('vending')
    //     updateInv()       
    // }

    
}

console.log(updateItem())