
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

function showPageById(id){
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history-add').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

const popUp = document.getElementById('my_modal_5');

