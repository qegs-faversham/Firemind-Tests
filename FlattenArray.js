//travis code
export DISPLAY =: 99.0
sh -e /etc/init.d/xvfb start

//GitHub tests: Flatten an array
function flattenArray(array) { 
	return String(array).split(',').map(Number);
}

var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]]

console.log(flattenArray(arr))//output: 1,2,1,2,3,4,5,1,2,2
