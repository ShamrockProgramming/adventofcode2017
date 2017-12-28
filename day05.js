let fs = require('fs');

let file = fs.readFileSync('text05.txt','utf8');
//console.log(file);
let numbers = file.split("\n");
for(let n=0;n<numbers.length-1;n++){
    let i = numbers[n].indexOf("\r");
    numbers[n] = Number(numbers[n].substring(0,i));
}
//console.log(numbers);
let len = numbers.length-1
console.log("The length of the array is "+len);
let position = 0;
let count =0;
while(position < len && position > -1){
    let oldpos = position;
    position += numbers[position];
    numbers[oldpos]++;
    count++;
    if(count>4000000){
        console.log("BROKEN");
        break;
    }
}

console.log("The position is "+position);
console.log("The count is "+count);
