type StudentNames = string;
type StudentId = number;
type StudentYear = number;
type StudentResult = boolean;

type Student = {
    Names:StudentNames,
    Id:StudentId,
    Year:StudentYear,
    Result:StudentResult
};
let StudentNames:StudentNames ='joel'
let StudentId:StudentId= 2589
let StudentYear:StudentYear= 2020
let StudentResult:StudentResult= true

let Student:Student = {
StudentNames:StudentNames,
StudentId:StudentId,
StudentYear:StudentYear,
StudentResult:StudentResult  
};

console.log(Student)