/**
 * Created by Milenca Ventura on 3/6/2015.
 */
//This is a commit
/*
*comensy
* */
var age= function  ()
{
    var name= window.prompt("your name?");
    var age= window.prompt("your age?");
    if (age <= 50) {
        console.log('Hey'+name+'You are lucky... stil young.');
    } else {
        console.log('Hey'+name+'You are old person!.');
    };
};
age();
company="Jalasoft";
var counter=78;
counter="this is a counter";

Person=function (name, age){
    this.name=name;
    this.age=age;
    //this.sayhrloo("dffd");
};

pepe=new Person('Pepe',13);

//var age='';
function calculateAgeq(bornYear)
{
    console.log(arguments);
    var age=2014-bornYear;
    return age;
};
calculateAgeq();
var age='';
function calculateAge(bornyear){
    age=2014-bornyear;
    return age;
}
calculateAge();



