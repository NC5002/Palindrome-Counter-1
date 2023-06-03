/* METHOD 1
function palindromeCheck1(str) {    //L1 - create furnction where we can imput a string and then perform following to set string 
    return (                        //L2 - return -> will output a boolean value based on the === operator, tru or false
        str.replace(/[\W_]/g, "").toLowerCase() ===   //l3 - "fisrt version" deletes all non-alphs numeric elements, and lowercase remaining characters -> "ivundang"

        str                                 //l4 - "second version" aks the reversed version
        .replace(/[\W_]/g, "")              //l5 - deletes all non-alphs numeric elements
        .toLowerCase()                      //l6 - lowercases the remaining characters 
        .split("")                          //l7- splits the characters into elements within an array BECAUSE STRINGS ARE IMOUTABLE (cannot be altered)
        .reverse()                          //l8- and then we can reverse the elementswithin the array -> ["g", "n", "a", "d", "u", "v", "i" ]
        .join("")                           //l9- and then convert and back to a string -> "gnaduvi"
    );                                      //Therefor , "ivudeng" === "gnaduvi" -> FALSE
}

console.log(palindromeCheck1("Race Car _"));
console.log(palindromeCheck1("i Vu_Dang"));
/*
// HIGH LEVEL ONLINE 
We created two versions odf the string stripping array all non-alphanumeric characters and than we compered with === aks strictly equal operator to see if they are the same 

*/

//METHOD 2 

function palindromeCheck2(str){                                     //L1
    const nonAlphaNum = /[\W_]/g;                                   //L2
 
     let firstVersion = str.toLowerCase().replace(nonAlphaNum, ''); //L3                 // L3 
   let reversedVersion = firstVersion.split('').reverse().join(''); //L4       
     
 return reversedVersion === firstVersion;                           //L5
 }
 
 console.log(palindromeCheck2("Race Car_")); // True
 console.log(palindromeCheck2("i Vu_Dang")); // False 

 /*

 L3 - created our first version of the string, where we converted all elements to lowercase and remover all alpha-numeric characters

 .replace sintax => .replace (find value, new value)
We reference back to our variable "const nonAlphaNum" to find all current nun-alpha-numeric characters, and replaced it with "" maning whatever was found we repleaced with nothing, ask deleting the element

str.toLowerCase() => "i vu_dang"
.replace(nunAlphaNum, ''): => "ivudnag"


L4 - created a second or the reversed version of the string,  where we took our first version and applied a few more methods to it 

first version => takes our modified string earlier that has been converted to all lowercase and has all non-alphanumeric characters removed

.split('') => creates new array with all characters in the string separated into single characters so it'll look like => ["i", "v", "u", "d", "a", "n","g"]

.reversed() => this will revers the order of the elemts in an array => ["g", "n", "a", "d", "u", "v", "i" ]

.join('') => this will convert an array of elements into one string =>  "gnaduvi"


L5- reversedVersion === firstVersion     => "ivudang" === "gnaduvi"    => FALSE

*/

/*--------- START WEB API -------- */
//WEB API - JAVASCRIPT TO HTML
let submitButtonEvent = document.getElementById("submitButton");        // L1 - create var referencing our HTML element with the id "submitButton"

submitButtonEvent.addEventListener("click", function() {                // L2 - document.addEventListener(event, function), event usually "click"
    'use strict';                                                       // L3 - 'use strict' -> good conventiont to detect errors e.g. undeclared variables

    var value = document.getElementById("inputString").value;           // L4 - creates first local variable, referencing our HTML with id "inputString"
    var notification = document.getElementById("notification");         // L5 - creates second local variable, referencing our HTML with id "notification"
    var displayWord = document.getElementById("displayWord");
  
    if(palindromeCheck2(value)) {                                       // L6 - references our function name, and starts do this if
      notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;     // L7 - print if function resulted true. Refs our variables. 
      displayWord.innerHTML = 
        `Fowards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join(''); 
      
    } else {
      notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOT a palindrome!`; // L8 - print if function resulted false
      displayWord.innerHTML = 
        `Fowards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');  
    }
});

/*--------- END WEB API -------- */
