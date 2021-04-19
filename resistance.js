var code;
code = ['black', 'brown', 'red', 'orange', 'yello', 'green', 'blue', 'violet', 'grey', 'white'];
function ccode(str1, str2, str3, str4) {
    if (str4 == undefined) {
        var c1, c2, c3, m, t, res;
        c1 = code.indexOf(str1);
        c2 = code.indexOf(str2);
        m = code.indexOf(str3);
        res = (c1 * 10) + c2;
        if (str3 == "gold") {
            m = 0.1;
        }
        else if (str3 == "silver") {
            m = 0.01;
        }
        else {
            m = Math.pow(10, m);
        }
        res = res * m;
        console.log("Resistor Value:", res);
    }
    else {
        var c1, c2, c3, m, t, res;
        c1 = code.indexOf(str1);
        c2 = code.indexOf(str2);
        c3 = code.indexOf(str3);
        m = code.indexOf(str4);
        res = (c1 * 100) + (c2 * 10) + c3;
        if (str4 == "gold") {
            m = 0.1;
        }
        else if (str4 == "silver") {
            m = 0.01;
        }
        else {
            m = Math.pow(10, m);
        }
        res = res * m;
        console.log("Resistor Value:", res);
    }
}
ccode("brown", "red", "red");
ccode("brown", "black", "black", "brown");
