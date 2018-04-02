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
    //1) object to arr
    let arr = [];
	$.each(dataFromAndrey, function(key, value){
		value.name = key;
		arr.push(value);
	})
	console.log(arr);	
	//2) sort by dateworking time
	console.log(
		arr.sort(function(a, b){
			return (a.age - a.experience) - (b.age - b.experience);
		})
	);
    
    //3) sort experience > 6 years
    let arrMoreSixExp = arr.filter(function(value){
        return value.experience > 6;
    });
    console.log(arrMoreSixExp);
    
    let arrThirsty = [],
        arrThirstyFourty = [],
        arrFourty = [];
    $.each(arr, function(key, items){        
        if(items.age <= 30){            
            arrThirsty.push(items);
        }
        else if(30 < items.age && items.age < 40){
            arrThirstyFourty.push(items);            
        }
        else{
            arrFourty.push(items);            
        }             
    });    
    console.log(arrThirsty);
    console.log(arrThirstyFourty);
    console.log(arrFourty);
})