var code:string[]
code = ['black','brown','red','orange','yello','green','blue','violet','grey','white']
function ccode(str1:string,str2:string,str3:string,str4?:string){
    if(str4==undefined){
        var c1:number,c2:number,c3:number,m:number,t:number,res:number
        c1 = code.indexOf(str1)
        c2 = code.indexOf(str2)
        m = code.indexOf(str3)
        res = (c1*10)+c2
        if(str3 == "gold"){
            m = 0.1
        }
        else if(str3 == "silver"){
            m = 0.01
        }
        else{
            m = Math.pow(10,m)
        }
        res = res * m
        console.log("Resistor Value:",res )
    }
    else{
        var c1:number,c2:number,c3:number,m:number,t:number,res:number
        c1 = code.indexOf(str1)
        c2 = code.indexOf(str2)
        c3 = code.indexOf(str3)
        m = code.indexOf(str4)
        res = (c1*100)+(c2*10)+c3
        if(str4 == "gold"){
            m = 0.1
        }
        else if(str4 == "silver"){
            m = 0.01
        }
        else{
            m = Math.pow(10,m)
        }
        res = res * m
        console.log("Resistor Value:",res )
    }
}
ccode("brown","red","red")
ccode("brown","black","black","brown")

/*var a = {"black" : 1 , "brown" : 10 , "red" : 100 , "orange" : 1000 , "yellow" : 10000 , "green" : 100000, "blue" : 1000000};
var vals = {"black" : 0 , "brown" : 1 , "red" : 2 , "orange" : 3 , "yellow" : 4, "green" : 5 , "blue" : 6 };
var b = ["red", "red" , "black" , "red"];
var resist :number = 0;
   for(var i = 0 ; i < b.length ; i++){
    if (i == 3){
        resist *= a[b[i]];
        break;
    }
    if(b[i] in vals){
        var t :string;
        if (resist!= 0){
        t = <string><unknown>resist;}
        var g = <string><unknown>vals[b[i]];
        if(resist == 0){
        var f = g;}
        else{
            var f = t+""+""+g;
        }
        resist = <number> <unknown> f;
    }

   }
   console.log(resist);*/