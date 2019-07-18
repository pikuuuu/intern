// Get the modal
var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

let years = numberGenerator(1905, 2019);
let days = numberGenerator(1, 30);
let months = numberGenerator(1, 12);

for (let i = 0; i < years.length; i++) {
    let option = document.createElement('option');
    option.innerHTML = years[i];
    option.value = years[i];

    year.appendChild(option);
}

for (let j = 0; j < months.length; j++) {
    let option = document.createElement('option');
    option.innerHTML = months[j];
    option.value = months[j];

    month.appendChild(option);
}

for (let k = 0; k < days.length; k++) {
    let option = document.createElement('option');
    option.innerHTML = days[k];
    option.value = days[k];

    day.appendChild(option);
}

function numberGenerator(from, to) {
    let arr = [];
    for (let y = from; y <= to; y++) {
        arr.push(y);
    }
    return arr;
}