"use strict";

let emptyObj = {};
let newObj = new Object();
newObj.property = "property";

function objMethod() {
  console.log("object method");
}

newObj.method = objMethod;
newObj.method();

function User(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;

  this.welcomeMessage = function() {
    console.log(`Welcome, ${this.firstName} ${this.secondName}`);
  };
}

let user = new User("Maksim", "Semenov");
user.welcomeMessage();

let anotherUser = new User("Timofey", "Maksimov");
user.friend = anotherUser;
user.welcomeMessageFriend = function() {
  console.log(`Welcome, ${this.friend.firstName} ${this.friend.secondName}`);
};
user.welcomeMessageFriend();

Array.prototype.average = function() {
  let sum = 0;
  this.forEach(element => sum += element);
  return sum / this.length;
}

let arr = [1, 2, 4, 8, 16, 32, 64];
console.log(arr.average());