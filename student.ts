class Student{
    name:string;
    age:number;
    standard:number;
    division:string;

    constructor(name:string,age:number,standard:number,division:string) {
        this.name = name;
        this.age = age;
        this.standard = standard;
        this.division = division;
    }
    setName(name:string){
        this.name = name;
    }
    setAge(age:number){
        this.age = age;
    }
    setStandard(standard:number){
        this.standard = standard;
    }
    setDivision(division:string){
        this.division = division;
    }
    getName(): string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
    getStandard(): number{
        return this.standard;
    }
    getDivision():string{
        return this.division;
    }
}
let st1 = new Student("Sid",21,10,"F");
console.log(st1.getAge()+" "+
    st1.getName()+" "+
    st1.getDivision()+" "+
    st1.getStandard());