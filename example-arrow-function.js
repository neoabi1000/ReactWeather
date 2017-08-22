// var names = ['Abinash', 'julie', 'jeny', 'sony'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
//   var x = 12;
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Abinash'));
//
// var person = {
//   name: 'Abinash',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();
// challenge area

function add (a, b) {
  return a + b;
}

//add Statement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(2, 15));
console.log(addStatement(7, 19));

//add Expression
var addExpression = (a, b) => a + b;
console.log(addExpression(5,-9));
console.log(addExpression(-9, 19));
// console.log(add(1, 3));
// console.log(add(3, 9));
