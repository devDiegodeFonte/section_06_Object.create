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
