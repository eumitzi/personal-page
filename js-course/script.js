
	/**********************
Variables and data types

var firstName = 'Miha';
console.log(firstName);

var lastName = 'TUTU';
console.log(lastName);

var age = 22;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'developer';
console.log(job);

/***********************
Variables mutation and type coercion

// type coercion
var firstName = 'Miha';
var lastName = 'TUTU';
var age = 22;

console.log(firstName + ' is ' + age + ' old');

var job, isMarried;

job = 'developer';
isMarried = false;

console.log(firstName + ' is ' + job + '. Is she married ? ' + isMarried);

// variable mutation
age = 'twenty two';
console.log(firstName + ' is ' + age + ' old');

alert(firstName + ' is ' + job + '. Is she married ? ' + isMarried);

prompt('What is her last name?');
console.log('her last name is: ' + lastName);



/***********************
Basic JS operators

var firstNameMiha = 'Miha';
var firstNameJohn = 'John';
var currentYear = 2019;
var ageMiha = 22;
var ageJohn = 23;

// math operators
var birthYearMiha = currentYear - ageMiha;

console.log(firstNameMiha + ' was born in ' + birthYearMiha);
console.log(firstNameMiha + 'and' + firstNameJohn + ' have together: ' + (ageMiha + ageJohn));
console.log('Double age of ' + firstNameMiha + ' is ' + (ageMiha * 2));
console.log('Half of ' + firstNameMiha + '\'s age is ' + ageMiha / 2);

// Logical operators

// conditional operator
var isJohnOlder = (ageJohn > ageMiha) ? true : false;
console.log(isJohnOlder);

// Type of operator
console.log(typeof isJohnOlder);
console.log(typeof firstName);
console.log(typeof firstNameMiha);

/***************
Operators`precedence

var currentYear =  2019;
var yearMiha = 1996;
var age = 22;

// Multiple operators and grouping
var isFullAge = (currentYear - yearMiha) > age;
console.log(isFullAge);

/**********************
Coding challenge

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter)

1. Store Mark`s and John`s mass and height in variables.
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether
Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Marks`s BMI higher than John`s? true").

// 1
var massMark = 80, heightMark = 1.80;
var massJohn = 85, heightJohn = 1.70;

// 2
var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

// 3
var isMarkHigher = (bmiMark > bmiJohn) ? true : false;

// it worked if we used simply: var isMarkHigher = bmiMark > bmiJohn

console.log('bmiMark: ' + bmiMark + '\n' + 'bmiJohn: ' + bmiJohn);

// 4
console.log('Is Marks`s BMI higher than John`s? ' + isMarkHigher);


/***************************
* If / else statements

var firstName = 'Miha';
var civilStatus = 'single';

if(civilStatus === 'married'){
	console.log(firstName + 'is ' + isMarried);
}  else {
	console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;
if(isMarried){
	console.log(firstName + 'is married: ' + isMarried);
}  else {
	console.log(firstName + ' will hopefully marry soon :) ');
}

/***************************
* Boolean logic


var firstName = 'Miha';
var age = 13;

if(age <= 13){
	console.log(firstName + 'is a girl');
} else if ( (age > 13) && (age < 22) ) { // between 13 and 22
	console.log(firstName + ' is a teenager');
} else {
	console.log(firstName + ' is a woman');
}

/*****************************
* The ternary / consditional operator

var firstName = 'Miha';
var age = 22;

(age > 18) ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = (age > 18) ? 'beer' : 'juice';
console.log(drink);
// the same with:

/*
if(age > 18){
	var drink = 'beer';
} else {
	var drink = 'juice';
}


var job = 'developer';
switch(job){
	case 'teacher': console.log(firstName + ' teaches kids to code.');
		break;
	case 'developer': console.log(firstName + ' is programming the future.');
		break;
	case 'designer': console.log(firstName + ' designs beautiful websites.');
		break;
	default: console.log(firstName + ' has a different job');
}
 /*******************************
 * Truthy and falsy values and equality operators
 

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values
 
 var height= 1.58;
 
 if(height || height === 0){
	 console.log('Variable is defined');
 } else {
	 console.log('Variable is not defined');
 }
 
 // Equality operators
 if(height == '1.58'){
	 console.log('The == operaor makes type coercion');
 }
 
 /***********************
 * CODING CHALLENGE
 
 John and Mike both play basketball in different teams. In the latest 3 games, John`s team scored 89, 120 and 103 points, 
while Mike`s team scored 116, 94 and 123 points.

1. Calculate the average score for each team  

2. Decide which teams wins in average (highest average score), and print the winner to the console.
also, include the average score in the output.

3. Then change the scores to show there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
Like before, log the average winner to the console. HINT: you will need the && 
operator to take the decision. 

5. Like before, change the scores to generate differet winners, 
keeping in mind there might be draws.


// 1.
var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;

// 2.
if(averageJohn > averageMike){
	console.log('John wins in average. His score: ' + averageJohn);
} else if (averageJohn < averageMike) {
	console.log('Mike wins in average. His score: ' + averageMike);
} else {
	console.log('There is a draw. The average scres are the same');
}

// 4.
var averageMary = (97 + 134 + 105) / 3; 

// 5.
if((averageJohn > averageMike) && (averageJohn > averageMary)){
	console.log('John wins in average. His score: ' + averageJohn);
} else if ((averageMike > averageJohn) && (averageMike > averageMary)){
	console.log('Mike wins in average. His score: ' + averageMike);
} else if((averageMary > averageJohn) && (averageMary > averageMike)) {
	console.log('Mary wins in average. Her score: ' + averageMary);
} else {
	console.log('There is a draw. The average scores are the same.' + averageJohn + ' ' + averageMary + ' '+ averageMike);
}


/*****************
 * Functions
 

function calculateAge(birthYear){
	return 2019 - birthYear;
} 
var ageJohn = calculateAge(1996);
var ageCrisa = calculateAge(1993);
var ageMom = calculateAge(1969);
console.log("The age of Miha is: " + ageJohn +
 "\nThe age of Crisa is: " + ageCrisa + 
 "\nThe age of Mom is: " + ageMom); 

 function yearsUntilRetirement(year, firstName){
	 var age = calculateAge(year);
	 var retirement = 63 - age;

	 if(retirement > 0){
	 console.log(firstName + ' retires in ' + retirement + ' years.');
 } else {
	 console.log(firstName + ' is already retired');
 }

 yearsUntilRetirement(1996, 'Miha');
 yearsUntilRetirement(1969, 'Mom');
 yearsUntilRetirement(1993, 'Crisa'); 

 /******************
  * Functions statements
  * and expressions
  *
  
  
  // function declaration
  // function whatDoYouDo(job, firstName){}

  // function expression - produce an imediat result
  var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher': return firstName + 'teaches kids how to code';

		case 'driver': return firstName + ' drives a cab in Lisabon';

		case 'designer': return firstName + ' designs beautiful sites';

		case 'developer': return firstName + ' creates amazing features and apps';

		default: return firstName + ' does sth else';
	}
  }

  console.log(whatDoYouDo('developer', 'Miha'));
  console.log(whatDoYouDo('teacher', 'Miha'));
  console.log(whatDoYouDo('retired', 'Dad'));

/***************
 * Arrays  


// initialize new array
var names = ['Miha', 'Crisa', 'Lili'];
var years = new Array(1996, 1993, 1969); // less used

console.log(names[0]); // the element 0
console.log(names);
console.log(names.length);

// Mutate array data
names[2] = 'Liliana';
console.log(names);

names[5] = 'Mary';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

// Different data types
var miha = ['Miha', 'Tutu', 1996, 'developer', false];

// add an element at the end of the array
miha.push('grey');
console.log(miha);

// add an element at the begining of the array 
miha.unshift('Mrs.');
console.log(miha);

// remove last element of the array
miha.pop();
console.log(miha);

// remove the first element of the array
miha.shift();
console.log(miha);

// return the position of the argument - used to test if an element is in the array
console.log('Position: ' + miha.indexOf(1996));

var isDesigner = miha.indexOf('designer') === -1 ? 'Miha is not a designer' : 'Miha is a designer';
console.log(isDesigner);

/*************** 
 * Coding CHALLENGE
 * 
 * John and his family went on a holiday and went to 3
 * different restaurants. 
 * The bills were $124, $48 and $268.
 * 
 * To tip the waiter a fair amount, John created a simple calculator
 * (as a function). He likes to tip 20% of the bill when the bill
 * is less than $50, 15% when the bill is between $50 and $200, and
 * 10% if the bill is more than $200.
 * 
 * In the end, John would like to have 2 arrays:
 * 1) Containing all 3 tips (one for each bill)
 * 2) Containing all 3 final paid amounts (bill + tip)
 * 
 * NOTE: To calculate 20% of a value, simply multiply it 
 * with 20/100 = 0.2


function calculateTip(paidAmount){

	if(paidAmount <= 50){
		return paidAmount * 0.2;
	} else if(paidAmount > 50 && paidAmount <= 200){
		return paidAmount * 0.15;
	} else {
		return paidAmount * 0.1; // this could be written as .1
	}
}

var tips = [calculateTip(48), calculateTip(124), calculateTip(268)];
console.log(tips);

var paidAmounts = [48 + calculateTip(48), 124 + calculateTip(124), 268 + calculateTip(268)];
console.log(paidAmounts); 

// or create an array with bills
var bills = [48, 124, 268];

/************************ 
 * Objects and properties


// object literal
var miha = {
	firstName: 'Miha',
	lastName: 'Tutu',
	birthYear: 1996,
	age: 22,
	family: ['Crisa', 'Lili', 'Cristinel'],
	job: 'developer',
	isMarried: false
};
console.log(miha);
console.log(miha.firstName);
console.log(miha['lastName']);

var x = 'birthYear';
console.log(miha[x]);

miha.job = 'designer';
console.log(miha);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1996;
jane['lastName'] = 'Tutu';
console.log(jane);

/************************
 * Objects and methods


var miha = {
	firstName: 'Miha',
	lastName: 'Tutu',
	birthYear: 1996,
	family: ['Crisa', 'Lili', 'Cristinel'],
	job: 'developer',
	isMarried: false,
	calculateAge: function(){
		this.age =  2019 - this.birthYear;
	}
};

console.log('Miha`s age: ' + miha.calculateAge());

// OR

miha.calculateAge();
console.log(miha);

/****************
 * Coding CHALLENGE
 * 
 * Let`s remember the first coding challenge where
 * Mark and John compared their BMIs. Let`s now implement the same functionality
 * with objects and methods.
 * 1. For each of them, create an object with
 * properties for their full name, mass and height.
 * 2. Then, add a method to each object and also return it from the method.
 * 3. In the end, log to the console the full name and the respective BMI.
 * Don`t forget they might have the same BMI.
 * 
 * BMI = mass / (height * height)
 * mass in kg
 * height in meters
 

 var mark = {
	fullName: 'Mark Miller',
	mass: 88,
	height: 1.80,
	calculateBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.bmi;
	}, 
 }

 var john = {
	 fullName: 'John Smith',
	 mass: 79,
	 height: 1.70,
	 calculateBMI: function(){
		 this.BMI = this.mass / (this.height * this.height);
		 return this.bmi;
		},
 }
mark.calculateBMI();
john.calculateBMI();
 
console.log(mark, john);

if(john.BMI > mark.BMI){
	console.log('John`s BMI is higher ' + john.BMI);
} else if(john.BMI < mark.BMI){
	console.log('Mark`s BMI is higher' + mark.BMI);
} else {
	console.log('There is a draw.\nThey have the same BMI ' + mark.BMI + john.BMI)
}

/*************************
 * Loops and iteration
 

 for(var i = 0; i < 10; i++){ 
	 console.log(i);
 }

 // i += 2 is the same as i = i + 2
 // i = 0, 0 < 10 true, log i to the console, i++
 // i = 1, 1 < 10 true, log i to the console, i++
 // ...
 // i = 9, 9 < 10 true, log i to the console, i++
 // i = 10, 10 < 10 false, exit the loop!

 var miha = ['Miha', 'Tutu', 1996, 'developer', false, 'blue'];
 console.log(miha[0]);
 console.log(miha[1]);
 console.log(miha[2]);
 console.log(miha[3]);
 console.log(miha[4]); 

 // but there is a way more elegant

 // for loop
 for(var i = 0; i < miha.length; i++){
	 console.log(miha[i]);
 }

 // while loop
var i = 0;
 while(i < miha.length){
	console.log(miha[i]);
	i++;
 }

 

// continue and break statements

// continue
var miha = ['Miha', 'Smith', 1996, 'developer', false, 'blue'];
for(var i = 0; i < miha.length; i++){
	if(typeof miha[i] !== 'string') {
		continue;
	}
	console.log(miha[i]);
}

// break
var miha = ['Miha', 'Smith', 1996, 'developer', false, 'blue'];
for(var i = 0; i < miha.length; i++){
	if(typeof miha[i] !== 'string') {
		break;
	}
	console.log(miha[i]);
}

// Looping backwards
var miha = ['Miha', 'Smith', 1996, 'developer', false, 'blue'];
for(i = miha.length - 1; i >= 0; i--){
	console.log(miha[i]);
}

/*************************
 * Coding challenge
 * 
 * Let`s create a more advanced version of the tip calculator
 * using everything we learned! 
 * 
 * This time, John and his family went to 5 different restaurants.
 * The bills were $124, $48, $268, $180 and $42. 
 * John likes to tip 20% of the bill when the bill is less than $50,
 * 15% when the bill is between $50 and $200, and 10% if the bill is more 
 * than $200.
 *
 * Implement a tip calculator using objects and loops:
 * 1. Create an object with an array for the bill values
 * 2. Add a method to calculate the tip
 * 3. This method should include a loop to iterate over all 
 * the paid bills and do the tip calculations
 * 4. As an output, create:
 * a) a new array containing all tipss
 * b) an array containing final paid amounts (bill + tip).
 * HINT: Start with 2 empty arrays [] as properties and then fill 
 * them up in the loop.
 * 
 * EXTRA AFTER FINISHING: Mark`s family also went on a holiday, 
 * going to 4 different restaurants. The bills were $77, $375,
 * $110 and $45.
 * Mark likes to tip 20% of the bill when the bill is
 * less than $100, 10% when the bill is between $100 and $300
 * and 25% if the bill is more than $300.
 * (different than John)
 * 
 * 5. Implement the same functionality as before, this time using
 * Mark`s tipping rules.
 * 6. Create a function (not a method) to calculate the average
 * of a given array of tips.
 * HINT: Loop over the array, and in each iteration store the current
 * sum in a variable (starting from 0). After you have the sum
 * of the array, divide it by the number of elements in it 
 * (that`s how you calculate the average)
 * 7. Calculate the average tip for each family.
 * 8. Log to the console which family paid the highest tips on average. 
 * 
 */

var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	
	calculateTip: function(bills){
	  this.tips = [];
	  this.billsAndTips = [];
	  for(var i = 0; i < this.bills.length; i++){
		  // determine percentage based on tipping rules
		  var percentage;
		  var bill = this.bills[i];
		  if(bill < 50){
			  percentage = 0.2;
		  } else if(bill >= 50 && bill <= 150){
			  percentage = 0.15;
		  } else {
			  percentage = 0.1
		  }

		  // Add results to the corresponding arrays
		  this.tips[i] = bill * percentage;
		  this.billsAndTips[i] = bill + this.tips[i];
		  //this.billsAndTips[i] = bill + bill * percentage;
	  }
	}
}

john.calculateTip();
console.log(john);

var mark = {
	fullName: 'Mark Miller',
	bills: [77, 375, 110, 45],
	
	
	calculateTip: function(bills){
	  this.tips = [];
	  this.billsAndTips = [];
	  for(var i = 0; i < this.bills.length; i++){
		  // determine percentage based on tipping rules
		  var percentage;
		  var bill = this.bills[i];
		  if(bill < 100){
			  percentage = 0.2;
		  } else if(bill >= 100 && bill <= 300){
			  percentage = 0.1;
		  } else {
			  percentage = 0.25;
		  }

		  // Add results to the corresponding arrays
		  this.tips[i] = bill * percentage;
		  this.billsAndTips[i] = bill + this.tips[i];
		  //this.billsAndTips[i] = bill + bill * percentage;
	  }
	}
}

mark.calculateTip();
console.log(mark);

function average(bills){
	var sum = 0;
	for (var i = 0; i < bills.length; i++){
		sum += bills[i];
	}
	return sum / bills.length;
}

mark.average = average(mark.billsAndTips);
john.average = average(john.billsAndTips); 

console.log('Average Smith: ' + john.average);
console.log('Average Miller: ' + mark.average);

if(mark.average > john.average){
	console.log('Miller paid more: ' + mark.average);
} else {
	console.log('Smith paid more: ' + john.average);
}

console.log(mark, john);
