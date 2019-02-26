//travis code
export DISPLAY =: 99.0
sh -e /etc/init.d/xvfb start

//GitHub tests: Clone object
function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

const expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};

const obj = cloneObject(expected);

console.log(obj); //output:{ name: 'Ahmed',
 // age: 27,
 // skills: [ 'cycling', 'walking', 'eating' ] }

//Showing that obj != expected
obj.name = 'foo';

console.log(expected.name);//output: Ahmed
console.log(obj.name); //output: foo
