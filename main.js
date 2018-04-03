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
    /*
	let arr = [];
	$.each(dataFromAndrey, function(key, value){
		value.name = key;
		arr.push(value);
	})
	console.log(arr);
	*/
	
    let arr1 = [];
	$.each(dataFromAndrey, function(key, value){
		let obj = {};
			obj.name = key;
			obj.age = value.age;		
			obj.experience = value.experience;
			arr1.push(obj);
	})
	console.log(arr1);
	
	
	//2) sort by dateworking time
	console.log(
		arr1.sort(function(a, b){
			return (a.age - a.experience) - (b.age - b.experience);
		})
	);
    
    //3) sort experience > 6 years
    let arrMoreSixExp = arr1.filter(function(value){
        return value.experience > 6;
    });
    console.log(arrMoreSixExp);
    
    let arrThirsty = [],
        arrThirstyFourty = [],
        arrFourty = [];
    $.each(arr1, function(key, items){        
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
	
	var obj = {
		"A": ".-",
		"B": "-...",
		"C": "-.-.",
		"D": "-..",
		"E": ".",
		"F": "..-.",
		"G": "--.",
		"H": "....",
		"I": "..",
		"J": ".---",
		"K": "-.-",
		"L": ".-..",
		"M": "--",
		"N": "-.",
		"O": "---",
		"P": ".--.",
		"Q": "--.-",
		"R": ".-.",
		"S": "...",
		"T": "-",
		"U": "..-",
		"V": "...-",
		"W": ".--",
		"X": "-..-",
		"Y": "-.--",
		"Z": "--.."
	}
				
	function translateAlfabetToMorze(value){
		let arrMorz = value.split(""),
			separateChar = " ",
			separateWord = "   ",
			result;
		arrMorz.forEach(function(item){
			return result += obj[item.toUpperCase()] + separateChar;
		})
		return "Morze text" + result;
	}	
	translateAlfabetToMorze("Hello world")
	
	var coins = {
		penny: 0.01,
		nickel: 0.05,
		dime: 0.10,
		quarter: 0.25,
		dollar: 1.00
	}
	function change_count(param){
		let arrParam = [],
			total = 0;
		arrParam = param.split(" ");
		arrParam.forEach(function(item){
			return total += coins[item];
		})
		return '$' + total;
	}	
	change_count("nickel penny dime dollar")
	
})

// тороны джаваскрипт
// https://www.codewars.com/