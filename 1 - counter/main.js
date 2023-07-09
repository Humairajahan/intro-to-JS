document.addEventListener("keydown", adder);
document.addEventListener("click", adder);

const availableKeys = [" ", "Shift", "Tab"];

document.addEventListener("keydown", adder);

function adder() {
    if (availableKeys.includes(event.key) | event.key == undefined | event.ctrlKey == true) {
        console.log(event.key);
        document.getElementById("count-val").innerHTML ++;
    }
    else {
        console.log(event);
    }
}
