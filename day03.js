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
