const FizzBuzzList = document.getElementById("element-list");

for (let counter = 1; counter <= 100; counter++) {
    let FizzBuzzElement = document.createElement("li");
    if (counter % 15 === 0) {
        console.log("FizzBuzz");
        FizzBuzzElement.append("FizzBuzz");
        FizzBuzzElement.classList.add("palevioletred");
    } else if (counter % 3 === 0) {
        console.log("Fizz");
        FizzBuzzElement.append("Fizz");
        FizzBuzzElement.classList.add("aquamarine");
    } else if (counter % 5 === 0) {
        console.log("Buzz");
        FizzBuzzElement.append("Buzz");
        FizzBuzzElement.classList.add("goldenrod");
    } else {
        console.log(counter);
        FizzBuzzElement.append(counter);
        FizzBuzzElement.classList.add("whitesmoke");
    }
    FizzBuzzList.append(FizzBuzzElement);
}