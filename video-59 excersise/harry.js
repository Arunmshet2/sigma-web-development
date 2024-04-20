//generating a random number entered by the user


let c = Math.floor(Math.random() * 10);


let a = parseInt(prompt("enter the value of the a"));
let b = parseInt(prompt("enter the value of the b"));


function miss(num) {
    console.log(c)

    if (num == 5) {
        console.log(`addiction of two number is ${eval(a+b)}` )
        console.log(`substraction  of two number is ${eval(a-b)}` )
        console.log(`multiplication of two number is ${eval(a*b)}` )
        console.log(`division of two number is ${eval(a/b)}` )
    }

    else {
        console.log("addiction of two number is", a + b )
        console.log(`substraction  of two number is ${eval(a-b)}` )
        console.log(`multiplication of two number is ${eval(a*b)}` )
        console.log(`division of two number is ${eval(a/b)}` )
    }
}

miss(c)





