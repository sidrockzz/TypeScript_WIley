var aa = { 1:"black"  , 10:"brown"  , 100 :"red"  ,  1000:"orange"  , 10000 :"yellow"  ,  100000:"green" ,  1000000:"blue" };
var valys = {  0:"black" , 1:"brown"  ,  2:"red"  ,3: "orange"  , 4: "yellow" ,  5:"green"  ,6: "blue"  };
var b = ["red", "red" , "black" , "red"];
var num : string = '23000';
var rt : number = 4; //if t ==  4 band resistor , else 5 band resistor
var cou : number = 0;
var mul : string = "1";
for (var val of num){
    if ( cou < rt-1){
        console.log(valys[val]);
    }
    else{
        mul = mul + val;
    }
    cou +=1;

}
var mull :number = +mul;
console.log(aa[mull])