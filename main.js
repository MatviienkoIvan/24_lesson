$(function(){
	const dataFromAndrey = {
	   "John McLean":{
		  "age":34,
		  "experience":12
	   },
	   "Adam Luis":{
		  "age":45,
		  "experience":5
	   },
	   "Oleg Petrenko":{
		  "age":25,
		  "experience":7
	   },
	   "Natalia Ostroverh":{
		  "age":38,
		  "experience":10
	   },
	   "Olya Ostroverh":{
		  "age":36,
		  "experience":10
	   },
	   "Olya Tinkoff":{
		  "age":55,
		  "experience":21
	   },
	   "Anton Antonov":{
		  "age":25,
		  "experience":22
	   },
	   "Oleg Tynov":{
		  "age":18,
		  "experience":1
	   }
	};
	var arr = [];
	$.each(dataFromAndrey, function(key, value){
		value.name = key;
		arr.push(value);
	})
	console.log(arr);
	
	
	console.log(
		arr.sort(function(a, b){
			return (a.age - a.experience) - (b.age - b.experience);
		})
	);
});
