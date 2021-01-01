// let removeCarrot = document.createElement("button");
// removeCarrot.setAttribute = ("type", "button");
// let textRemoveCarrot = document.createTextNode("Remove");
// removeCarrot.appendChild(textRemoveCarrot);

// let removePotato = document.createElement("button");
// removePotato.setAttribute = ("type", "button");
// let textRemovePotato = document.createTextNode("Remove");
// removePotato.appendChild(textRemovePotato);

// let removeFish = document.createElement("button");
// removeFish.setAttribute = ("type", "button");
// let textRemoveFish = document.createTextNode("Remove");
// removeFish.appendChild(textRemoveFish);

// let removeMeat = document.createElement("button");
// removeMeat.setAttribute = ("type", "button");
// let textRemoveMeat = document.createTextNode("Remove");
// removeMeat.appendChild(textRemoveMeat);

// let removeEggs = document.createElement("button");
// removeEggs.setAttribute = ("type", "button");
// let textRemoveEggs = document.createTextNode("Remove");
// removeEggs.appendChild(textRemoveEggs);

const items = [
    {
        name: "Carrot",
        value: 2,
        quantity: 0
    },
    {
        name: "Potato",
        value: 3,
        quantity: 0
    },
    {
        name: "Fish",
        value: 10,
        quantity: 0
    },
    {
        name: "Meat",
        value: 13,
        quantity: 0
    },
    {
        name: "Eggs",
        value: 6,
        quantity: 0
    }
];

const selectedItems = document.getElementById("selected-items");
const sumTotal = document.getElementById("sumTotal");
const list = document.getElementById("list");



 addItem = () =>{
    // let carrot = document.getElementById("carrot");
    // let potato = document.getElementById("potato");
    // let fish = document.getElementById("fish");
    // let meat = document.getElementById("meat");
    // let eggs = document.getElementById("eggs");
    // let selectProducts = document.getElementById("selectProducts");
    // let list = document.getElementById("list");
    // let output = list.value;
    // let digit = document.createElement("input");

    if(list.value === "selectProducts"){
        alert("Please select a product");
        return false;
    }
    else{
        const newItem = document.createElement("div");
        const removeButton = document.createElement("button");
        const quantityInput = document.createElement("input");

        const itemName = list.options[list.selectedIndex].text;

        const match = items.find((i) => i.name === itemName);

        if(match.quantity === 0){
            quantityInput.value = 1;
            quantityInput.setAttribute("type", "number");
            quantityInput.setAttribute("min", 0);
            quantityInput.onchange = (e) =>
            udpateItems({ itemName, itemQuantity: parseInt(e.target.value, 10)});

            removeButton.innerText = "Remove";
            removeButton.onclick = (e) => {
                e.preventDefault();
                removeItem(itemName);
            };

            newItem.id = itemName;
            newItem.classList.add("new-item");
            newItem.innerText = itemName;

            newItem.appendChild(quantityInput);
            newItem.appendChild(removeButton);

            selectedItems.appendChild(newItem);

            udpateItems({itemName, itemQuantity: 1});


        }
    }
}

removeItem = (itemName) => {
    const elem = document.getElementById(itemName);
    
    items.forEach((i, index) =>
    i.name === itemName
    ?(items[index] = { ...items[index], quantity: 0})
    : { ...i}
    );
    calculateTotal(items);
    elem.remove();
}

udpateItems = ({itemName, itemQuantity}) => {
        items.forEach((i, index) =>
        i.name === itemName
        ? (items[index] = { ...items[index], quantity: itemQuantity})
        :{...i}
        );
        calculateTotal(items);
    }

calculateTotal = (items) => {
    const total = items.reduce((a, c) => {
        return a + c.value * c.quantity;
    }, 0);
    getTotal(total);
}

getTotal = (total) => {
    sumTotal.innerHTML = `Your total sum is $${total}`;
    return false;
};

const init = () => {
    console.clear();
    calculateTotal(items);
}

init();

// showSumTotal = (total) =>{
//     sumTotal.innerHTML = "Your total sum is" + total;

//     return false;
// }


    // if(list.value === "Carrot($2)"){
    //     document.querySelector('.selected').textContent = output;
    //     document.querySelector('.selected').style.fontSize = "2rem";
    //     document.querySelector('.selected').style.width = "50%";
    //     document.querySelector('.selected').style.margin = "0 3rem";
    //     document.querySelector('.selected').style.marginBottom = "1rem";
    //     document.querySelector('.selected').style.display = "flex";
    //     document.querySelector('.selected').style.justifyContent = "space-evenly";
    //     digit.setAttribute("type", "number");
    //     document.getElementsByClassName("carrotSelected").appendChild(digit);
    //     document.getElementsByClassName("carrotSelected").appendChild(removeCarrot);

    
    //     return false;

    // }

    // if(list.value === "Potato($3)"){
    //     document.querySelector('.selected').textContent = output;
    //     document.querySelector('.selected').style.fontSize = "2rem";
    //     document.querySelector('.selected').style.width = "50%";
    //     document.querySelector('.selected').style.margin = "0 3rem";
    //     document.querySelector('.selected').style.marginBottom = "1rem";
    //     document.querySelector('.selected').style.display = "flex";
    //     document.querySelector('.selected').style.justifyContent = "space-evenly";
    //     digit.setAttribute("type", "number");
    //     document.getElementsByClassName("selected").appendChild(digit);
    //     document.getElementsByClassName("selected").appendChild(removePotato);
    //     return false;

    // }

    // if(list.value === "Fish($10)"){
    //     document.querySelector('.selected').textContent = output;
    //     document.querySelector('.selected').style.fontSize = "2rem";
    //     document.querySelector('.selected').style.width = "50%";
    //     document.querySelector('.selected').style.margin = "0 3rem";
    //     document.querySelector('.selected').style.marginBottom = "1rem";
    //     document.querySelector('.selected').style.display = "flex";
    //     document.querySelector('.selected').style.justifyContent = "space-evenly";
    //     digit.setAttribute("type", "number");
    //     document.getElementsByClassName(".selected").appendChild(digit);
    //     document.getElementsByClassName(".selected").appendChild(removeFish);
    //     return false;

    // }

    // if(list.value === "Meat($13)"){
    //     document.querySelector('#meatSelected').textContent = output;
    //     document.querySelector('#meatSelected').style.fontSize = "2rem";
    //     document.querySelector('#meatSelected').style.width = "50%";
    //     document.querySelector('#meatSelected').style.margin = "0 3rem";
    //     document.querySelector('#meatSelected').style.marginBottom = "1rem";
    //     document.querySelector('#meatSelected').style.display = "flex";
    //     document.querySelector('#meatSelected').style.justifyContent = "space-evenly";
    //     digit.setAttribute("type", "number");
    //     document.getElementsByClassName("meatSelected").appendChild(digit);
    //     document.getElementsByClassName("meatSelected").appendChild(removeMeat);

    //     return false;

    // }

    // if(list.value === "Eggs($6)"){
    //     document.querySelector('.selected').textContent = output;
    //     document.querySelector('.selected').style.fontSize = "2rem";
    //     document.querySelector('.selected').style.width = "50%";
    //     document.querySelector('.selected').style.margin = "0 3rem";
    //     document.querySelector('.selected').style.marginBottom = "1rem";
    //     document.querySelector('.selected').style.display = "flex";
    //     document.querySelector('.selected').style.justifyContent = "space-evenly";
    //     digit.setAttribute("type", "number");
    //     document.getElementsByClassName(".selected").appendChild(digit);
    //     document.getElementsByClassName(".selected").appendChild(removeEggs);


    //     return false;
    // }

    // return false;

// }

// removeItem = () => {
//     let carrot = document.getElementById("carrot");
//     let potato = document.getElementById("potato");
//     let fish = document.getElementById("fish");
//     let meat = document.getElementById("meat");
//     let eggs = document.getElementById("eggs");
//     let list = document.getElementById("list");
//     let output = list.value;


//     let itemCarrot = document.getElementById("carrotSelected");

//     if(output === "Carrot($2)"){
//         document.getElementById("carrotSelected").remove();

//         return false;
//     }

//     if(output === "Potato($3)"){
//         document.getElementById("potatoSelected").remove();

//         return false;
//     }


//     if(output === "Fish($10)"){
//         document.getElementById("fishSelected").remove();

//         return false;
//     }


//     if(output === "Meat($13)"){
//         document.getElementById("meatSelected").remove();

//         return false;
//     }


//     if(output === "Eggs($6)"){
//         document.getElementById("eggsSelected").remove();

//         return false;
//     }


//     return false;
// }

// removeCarrot.addEventListener("click", removeItem);
// removePotato.addEventListener("click", removeItem);
// removeFish.addEventListener("click", removeItem);
// removeMeat.addEventListener("click", removeItem);
// removeEggs.addEventListener("click", removeItem);

// getTotal = () => {
//     let carrot = document.getElementById("carrotSelected");
//     let potato = document.getElementById("potatoSelected");
//     let fish = document.getElementById("fishSelected");
//     let meat = document.getElementById("meatSelected");
//     let eggs = document.getElementById("eggsSelected");
//     let selectProducts = document.getElementById("selectProducts");
//     let list = document.getElementById("list");
//     let output = list.value;
//     let digit = document.createElement("input");

//     if(digit < 0 || digit > 100 || digit === ""){
//         alert("Invalid amount");
//     }

//     let priceOfCarrot = 2;
//     let sumOfCarrot = priceOfCarrot * digit;

//     let priceOfPotato = 10;
//     let sumOfPotato = priceOfPotato * digit;

//     let priceOfFish = 10;
//     let sumOfFish = priceOfFish * digit;

//     let priceOfMeat = 13;
//     let sumOfMeat = priceOfMeat * digit;

//     let priceOfEggs = 6;
//     let sumOfEggs = priceOfEggs * digit;

//     let sumTotal = 0;

//     let cart = [sumOfFish, sumOfMeat, sumOfPotato, sumOfCarrot, sumOfEggs];


//         if(output.includes(carrot)) {
//             sumTotal.push(sumOfCarrot);

//             return false;
//         }
//         if(output.includes(potato)) {
//             sumTotal.push(sumOfPotato);

//             return false;
//         }
//         if(output.includes(fish)) {
//             sumTotal.push(sumOfFish);

//             return false;
//         }
//         if(output.includes(meat)) {
//             sumTotal.push(sumOfMeat);

//             return false;
//         }
//         if(output.includes(eggs)) {
//             sumTotal.push(sumOfEggs);

//             return false;
//         }

//         sumTotal.reduce((a, b) => {
//             return a + b;
//         }, 0);

//     document.getElementById("sumTotal").innerHTML = "Your total price is " + sumTotal;

//     return false;
// }

//Get list of elements

//for item of 'list'

// item should go through list in a loop

//for item of list --> item.getelement'input'
//input.value -> digit

//(digit * price of item)

//let prices = {
    // carrot: 2
// }