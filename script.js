// -------------------------Exercise 1--------------------

function messageOne() {
    console.log("testando");
}
messageOne();

//  ------------------------Exercise 2-----------------

function messageTwo(name) {
    console.log(`My name is ${name}`);
}
messageTwo("Luiz");

// -----------------------Exercise 3---------------------

function personalInformation(name, age, musicalStyle){
    console.log(`my name is ${name}, my age is ${age}, my favorite musical style is ${musicalStyle}`);
}
personalInformation("Luiz", "23", "rock");

// ----------------------Exercise 4-------------------------

function messageThree(movie, music) {
    console.log(`Movie name ${movie}, Music name ${music}`);
}
messageThree("Terminator", "Vertigo");

// ---------------------Exercise 5----------------------------

function triple(number){
    return number*3;
}
console.log(triple(3));