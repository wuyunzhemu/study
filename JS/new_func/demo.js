//宅
function Otaku(name,age){
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}
Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function(){
  console.log('I AM ' + this.name);
}
var person = new Otaku('kevin','18');
console.log(person.name,person.habit,person.strenth);
person.sayYourName();