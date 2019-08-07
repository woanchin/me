// var name="Woan Chin";
// var age="24";
// var shootingScore = 45.6;

// var message= "Hi, my name is " + name + " and I am " + age + " years old!";

// var firstName = "John";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

// var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd Birthday!";

// console.log(loginWelcomeMessage);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;

// console.log(sum + " " + sub + " " + mul + " " + div + " " + mod);

// var accountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500;

// if (nikeSBShoes <= accountBalance) {
//     accountBalance -= nikeSBShoes;
//     console.log("We just bought some dope shoes!");
//     console.log(accountBalance);
// } else if (nikeSBShoes - coupon <= accountBalance) {
//     console.log("we just bought some dope shoes with a coupon");
//     accountBalance -= nikeSBShoes - coupon;
//     console.log(accountBalance); 
// } else {
//     console.log("you too broke for shoes bruh");
//}

// var students = ["Timmy", "Janessa", "Arun"];

// var naughtyList = [];
// naughtyList.push(students[0]);

// var index = naughtyList.indexOf("Timmy");

// console.log(naughtyList);
// if (index > -1) {
//     naughtyList.splice(index, 1);
// }

// console.log(naughtyList);
// var total = 10;
// for (var x = 0; x  < total; x++) {
//     console.log(x);
// }

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var length2 = 12;
// var width2 = 14;
// var area2 = length2 * width2;

// console.log(area1);
// console.log(area2);

// function area(length, width) {
//     return length * width;
// }

// var rectangles = [];
// rectangles.push(area(10,15));
// rectangles.push(area(14,2));
// rectangles.push(area(5,2));

// console.log(rectangles);
var students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
}

students.push( new Student("Jenny", "Laga", 5));
students.push( new Student("Timmy", "Turner", 8));
students.push( new Student("Carl", "Jr", 4));

for (var index=0; index < students.length; index++) {
    console.log(students[index].greeting());
}

var student = students[0];
for (var key in student) {
    console.log(student[key]);
}

var student0 = {
    firstName: "Jayne",
    lastName: "Loooo",
    age: 8,
    greeting: function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
};

console.log(student0.greeting());

var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;


students.push(student0);
students.push(student1);
students.push(student2);


console.log(students);