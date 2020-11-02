function Income(salary, wages, business, bonus, others) {
    this.salary = salary
    this.wages = wages
    this.business = business
    this.bonus = bonus
    this.others = others
}

Income.prototype.TotalIncome = function () {
    return this.salary + this.wages + this.bonus + this.business + this.others
}

function Expenditure(rent, food, medical, fees, entertainment, others2) {
    this.rent = rent
    this.food = food
    this.medical = medical
    this.fees = fees
    this.entertainment = entertainment
    this.others2 = others2
}
Expenditure.prototype.TotalExpenditure = function () {
    return this.rent + this.food + this.medical + this.fees + this.entertainment + this.others2
}


$(document).ready(function () {

    $('#income').submit(function (event) {
        event.preventDefault();
        let month = $("#month").val();

        let salary = parseInt($("#salary").val());
        let wages = parseInt($("#wages").val());
        let business = parseInt($("#bizna").val());
        let bonus = parseInt($("#bonus").val());
        let others = parseInt($("#others1").val());


        let NewIncome = new Income(salary, wages, business, bonus, others);
        let NewTotalIncome = NewIncome.TotalIncome()
        alert("Your total income for the month of " + month + " is " + NewTotalIncome)

        let rent = parseInt($("#rent").val());
        let food = parseInt($("#food").val());
        let medical = parseInt($("#medical").val());
        let fees = parseInt($("#fees").val());
        let entertainment = parseInt($("#entertain").val());
        let others2 = parseInt($("#others2").val());

        let NewExpenditure = new Expenditure(rent, food, medical, fees, entertainment, others2)
        let NewTotalExpenditure = NewExpenditure.TotalExpenditure()
        // alert("Your total expenditure is " + NewTotalExpenditure)
        alert("Your total expenditure for the month of " + month + " is " + NewTotalExpenditure)

        var difference = (NewTotalIncome - NewTotalExpenditure)


        if (NewTotalIncome > NewTotalExpenditure) {

            alert("Congratulations " + "your expenditure for this month " + "less than your income." + " You have more to saves " + " for future ")
        } else if (NewTotalIncome == NewTotalExpenditure) {
            alert("Awesome")
        } else {
            alert("Oops " + " this month your expenditure was more than income. " + " What happened? " + " For more information " + "book a training on Financial Literacy with MyBenki")
        }


        $("#salary").val("");
        $("#wages").val("");
        $("#bizna").val("");
        $("#bonus").val("");
        $("#others1").val("");
        $("#rent").val("");
        $("#food").val("");
        $("#medical").val("");
        $("#fees").val("");
        $("#entertain").val("");
        $("#others2").val("");

    document.getElementById("diff").innerHTML = difference
    // $( "#diff" ).append(difference) ;
    })

})