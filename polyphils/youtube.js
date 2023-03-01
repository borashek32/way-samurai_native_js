let arr = [1,2,3];
arr[10] = 10;

Array.prototype.forEach2 = function(callback, thisArg) {
  let arr = this;

  if (this == null) {
    throw new Error("Can't iterate over undefined or null");
  }

  let O = Object(this);

  console.log(O);

  let len = Object.length;

  let i = 0;

  while (i < len) {
    i++;
    callback(this[i], i, O);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i in O) {
      callback(arr[i], i, arr);
    }
    i++;
  }
};

arr.forEach2((item, index, array) => {
  console.log({item, index});
  // console.log({index});
  // console.log({array});
});