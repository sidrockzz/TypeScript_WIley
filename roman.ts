function roman_help(value:any, low:string,medium:string,high:string){
    let cases =
        {
            1: low,
            2: low.repeat(2),
            3: low.repeat(3),
            4: low + medium,
            5: medium,
            6: medium + low,
            7: medium + low.repeat(2),
            8: medium + low.repeat(3),
            9: low + high,
            0: ''
        }
    return high.repeat(value/10)+cases[(value%10)]
}
function roman(value:number){
    let out=""
    if (value/100)
    out+=roman_help((value/100).toFixed(), "C", "D", "M")
    value=value%100
    if (value/10)
    out+=roman_help((value/10).toFixed(), "X", "L", "C")
    value=value%10
    if (value)
    out+=roman_help((value), "I", "V", "X")
    return out
}

console.log(roman(1999))