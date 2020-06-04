console.log("---------------- ep6 javscript array ------------------");
const todo = ["first", "second", "third", 4, 5, 6];
todo.push("seven"); //add data in last element
todo.push("eight");
todo.pop(); //Removes the last element from an array and returns it.
todo.shift(); //remove first element
todo.unshift("a new one"); //add data first element
console.log(todo.length);
console.log(todo.indexOf("first")); //not found return -1
console.log(todo.indexOf("second"));

const third = todo.indexOf("third");
console.log(todo[third]);
