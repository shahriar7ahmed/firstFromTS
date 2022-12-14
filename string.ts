
let employeeName: string = "John Smith";
let employeeDept: string = "Finance";

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department.";

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 


let str1: string = 'Hello Javascript';
let str2: string = 'TypeScript';

str1.replace('Java', 'Type'); // returns 'Hello TypeScript'
str1.replace('JavaScript', str2); // returns 'Hello TypeScript'
str1.replace(/Hello/gi, 'Hi'); // returns 'Hi TypeScript'