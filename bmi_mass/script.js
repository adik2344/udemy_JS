

var massMark = prompt ('Enter mass of Mark in kg');
var massJohn = prompt ('Enter mass of John in kg');

var heightMark = prompt ('Enter mass of Mark in m');
var heightJohn = prompt ('Enter mass of John in m');

console.log('mass of Mark ' +  massMark );
console.log('mass of John ' +  massJohn );

console.log('height of Mark ' +  heightMark );
console.log('height of John ' +  heightJohn );

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log('Mark has BMI - ' + bmiMark);
console.log('John has BMI - ' + bmiJohn);

if (bmiJohn > bmiMark){
    alert('Jonh has bmi more than Mark');
}else{

    alert('Mark has bmi more than John');
}
