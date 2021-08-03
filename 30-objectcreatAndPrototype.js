var person = {
    firstName: "",
    lastName: "",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var hoa = Object.create(person);
hoa.firstName = "Hoa";
hoa.lastName = "Mai";

var yen = Object.create(person);
yen.firstName = "Yen";
yen.lastName = "Phuong";

console.log(hoa.getFullName());
console.log(yen.getFullName());