// now we are learning amazing things,from here we are going to raise the bar

var a = 5;
a = a + 1

console.log(a)

/*
const d=5;
d = d+1 // this is not allowed it will show errors

console.log(d)
*/

var v = 21;
{
    var v = 34;
    console.log(v)
}
console.log(v)


let z = 45;
{
    let z = 56
    console.log(z)
}
console.log(z)


var x = 45.6;
var y = "rajwant";
var k = true;
var q = undefined;
var e = null;

console.log(x, y, k, q, e)
console.log(typeof x, typeof y, typeof k, typeof q, typeof e)

let o ={
    name:"harry",
    salary:"400 lakh",
    occupation:"teacher",
    "job experience":5
}

console.log(o)
o.college = "IIT kanpura"

console.log(o)
o.college = "ms ramiah university of applied science"
console.log(o)