/* This is what we create any object in Js
- This is the way we use inheritance, but for now, some kind of method below
-
-
-
-
-

/
var Person = {
    name:"Diego"
    yearofBirth()
}


var diego ={
    name:'Jonh',
    yearofBirth: 1982,
    job:'Quality employe',

}

var Person = function(name, yearofBirth, job){
    this.name = name,
    this.yearofBirth = yearofBirth,
    this.job = job
    /*this.calculateAge = function(){
        console.log(2023 - yearofBirth)
    
}

//prototype

Person.prototype.calculateAge = 
function(){
    console.log(2023 - this.yearofBirth)
};

Person.prototype.lastName = 'Silva'



var luffy = new Person('luffy', 1888, 'Quality employe')

var vampeta = new Person('vampeta',1972,'cargo-employe')
var gagarin = new Person('Gagarin', 1937,'No work')
var sergio = new Person('Sergio', 1978, 'Comissary')

diego.calculateAge()//this is the callback use to call inside the webpage
thiago.calculateAge()
sergio.calculateAge()

console.log(sergio.lastName)
console.log(luffy.lastName)
console.log(vampeta.lastName)

*/

// Object.create


//This is the prototype which will be inherit by others objects using the method object.create below 

var personProto = {
    calculateAge: function(){
    console.log(2023 - yearOfbirth);
    
}
}

// First way to create an exemple of inherit object using proto

var paulo = Object.create(personProto)

//below is how to use the name of the var to assign news properties inside of the object;

paulo.name = 'Paulo';
paulo.yearOfbirth = '1977';
paulo.job = 'Auditor';

// the other way too create an object with Object.create is
// In that situation we can use the strange way to assign values using thins sintax below
// Exemple: name:{value:.....},
//__________job: {value:.....},


var sergio = Object.create(personProto, {
    
    name: {value: 'Sergio'},
    job: {value: 'Comissary'},
    yearOfbirth: {value: 1977}
})