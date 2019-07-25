const fs = require("fs");
const sosInputFile = "./sos-input.txt"; //input file contains Morse coding eq ... --- ...
const sosToTextFile = "./sosToTEXT-output.txt"; //output file contains plain text like SOS
const textInputFile = "./text-input.txt"; //input file constains strings like SOS sos
const textToSosFile = "./textToSOS-output.txt"; //output file contains Morse coding like ... --- ...

/*
const letters =
 {
  "A" : ".-",   "K" : "-.-",  "U" : "..-",   "5" : ".....",  "," : "--..--", "$" : "...-..-",
  "B" : "-...", "L" : ".-..", "V" : "...-",  "6" : "-....",  "?" : "..--..", " " : "*",
  "C" : "-.-.", "M" : "--",   "W" : ".--",   "7" : "--...",  "(" : "-.--.",
  "D" : "-..",  "N" : "-.",   "X" : "-..-",  "8" : "---..",  ")" : "-.--.-",
  "E" : ".",    "O" : "---",  "Y" : "-.--",  "9" : "----.",  "-" : "-....-",
  "F" : "..-.", "P" : ".--.", "Z" : "--..",  "0" : "-----",  "\"" : ".-..-.",
  "G" : "--.",  "Q" : "--.-", "1" : ".----", "/" : "-..-.",  "_" : "..--.-",
  "H" : "....", "R" : ".-.",  "2" : "..---", "+" : ".-.-.",  "'" : ".----.",
  "I" : "..",   "S" : "...",  "3" : "...--", "=" : "-...-",  ":" : "---...",
  "J" : ".---", "T" : "-",    "4" : "....-", "." : ".-.-.-", ";" : "-.-.-."
 };
*/

const letters =
 {
  "A" : ".-",   "K" : "-.-",  "U" : "..-",   "5" : ".....",  "," : "--..--", "$" : "...-..-",
  "a" : ".-",   "k" : "-.-",  "u" : "..-",
  
  "B" : "-...", "L" : ".-..", "V" : "...-",  "6" : "-....",  "?" : "..--..", " " : "*",
  "b" : "-...", "l" : ".-..", "v" : "...-",
 
  "C" : "-.-.", "M" : "--",   "W" : ".--",   "7" : "--...",  "(" : "-.--.",
  "c" : "-.-.", "m" : "--",   "w" : ".--",

  "D" : "-..",  "N" : "-.",   "X" : "-..-",  "8" : "---..",  ")" : "-.--.-",
  "d" : "-..",  "n" : "-.",   "x" : "-..-",

  "E" : ".",    "O" : "---",  "Y" : "-.--",  "9" : "----.",  "-" : "-....-",
  "e" : ".",    "o" : "---",  "y" : "-.--",

  "F" : "..-.", "P" : ".--.", "Z" : "--..",  "0" : "-----",  "\"" : ".-..-.",
  "f" : "..-.", "p" : ".--.", "z" : "--..",

  "G" : "--.",  "Q" : "--.-", "1" : ".----", "/" : "-..-.",  "_" : "..--.-",
  "g" : "--.",  "q" : "--.-",

  "H" : "....", "R" : ".-.",  "2" : "..---", "+" : ".-.-.",  "'" : ".----.",
  "h" : "....", "r" : ".-.",

  "I" : "..",   "S" : "...",  "3" : "...--", "=" : "-...-",  ":" : "---...",
  "i" : "..",   "s" : "...",

  "J" : ".---", "T" : "-",    "4" : "....-", "." : ".-.-.-", ";" : "-.-.-.",
  "j" : ".---", "t" : "-"
 };

let sosinput = fs.readFileSync(sosInputFile, function(err, data) {
    if (err) throw err;
});

let textinput = fs.readFileSync(textInputFile, function(err, data) {
    if (err) throw err;
});

  function decodeMorse(morseCode) {
    const ref = { 
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
  
    return morseCode
      .split('   ')
      .map(
        a => a
          .split(' ')
          .map(
            b => ref[b]
          ).join('')
      ).join(' ');
  }
  
  function codeMorse(input)
  {
   let output = "";
    let temp = "";
   for( let i = 0; i < input.length; i++ )
   {
        temp = letters[input.charAt(i)];
    
    if( temp )
    {
     if( "*" == temp )
     {
      temp = " ";
     }
     output += temp + " ";
    }
    else output += "  ";
   }
 
   return output;
   
  }

let decodedMorse = decodeMorse(sosinput.toString());
let codedMorse = codeMorse(textinput.toString());

console.log("sos code: "  + sosinput.toString() + " read from file: "  + sosInputFile +  " equals to string : " + decodedMorse);

console.log("text: " + textinput.toString() + " from file: " + textInputFile + " equals to: " + codedMorse);

fs.writeFile(sosToTextFile, decodedMorse, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written decodedMorse to File: " + sosToTextFile);
  });

fs.writeFile(textToSosFile, codedMorse, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written codedMorse to File: " + textToSosFile);
});
