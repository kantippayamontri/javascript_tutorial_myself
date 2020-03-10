console.log(`--- javascript if else ---`);
const age = "18";
// == is equal to
// === is equal value and equal type
if (age == 18) {
  console.log(`age is 18 in number`);
}
if (age == "18") {
  console.log(`age is 18 in string`);
}
if (age === 18) {
  console.log(`age is 18 in value and type`);
}

const number = "20";
if (number != 18) {
  console.log(`number is not equal 18 in number`);
}
if (number != "18") {
  console.log(`number is not equal 18 in string`);
}
if (number !== 18) {
  console.log(`number is not equal 18 in number and equal in type`);
}

const less = 20;
if (less <= 20) {
  console.log(`less equal in number`);
}
if (less <= "20") {
  console.log(`less equal in string`);
}
// if(less <= '20'){
//     console.log(`less equal in string`)
// }
