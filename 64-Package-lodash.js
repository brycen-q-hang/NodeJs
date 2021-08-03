var _ = require("lodash");

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
console.log(array);

var newResult = _.difference([2, 1], [2, 3]);
console.log(newResult);

//collection
var users = [
    {"user":"Hoa", "age":36, "active":true},
    {"user":"Mai", "age":40, "active":true},
    {"user":"Phuong", "age":20, "active":true}
]
//Chi tim kiem duoc 1 obj
var user = _.find(users, function (user) {
    return user.age < 40;
});

console.log("Find : ", user);

//Tim kiem duoc tat ca cac obj thoa man dieu kien
var user2 = _.filter(users, function(user) {
    return user.age < 40;
})

console.log("Filter : ", user2);