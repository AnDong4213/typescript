var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
/* let user = {
    firstName: 'zhao',
    lastName: 'andong'
} */
var user = new User('tang', 'yuan');
console.log(user);
console.log(greeter(user));
