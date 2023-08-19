const studentGrades = [100, 50, 65, 70, 85, 96, 45]

let p = 0;
let arrayg = [];
let pass = 0;
let lose = 0;

studentGrades.forEach(grade => {
    if(grade>=90){
        arrayg.push("A")
        pass++;
    }

    if(grade>=80 && grade<=89){
        arrayg.push("B")
        pass++;
    }

    if(grade>=70 && grade<=79){
        arrayg.push("C")
        pass++;
    }

    if(grade>=60 && grade<=69){
        arrayg.push("D")
        pass++;
    }

    if(grade<60){
        arrayg.push("F")
        lose++;
    }
});

console.log(`${arrayg}  pass: ${pass}  lose: ${lose}`)