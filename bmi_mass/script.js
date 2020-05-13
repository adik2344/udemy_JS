
/* --------------------------------------------------------------
/* 
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
 */

/* --------------------------------------------------------------
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team
 scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the 
console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might
 be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log 
the average winner to the console. HINT: you will need the && operator to take the decision. If you
can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/* 
var John = (101 + 120 + 103) / 3;
var Mike = (110 + 90 + 123) / 3;
var Mary = (90 + 134 + 98) / 3;

if ( John > Mike && John > Mary){
    console.log('Jhon\'s team is best with av. score ' + John);
    console.log('Mike - ' + Mike + '\nMary - ' + Mary);
    }else if (Mike > John && Mike > Mary){
    console.log('Mike\'s team is best with av. score ' + Mike);
    console.log('John - ' + John + '\nMary - ' + Mary);
    }else if(Mary > John && Mary > Mike){
    console.log('Mary\'s team is best with av. score ' + Mary);
    console.log('Mike - ' + Mike + '\nJohn - ' + John);
    }else if (Mary == John){
    console.log('It\'s draw between\n ' + 'Mary - ' + Mary + 
    '\nJohn - ' + John);
    }else if (Mary == Mike){
    console.log('It\'s draw between\n ' + 'Mary - ' + Mary + 
    '\nMike - ' + Mike);
    }else if(John == Mike){
    console.log('It\'s draw between\n ' + 'John - ' + John + 
    '\nMike - ' + Mike);
    }else {
    console.log('It\'s draw between all teams\n ' + 'Mary - ' + Mary + 
    '\nMike - ' + Mike + '\nJohn - ' + John);
}
 */
/* -------------------------------------------------------------- */

/*
John and his family went on a holiday and went to 3 different 
restaurants. The bills were $124, $48 and $268.


To tip the waiter a fair amount, John created a simple tip 
calculator (as a function). He likes to tip 20% of the bill when the
 bill is less than $50, 15% when the bill is between $50 and $200, 
 and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/* 
var billArr = [124,48,268];
var tipArr =[0.2,.15,.1];

var tip;

function tipCalc(tip) {

    var 
    switch (tip) {
        case tip > 50:
            
            break;
    
        default:
            break;
    }

}




for (var i=0; i<billArr.length; i++){
    switch (billArr) {
        case billArr[i] < 50 :
        tipArr[i] = billArr[i] * 0.2;
        console.log(tipArr);
        console.log(billArr[i]);
        break;
        case billArr[i] < 200 :
        tipArr[i] = billArr[i] * 0.15;
        console.log(tipArr);
        console.log(billArr[i]);
        break;
        case billArr[i] > 200 :
        tipArr[i] = billArr[i] * 0.1;
        console.log(billArr[i]);
        break;
        default:
            break;
    } 
    
var calcTip = function(billArr,tipArr) {
    
    
} 
} 
console.log(calcTip(0,0));
console.log(tipArr); */
/* -------------------------------------------------------------- */
/* 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 70,
    height: 1.78,
    indexbmi: function () {
          return  this.mass / (this.height * this.height);   
    }
}
var mark = {
    firstName: 'Mark',
    lastName: 'Green',
    mass: 65,
    height: 1.8,
    indexbmi: function () {
           return this.mass / (this.height * this.height);   
    }
}
john.indexbmi();
mark.indexbmi();
console.log(john.firstName +' ' + john.lastName + ' has BMI - ' + john.indexbmi());
console.log(mark.firstName +' ' + mark.lastName + ' has BMI - ' + mark.indexbmi());
if (john.indexbmi() > mark.indexbmi()){
    console.log('Jonh has bmi more than Mark');
}else if(john.indexbmi() < mark.indexbmi()){

    console.log('Mark has bmi more than John');
}else {console.log('Bmi is draw');}
 */
/* -------------------------------------------------------------- */

