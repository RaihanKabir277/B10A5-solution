
document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addNoakhali = getInput('noakhali-donate-input');

    if(isNaN(addNoakhali) || addNoakhali <= 0){
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

        const p = document.createElement('p');
        p.innerText = `${addNoakhali} Taka is Donated for famine-2024 at Noakhali, Bangladesh` ;
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