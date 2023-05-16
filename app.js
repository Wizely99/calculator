var buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        equation = `${num1} ${e.target.dataset.operation} ${num2} `
        result = document.getElementById("result")
        result.innerHTML = eval(equation)

    });
});