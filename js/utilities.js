
function getInput(id){
    const inputValue = document.getElementById(id).value ;
    const grabNumber = parseFloat(inputValue);
    return grabNumber;
}

function getValueFromText(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}