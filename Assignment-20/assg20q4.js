const salary = 50000;
const gender = "M";

let tax = 0;

if(salary <= 50000) {
 console.log("tax is not applicable")
} else if(salary > 50000 && salary <= 150000) {
 if(gender == "M") {
  tax = 10;
 } else {
  tax = 7;
 }
} else {
 if(gender == "M") {
  tax = 15;
 } else {
  tax = 10;
 }
}