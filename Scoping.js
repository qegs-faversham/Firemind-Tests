//travis code
export DISPLAY =: 99.0
sh -e /etc/init.d/xvfb start

//GitHub tests: Scoping
function request(callback) {
		return eval(callback)();
	}
function method(){
		this.foo = 'bar';
		return this.foo;
	}
function req(){
		return request(method);
	}
  
y = req();
console.log(y);//output: bar
