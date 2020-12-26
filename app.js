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
    let remove = document.createElement("button");
    let textRemove = document.createTextNode("Remove");
    remove.appendChild(textRemove);

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
        document.getElementById("carrotSelected").appendChild(remove);
    
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
        document.getElementById("potatoSelected").appendChild(remove);
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
        document.getElementById("fishSelected").appendChild(remove);
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
        document.querySelector('#remove').style.display ="block"
        document.getElementById("meatSelected").appendChild(remove);
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
        document.querySelector('#remove').style.display ="block"
        document.getElementById("eggsSelected").appendChild(remove);
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
    let remove = document.createElement("button");
    let textRemove = document.createTextNode("Remove");
    remove.appendChild(textRemove);
    remove.addEventListener("click", removeItem);

    if(list.value === "carrot"){
        remove.document.querySelector("#carrotSelected").textContent;

        return false;
    }

    return false;
}