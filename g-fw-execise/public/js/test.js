function alertFilename()
{
    var thefile = document.getElementById('thefile');
    alert(thefile.value);
}


let input ="";
let file="";

function GetInputValue () {
    const input = document.getElementById ("fileToUpload");
    console.log(input.value);
    const file = input.value;
    return file;
}
const res = GetInputValue();

console.log(res);
/*
let str = res;
var n = str.lastIndexOf('/');
var result = str.substring(n + 1);

console.log(result);
*/

const topBar = document.getElementById('topBar');
           topBar.addEventListener('click', () => {
               console.log("Hello there!");
           });
    