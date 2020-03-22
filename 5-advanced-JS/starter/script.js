// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}
var john = new Person('Brett', 1973, 'engineer');
*/


// object.create

var personProto = {
        calculateAge: function() {
            console.log(2020 - this.yearOfBirth);
        }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1973;
