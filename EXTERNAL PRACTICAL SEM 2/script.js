function checkArmstrong() {

    let num = Number(document.getElementById("num").value);

    let temp = num;
    let sum = 0;

    while (temp > 0) {

        let digit = temp % 10;

        sum += digit * digit * digit;

        temp = Math.floor(temp / 10);
    }

    if (sum === num) {

        document.getElementById("result").innerHTML =
        num + " is an Armstrong Number";

    } else {

        document.getElementById("result").innerHTML =
        num + " is Not an Armstrong Number";
    }
}