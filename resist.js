var aa = { 1: "black", 10: "brown", 100: "red", 1000: "orange", 10000: "yellow", 100000: "green", 1000000: "blue" };
var valys = { 0: "black", 1: "brown", 2: "red", 3: "orange", 4: "yellow", 5: "green", 6: "blue" };
var b = ["red", "red", "black", "red"];
var num = '23000';
var rt = 4; //if t ==  4 band resistor , else 5 band resistor
var cou = 0;
var mul = "1";
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var val = num_1[_i];
    if (cou < rt - 1) {
        console.log(valys[val]);
    }
    else {
        mul = mul + val;
    }
    cou += 1;
}
var mull = +mul;
console.log(aa[mull]);
