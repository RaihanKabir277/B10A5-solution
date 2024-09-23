

document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addFeni = getInput('feni-donate-input');

    if(isNaN(addFeni) || addFeni < 0){
        alert('Donation amount is not valid');
        return;
        
    }
    else{

        const balance = getValueFromText('feni-balance');
        const updateBalance = balance + addFeni ;
        document.getElementById('feni-balance').innerText = updateBalance;

        const mainBalance = getValueFromText('main-balance');
        const main = mainBalance - addFeni;
        document.getElementById('main-balance').innerText = main
    }
})