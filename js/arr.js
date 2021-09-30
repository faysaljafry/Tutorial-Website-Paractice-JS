function declareArray() {
    const cars = ["Saab", "Volvo", "BMW"]
    document.getElementById("oop").innerHTML = cars;
}
declareArray()
function createAndProvide() {
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";
    document.getElementById("create").innerHTML = cars;
}
createAndProvide()
function reverseArray() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    document.getElementById("revArray").innerHTML = fruits.reverse();
} reverseArray()

function numericSort() {
    const points = [40, 100, 1, 5, 25, 10];
    document.getElementById("numsort").innerHTML = points.sort(function (a, b) { return a - b });
} numericSort()