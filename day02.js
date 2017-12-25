let ar1 = [3751,3769,2769,2039,2794,240,3579,1228,4291,220,324,3960,211,1346,237,1586];
let ar2 = [550,589,538,110,167,567,99,203,524,288,500,111,118,185,505,74];
let ar3 = [2127,1904,199,221,1201,250,1119,377,1633,1801,2011,1794,394,238,206,680];
let ar4 = [435,1703,1385,1461,213,1211,192,1553,1580,197,571,195,326,1491,869,1282];
let ar5 = [109,104,3033,120,652,2752,1822,2518,1289,1053,1397,951,3015,3016,125,1782];
let ar6 = [2025,1920,1891,99,1057,1909,2237,106,97,920,603,1841,2150,1980,1970,88];
let ar7 = [1870,170,167,176,306,1909,1825,1709,168,1400,359,817,1678,1718,1594,1552];
let ar8 = [98,81,216,677,572,295,38,574,403,74,91,534,662,588,511,51];
let ar9 = [453,1153,666,695,63,69,68,58,524,1088,75,1117,1192,1232,1046,443];
let ar10 = [3893,441,1825,3730,3660,115,4503,4105,3495,4092,48,3852,132,156,150,4229];
let ar11 = [867,44,571,40,884,922,418,328,901,845,42,860,932,53,432,569];
let ar12 = [905,717,162,4536,4219,179,990,374,4409,4821,393,4181,4054,4958,186,193];
let ar13 = [2610,2936,218,2552,3281,761,204,3433,3699,2727,3065,3624,193,926,1866,236];
let ar14 = [2602,216,495,3733,183,4688,2893,4042,3066,3810,189,4392,3900,4321,2814,159];
let ar15 = [166,136,80,185,135,78,177,123,82,150,121,145,115,63,68,24];
let ar16 = [214,221,265,766,959,1038,226,1188,1122,117,458,1105,1285,1017,274,281];

function extremes(arr){
    let len = arr.length;
    let pair =[];

    if(arr[0]<= arr[1]){
        pair[0] = arr[0];
        pair[1] = arr[1];
    }
    else{
        pair[0] = arr[1];
        pair[1] = arr[0];
    }

    for(let a=2;a<len;a++){
        if(arr[a]<pair[0]){
            pair[0]=arr[a];
        }
        else if(arr[a]>pair[1]){
            pair[1]=arr[a];
        }
    }
    return pair;
}

let list = [ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16];

function diff(arr){
    if(arr.length ==2){
        return arr[1] - arr[0];
    }
}

function sort(arr){

    for(let a=0;a<arr.length-1;a++){
        let temp;
        for(let b=a+1;b<arr.length;b++){
            if(arr[b]<arr[a]){
                temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        }
    }
    return arr;
}
/*
let checksum = 0;
for(let a=0;a<list.length;a++){
    checksum += diff(extremes(list[a]));
}
console.log("Your check sum is: "+checksum);
*/

let sorted = [];
for(let a=0;a<list.length;a++){
    let temp = list[a];
    sorted.push(sort(temp));
}

function modularity(arr){
    //assumes the array is presorted
    for(let n=arr.length-1;n>=0;n--){
        for(let d=0;d<n;d++){
            if(arr[n] % arr[d] == 0){
                return arr[n] / arr[d];
            }
        }
    }
}
let checksum = 0;
for(let s=0;s<sorted.length;s++){
    checksum += modularity(sorted[s]);
}
console.log("The second check sum is = "+checksum);
