

const tipAmount = document.getElementsByClassName('tipAmount');

function five() {
    var bill = document.getElementById('bill').value;
    var numOfPeople = document.getElementById('numOfPerson').value;

    var tipPercent = (bill * .05);
    var billPerson = bill / numOfPeople;
  

    var tipAmount = document.getElementById('tipAmount').value = parseFloat(tipPercent / numOfPeople).toFixed(2);
    document.getElementById('total').value = parseFloat(tipAmount + billPerson).toFixed(2);

}

