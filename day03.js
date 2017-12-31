function part1(){
let number = 368078;
let level=1;
while(level*level < number){
    level+=2;
}
let previous = level-1;
let step = previous/2;
console.log("The level is "+level);
console.log(level*level-number);

let corner4 = level*level;
let corner3 = level*level-previous;
let corner2 = level*level-2*previous;
let corner1 = level*level-3*previous;

let mid1 = previous*previous+step;
let mid2 = level*level-3*previous+step;
let mid3 = level*level-2*previous+step;
let mid4 = level*level-previous+step;

if(corner1 == number || corner2 == number || corner3 == number || corner4 == number){
    console.log("It will take "+previous+" Manhattan steps");
}
else if(mid1 == number || mid2 == number || mid3 == number || mid4 == number){
    console.log("It will take "+step+" Manhattan steps");
}
else{
    //not a corner or a mid
    let totalsteps;
    if(number > corner3){
        totalsteps = step+Math.abs(number -mid4);
    }
    else if(number > corner2){
        totalsteps = step+Math.abs(number-mid3 );
    }
    else if(number > corner1){
        totalsteps = step+Math.abs(number-mid2 );
    }
    else{
        totalsteps = step+Math.abs(number-mid1 );
    }
    console.log("It will take "+totalsteps+" Manhattan steps");
}
}
part1();

function part2(){
    let number = 368078;
    let directionlist = new Array();

    let len = 25;
    let matrix = new Array(len);
    for(let a=0;a<len;a++){
        matrix[a] = new Array(len);
        matrix[a].fill(0);
    }
    let mid = (len+1)/2;
    matrix[mid][mid] = 1;
    //console.log("The mid mid is "+ matrix[mid]);

    let directions  = new Map();
    directions.set("R","U");
    directions.set("U","L");
    directions.set("L","D");
    directions.set("D","R");
    //console.log(directions);


    let inc =1;
    let current = "R";
    let count = 0;

    while(count < 2*(len+1)){
        let temp = inc;
        while(temp>0){
            directionlist.push(current);
            temp--;
        }
        current = directions.get(current);
        temp = inc;
        while(temp>0){
            directionlist.push(current);
            temp--;
        }
        inc++;
        current = directions.get(current);
        count+=2;
    }
    console.log(directionlist);
}
part2();
