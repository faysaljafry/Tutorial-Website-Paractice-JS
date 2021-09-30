function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph Changed by a call from an externel script."
}


function mystring() {
    let carName1 = "Honda City";
    let carName2 = "Toyota Corolla";
    document.getElementById("demo").innerHTML = `<h5 class = "text-danger">${carName1}</h5>` + " " + `<h5 class = "text-success">${carName2}</h5>`;
}
mystring()

function quotesInsideString() {
    let answer1 = "It's alright";
    let answer2 = "He is called 'Johnny'";
    let answer3 = 'He is called "Johnny"';
    document.getElementById("demo2").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}
quotesInsideString()

function slicing() {
    let str = "Apple, Banana, Kiwi";

    document.getElementById("strslice").innerHTML = str.slice(7, 13);
}
slicing()
function substring() {
    let str = "Apple, Banana, Kiwi";
    document.getElementById("sbstr").innerHTML = str.substr(7)
}
substring()

function stringreplace() {
    let text = "Please Visit Microsoft.";
    newText = text.replace("Microsoft", "My Profile")
    document.getElementById("strReplace").innerHTML = newText
} stringreplace()
