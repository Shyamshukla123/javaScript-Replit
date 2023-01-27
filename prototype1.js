function Student(id, name, club) {
        this.id = id;
        this.name = name;
        this.club = club;

}

Student.prototype.printDetails = function() {
        console.log(this.id, this.name, this.club);
};
var obj1 = new Student(1, "Raj", "Cricket");
var obj2 = new Student(2, "Rohan", "Dance");
var obj3 = new Student(3, "Rita", "Basketbal");
var obj4 = new Student(4, "Reem", "Musi");
var arr = [];
arr[0] = obj1;
arr[1] = obj2;
arr[2] = obj3;
arr[3] = obj4;
for (var i = 0; i < 4; i++) {
        arr[i].printDetails();
}