let removeCarrot = document.createElement("button");
removeCarrot.setAttribute = ("type", "button");
let textRemoveCarrot = document.createTextNode("Remove");
removeCarrot.appendChild(textRemoveCarrot);

let removePotato = document.createElement("button");
removePotato.setAttribute = ("type", "button");
let textRemovePotato = document.createTextNode("Remove");
removePotato.appendChild(textRemovePotato);

let removeFish = document.createElement("button");
removeFish.setAttribute = ("type", "button");
let textRemoveFish = document.createTextNode("Remove");
removeFish.appendChild(textRemoveFish);

let removeMeat = document.createElement("button");
removeMeat.setAttribute = ("type", "button");
let textRemoveMeat = document.createTextNode("Remove");
removeMeat.appendChild(textRemoveMeat);

let removeEggs = document.createElement("button");
removeEggs.setAttribute = ("type", "button");
let textRemoveEggs = document.createTextNode("Remove");
removeEggs.appendChild(textRemoveEggs);

addItem = () =>{
    let carrot = document.getElementById("carrot");
    let potato = document.getElementById("potato");
    let fish = document.getElementById("fish");
    let meat = document.getElementById("meat");
    let eggs = document.getElementById("eggs");
    let selectProducts = document.getElementById("selectProducts");
    let list = document.getElementById("list");
    let output = list.value;
    let digit = document.createElement("input");



    if(list.value === "selectProducts"){
        alert("Please select a product");
        return false;
    }
    if(list.value === "Carrot($2)"){
        document.querySelector('#carrotSelected').textContent = output;
        document.querySelector('#carrotSelected').style.fontSize = "2rem";
        document.querySelector('#carrotSelected').style.width = "50%";
        document.querySelector('#carrotSelected').style.margin = "0 3rem";
        document.querySelector('#carrotSelected').style.marginBottom = "1rem";
        document.querySelector('#carrotSelected').style.display = "flex";
        document.querySelector('#carrotSelected').style.justifyContent = "space-evenly";
        digit.setAttribute("type", "number");
        document.getElementById("carrotSelected").appendChild(digit);
        document.getElementById("carrotSelected").appendChild(removeCarrot);

    
        return false;

    }

    if(list.value === "Potato($3)"){
        document.querySelector('#potatoSelected').textContent = output;
        document.querySelector('#potatoSelected').style.fontSize = "2rem";
        document.querySelector('#potatoSelected').style.width = "50%";
        document.querySelector('#potatoSelected').style.margin = "0 3rem";
        document.querySelector('#potatoSelected').style.marginBottom = "1rem";
        document.querySelector('#potatoSelected').style.display = "flex";
        document.querySelector('#potatoSelected').style.justifyContent = "space-evenly";
        digit.setAttribute("type", "number");
        document.getElementById("potatoSelected").appendChild(digit);
        document.getElementById("potatoSelected").appendChild(removePotato);
        return false;

    }

    if(list.value === "Fish($10)"){
        document.querySelector('#fishSelected').textContent = output;
        document.querySelector('#fishSelected').style.fontSize = "2rem";
        document.querySelector('#fishSelected').style.width = "50%";
        document.querySelector('#fishSelected').style.margin = "0 3rem";
        document.querySelector('#fishSelected').style.marginBottom = "1rem";
        document.querySelector('#fishSelected').style.display = "flex";
        document.querySelector('#fishSelected').style.justifyContent = "space-evenly";
        digit.setAttribute("type", "number");
        document.getElementById("fishSelected").appendChild(digit);
        document.getElementById("fishSelected").appendChild(removeFish);
        return false;

    }

    if(list.value === "Meat($13)"){
        document.querySelector('#meatSelected').textContent = output;
        document.querySelector('#meatSelected').style.fontSize = "2rem";
        document.querySelector('#meatSelected').style.width = "50%";
        document.querySelector('#meatSelected').style.margin = "0 3rem";
        document.querySelector('#meatSelected').style.marginBottom = "1rem";
        document.querySelector('#meatSelected').style.display = "flex";
        document.querySelector('#meatSelected').style.justifyContent = "space-evenly";
        digit.setAttribute("type", "number");
        document.getElementById("meatSelected").appendChild(digit);
        document.getElementById("meatSelected").appendChild(removeMeat);

        return false;

    }

    if(list.value === "Eggs($6)"){
        document.querySelector('#eggsSelected').textContent = output;
        document.querySelector('#eggsSelected').style.fontSize = "2rem";
        document.querySelector('#eggsSelected').style.width = "50%";
        document.querySelector('#eggsSelected').style.margin = "0 3rem";
        document.querySelector('#eggsSelected').style.marginBottom = "1rem";
        document.querySelector('#eggsSelected').style.display = "flex";
        document.querySelector('#eggsSelected').style.justifyContent = "space-evenly";
        digit.setAttribute("type", "number");
        document.getElementById("eggsSelected").appendChild(digit);
        document.getElementById("eggsSelected").appendChild(removeEggs);


        return false;
    }

    return false;

}

removeItem = () => {
    let carrot = document.getElementById("carrot");
    let potato = document.getElementById("potato");
    let fish = document.getElementById("fish");
    let meat = document.getElementById("meat");
    let eggs = document.getElementById("eggs");
    let list = document.getElementById("list");
    let output = list.value;
    let digit = document.createElement("input");

    let itemCarrot = document.getElementById("carrotSelected");

    if(output === "Carrot($2)"){
        document.getElementById("carrotSelected").remove();

        return false;
    }

    if(output === "Potato($3)"){
        document.getElementById("potatoSelected").remove();

        return false;
    }


    if(output === "Fish($10)"){
        document.getElementById("fishSelected").remove();

        return false;
    }


    if(output === "Meat($13)"){
        document.getElementById("meatSelected").remove();

        return false;
    }


    if(output === "Eggs($6)"){
        document.getElementById("eggsSelected").remove();

        return false;
    }


    return false;
}

removeCarrot.addEventListener("click", removeItem);
removePotato.addEventListener("click", removeItem);
removeFish.addEventListener("click", removeItem);
removeMeat.addEventListener("click", removeItem);
removeEggs.addEventListener("click", removeItem);