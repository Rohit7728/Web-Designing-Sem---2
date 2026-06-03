function calculateResult(){

    let subjects = document.getElementById("subjects").value;
    let total = 0;

    for(let i=1; i<=subjects; i++){

        let marks = prompt("Enter marks for Subject " + i);

        marks = Number(marks);

        total = total + marks;
    }

    let percentage = total / subjects;

    document.getElementById("result").innerHTML =
        "Total Marks = " + total + "<br>Percentage = " + percentage + "%";
}