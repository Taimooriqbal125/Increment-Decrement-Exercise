// Increment Decrment Exercise


// Q 1
var a =  2;
var b = ++a * 2 ;
console.log( "RESULT" , b) ;

// Q 2
var x = 5;
var y = x-- + 2  ;
console.log( "RESULT" ,y) ;

// Q 3
var x = 3 ;
var y = ++x + x++ + ++x ; 
console.log( "RESULT" ,y);

// Q 4
var m = 2 ;
var n = 4 ;
var p = m++ + ++n - --m + n--;
console.log(m); 
console.log(n);
console.log(p);

// Q 5 
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log(result);

// Q 6 
var A = 5 ;
var B = 3 ;
var C = 2;
var D = 7;
var TOTAL = ++A * (B-- + C)/ --D ;
console.log(TOTAL)

//  Q 7 
var T = 2;
var E = 3;
var M = 4;
var TEM = T++ * (--E + T)/(M-- - E)
console.log(TEM)
