let memory = [11,11,13,7,0,15,5,5,4,4,1,1,7,1,15,11];
let cycles = 0;
let states = [];



function distribute(mem,ind){

    states.push(mem);
    let stuff = mem[ind];
    mem[ind] = 0;
    ind++;
    while(stuff > 0){
        console.log("stuff = "+stuff);
        if(ind>15){
            ind-=16;
        }

        mem[ind]+=1;
        ind++;
        stuff--;

    }
    console.log(mem);
}

function inStateLog(){
    let len = states.length;
    let seen = false;
    for(let s=0;s<len;s++){
        let all = true;
        let temp = states[s];
        for(let m=0;m<16;m++){
            if(temp[m] != memory[m]){
                all = false;
                break;
            }
        }
        seen = seen || all;
        if(seen){
            break;
        }
    }
    return seen;
}

console.log(memory);
while(!inStateLog()){
    let max = Math.max(...memory);
    let maxindex = memory.indexOf(max);
    console.log("The max is "+max+" its index is "+maxindex);
    distribute(memory,max);
    cycles++;
    if(cycles>1000000){
        console.log("BREAK HIT LIMIT");
        break;
    }
}
console.log("This took "+cycles+" cycles!");
