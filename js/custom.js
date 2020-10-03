
let plus = document.getElementById('increment');
let minus = document.getElementById('decrement');
let reset = document.getElementById('reset');
let num = document.getElementById('number');

let value = 0;

plus.addEventListener('click', function(){

	value = value + 1;
	num.innerHTML = value;

});

minus.addEventListener('click', function(){

	if(value > 0){

		value = value - 1;
		num.innerHTML = value;
	}else{
		alert("Number Must not be Negative value");
	}
});

reset.addEventListener('click', function(){

		value = 0;
		num.innerHTML = value;
});
