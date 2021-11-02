

const tipAmount = document.getElementsByClassName('tipAmount');

function five() {
    var bill = document.getElementById('bill').value;
    var numOfPeople = document.getElementById('numOfPerson').value;

    var tipPercent = bill * .05;
    var billPerPerson = bill / numOfPeople;
    var tipAmount = (tipPercent / numOfPeople);
    var total = tipAmount + billPerPerson;

    document.querySelector('#tipAmount').value = '$'+ parseFloat(tipAmount).toFixed(2);
    document.getElementById('total').value = '$' + parseFloat(total).toFixed(2);
}

// document.addEventListener('click', enterTip);
// const tips = document.querySelectorAll('.tip%');

// enterTip = () => {
//     btn.classList.add('.active');
// }