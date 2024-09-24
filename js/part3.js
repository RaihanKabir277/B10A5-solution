


document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addQuota = getInput('quota-input');

    if(isNaN(addQuota) || addQuota <= 0 ){
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

        const p = document.createElement('p');
        p.innerText = `${addQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh` ;
        p.classList.add('font-bold');
        const h1 = document.createElement('h1');
        h1.innerText = new Date().toLocaleString('en-Us', {
            timeZone: 'Asia/Dhaka',
            timeStyle: 'medium',
            dateStyle: 'full'
        });

        const h2 =document.createElement('h2');
        h2.classList.add('divider');

        document.getElementById('history-form').appendChild(p);
        document.getElementById('history-form').appendChild(h1);
        document.getElementById('history-form').appendChild(h2);

        popUp.showModal();
    }

    
})