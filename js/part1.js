
document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addNoakhali = getInput('noakhali-donate-input');

    if(isNaN(addNoakhali) || addNoakhali < 0){
        alert('Donation amount is not valid');
        return;
        
    }
    else{

        const balance = getValueFromText('noakhali-balance');
        const updateBalance = balance + addNoakhali ;
        document.getElementById('noakhali-balance').innerText = updateBalance;

        const mainBalance = getValueFromText('main-balance');
        const main = mainBalance - addNoakhali;
        document.getElementById('main-balance').innerText = main
    }
})