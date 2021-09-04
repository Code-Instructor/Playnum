var rand;
var number;
var addnum;
var subtractnum;
var roundnum;
var final;
var ceilnum;
var floornum;
var squarenum;
var sqrtnum;

function getRandom(){
    // rand variable will store the random number
    rand=Math.random();
    document.getElementById("output1").innerHTML=rand;
}

function numberOperation(){
    // number variable will store the value of the input using its id "userInput"
   number=Number(document.getElementById("userInput").value);
    document.getElementById("output2").innerHTML=number;
}

function Add(){
    // addnum variable will store the added value of the number you entered and the random number generated
    addnum=rand+number; 
    document.getElementById("output3").innerHTML=addnum;
    final= addnum;
}

function Subtract(){
    // subtractnum variable will store the  value of the number you entered minus the random number generated
    subtractnum=rand-number;
    document.getElementById("output3").innerHTML=subtractnum;
    final= subtractnum;
}

function Round(){
    // roundnum will round up the value of the variable final
    roundnum=Math.round(final);
    document.getElementById("output4").innerHTML=roundnum;
}

function Ceil(){
    // ceilnum will find out the ceiling value of the variable final
    ceilnum=Math.ceil(final);
    document.getElementById("output4").innerHTML=ceilnum;
}

function Floor(){
    // floornum will find out the floor value of the variable final
    floornum=Math.floor(final);
    document.getElementById("output4").innerHTML=floornum;
}

function Square(){
    // squarenum will store the square of the variable final
    squarenum=Math.pow(final,2);
    document.getElementById("output4").innerHTML=squarenum;
}

function Sqrt(){
    // sqrtnum will store the square root of the variable final
    sqrtnum=Math.sqrt(final);
    document.getElementById("output4").innerHTML=sqrtnum;
}

