// //we are now using callback function for getting the data
//
// function getTempCallBack(location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallBack('philadelphia', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
//
// //now we will use promise for to get rid of a-sync callback
// //it it is getting both success and failure at a same time
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })


function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      if (typeof a === 'number' && typeof b === 'number' ) {
        resolve(a + b);
      } else {
        reject('A and B need to be numbers');
      }
    },2000);
  });
}

addPromise (7, 8).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
