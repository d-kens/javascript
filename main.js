const PI = 3.14159
let radius;
let circumfrence;

document.getElementById("mySubmit").onclick = function() {
    radius = Number(document.getElementById("myText").value);
    console.log(typeof radius)
    circumfrence = 2 * PI * radius;

    document.getElementById("myH1").textContent = `The circumference of the circle is ${circumfrence}`
}