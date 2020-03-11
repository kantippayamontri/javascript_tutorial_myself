console.log(`--- Javascript Objects and Keyword This ---`);
const user = {
  name: "first",
  age: 22,
  purchases: ["phone", "motorcycle", "laptop"],
  sayname: function saymyname() {
    console.log(`My name is ${this.name}`);
  }
};

function apple() {
  console.log("apple");
}
console.log(this);
window.apple();
this.apple(); //this is window object
//this.user.saymyname();
console.log(user.name);
this.apple();
user.sayname();
