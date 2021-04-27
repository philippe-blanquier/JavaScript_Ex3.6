// Java Script file: js_ex3.5.js
function getRandomNumber()
{
    let answer = math.random(1,10);
    return answer;
}
let firstNumber= getRandomNumber();
let secondNumber= getRandomNumber();
let result= firstNumber / secondNumber;
let pId,textId;
while (result > 1)
{
    pId= document.createElement("P");
    textId= document.createTextNode(`firstNumber: ${firstNumber} / secondNumber: ${secondNumber} = ${result}`);   
    pId.appendChild(textId);
    document.body.appendChild(pId);
    firstNumber= result;
    secondNumber= getRandomNumber();
    result= firstNumber / secondNumber;
}
