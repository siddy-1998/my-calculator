var buttons = document.getElementsByClassName("calc-btn");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var flag = false;

function doCal(e) {
    var btnType = e.getAttribute("data-btn-type");   /*  returns clear , operation ,number ,result */
    var value = e.getAttribute("data-value");

    if (btnType == "number") {
        if (operator != null && flag) {
            display.value = "";
            flag = false;
        }

        display.value += value;

    }
    else if (btnType == "operation") {
        operator = value;
        // console.log(operator);
        operand1 = display.value;
        flag = true;

        // console.log(operand1);

    }
    else if (btnType == "clear") {
        display.value = "";
        operand1 = 0;
        operand2 = null;
        operator = null;
    }
    else if (btnType == "result") {
        //equals
        operand2 = display.value;

        display.value = eval(operand1 + " " + operator + " " + operand2);
        operand1 = display.value;
        flag = false;

    }
    else if (btnType == "negation") {
        display.value = eval("-1 * display.value");
    }
    else if (btnType == "decimalization") {
        if (operator != null) {
            display.value = "";
            flag = false;
        }
        display.value += ".";
    }
}


