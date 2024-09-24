

document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addFeni = getInput('feni-donate-input');

    if(isNaN(addFeni) || addFeni <= 0){
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

        const p = document.createElement('p');
        p.innerText = `${addFeni} Taka is Donated for flood at Feni, Bangladesh` ;
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