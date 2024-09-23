


document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addQuota = getInput('quota-input');

    if(isNaN(addQuota) || addQuota < 0){
        alert('Donation amount is not valid');
        return;
        
    }
    else{

        const balance = getValueFromText('quota-balance');
        const updateBalance = balance + addQuota ;
        document.getElementById('quota-balance').innerText = updateBalance;

        const mainBalance = getValueFromText('main-balance');
        const main = mainBalance - addQuota;
        document.getElementById('main-balance').innerText = main
    }
})