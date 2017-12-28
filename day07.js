let fs = require('fs');

let file = fs.readFileSync('text07.txt','utf8');
//console.log(file);
let lines = file.split("\n");
for(let n=0;n<lines.length-1;n++){
    let i = lines[n].indexOf("\r");
    lines[n] = lines[n].substring(0,i);
}
//console.log(lines[4]);

function processNode(line){
    //console.log(line);
    let leftparindex = line.indexOf("(");
    let rightparindex = line.indexOf(")");
    let arrowindex = line.indexOf("->");

    this.name = line.substring(0,leftparindex-1);
    this.weight = Number(line.substring(leftparindex+1,rightparindex));

    let clist = line.substring(rightparindex+5,line.length);
    if(clist === ""){
        this.children = [];
    }
    else{
        this.children = this.children = clist.split(", ");
    }

}
//console.log(new processNode(lines[4]));

//build a list of process nodes
let nodes = [];
for(let n=0;n<lines.length-1;n++){
    nodes[n] = new processNode(lines[n]);
}


//sort nodes by length of children array
for(let a=0;a<nodes.length;a++){
    for(let b=a+1;b<nodes.length;b++){
        if(nodes[a].children.length < nodes[b].children.length){
            let temp = new Object();
            temp = nodes[b];
            nodes[b] = nodes[a];
            nodes[a] = temp;
        }
    }
}
/*
console.log(nodes[0]);
console.log(nodes[10]);
console.log(nodes[200]);
console.log(nodes[400]);
console.log(nodes[500]);
console.log(nodes[1000]);
*/

let childrenlist = [];
for(let c=0;c<nodes.length;c++){
    let clen = nodes[c].children.length;
    if(clen == 0){
        continue;
    }
    else{
        for(let d=0;d<clen;d++){
            childrenlist.push(nodes[c].children[d])
        }
    }
}

//search childrenlist for the absence of the name
for(let n=0;n<nodes.length;n++){
    let seen = false;
    for(let c=0;c<childrenlist.length;c++){
        if(nodes[n].name === childrenlist[c]){
            seen = true;
            break;
        }
    }
    if(!seen){
        console.log(nodes[n].name+ " was not seen in the list of children");
        console.log("its index in the nodes array was "+n);
    }
}
