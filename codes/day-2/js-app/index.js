//data types
//number, string, boolean, object

var x = 10;
x = "joy";
console.log(x, typeof x);

// var h2Element = document.getElementById("main");
// h2Element.addEventListener("mouseover", function () {
//   h2Element.innerText = "changed the content";
// });

function add(a, b) {
  return a + b;
}

//keywords: undefined, null, NaN, Infinity

var obj = {
  id: 1,
  name: "joy",
  salary: 1000,
  print: function () {
    return this.name + " " + this.salary + " " + this.id;
  },
};

// function person(idValue, nameValue, salaryValue) {
//   var x = 100;
//   this.id = idValue;
//   this.name = nameValue;
//   this.salary = salaryValue;
//   this.print = function () {
//     return this.name + " " + this.salary + " " + this.id;
//   };
// }

class person {
  constructor(idValue, nameValue, salaryValue) {
    this.id = idValue;
    this.name = nameValue;
    this.salary = salaryValue;
  }
  print() {
    return this.name + " " + this.salary + " " + this.id;
  }
}

class Trainer extends person {
  constructor(idValue, nameValue, salaryValue, subject) {
    super(idValue, nameValue, salaryValue);
    this.subject = subject;
  }
  print() {
    return super.print() + " " + this.subject;
  }
}

var obj1 = new person(1, "joy", 1000);

console.log(obj.id);
console.log(obj["name"]);
console.log(obj.print());
console.log("\n\n\n");
for (var propName in obj) {
  console.log(`${propName}:${obj[propName]}`);
}
