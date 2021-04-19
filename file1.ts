console.log(disp_details("Red"));
console.log(disp_details(undefined,3));
function disp_details(name:string,id?:number) {
    let a=name;
    let b=id;

    if(a!=undefined){
        switch (a){
            case 'Black': {
                console.log("Colour code is 0");
                break;
            }
            case 'Brown': {
                console.log("Colour code is 1");
                break;
            }
            case 'Red': {
                console.log("Colour code is 2");
                break;
            }
            case 'Orange': {
                console.log("Colour code is 3");
                break;
            }
            case 'Yellow': {
                console.log("Colour code is 4");
                break;
            }
            case 'Green': {
                console.log("Colour code is 5");
                break;
            }
            case 'Blue': {
                console.log("Colour code is 6");
                break;
            }
            case 'Violet': {
                console.log("Colour code is 7");
                break;
            }
            case 'Grey': {
                console.log("Colour code is 8");
                break;
            }
            case 'White': {
                console.log("Colour code is 9");
                break;
            }

            default: {
                console.log("Invalid input");
                break;
            }
        }  }
    else{
        switch (b){
            case 0: {
                console.log("Black");
                break;
            }
            case 1: {
                console.log("Brown");
                break;
            }
            case 2: {
                console.log("Red");
                break;
            }
            case 3: {
                console.log("Orange");
                break;
            }
            case 4: {
                console.log("Yellow");
                break;
            }
            case 5: {
                console.log("Green");
                break;
            }
            case 6: {
                console.log("Blue");
                break;
            }
            case 7: {
                console.log("Violet");
                break;
            }
            case 8: {
                console.log("Grey");
                break;
            }
            case 9: {
                console.log("White");
                break;
            }
            default: {
                console.log("Invalid input");
                break;
            }  }
    }
}