//WORKING ON THIS

function resultsHandler (event) {
    event.preventDefault();
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");
    let result3 = document.getElementById("result3");
    let result4 = document.getElementById("result4");
   
    if (result1.checked == true)
        alert("Option selected: " + result1.value);
        //add to results table... maybe 
    else if (result2.checked == true)
        alert("Option selected: " + result2.value);
    else if (result3.checked == true)
        alert("Option selected: " + result3.value);
    else if (result4.checked == true)
        alert("Option selected: " + result4.value);
    else 
        alert("No option selected.")
}

const resultsBtn = document.getElementById('#submit');
resultsBtn.addEventListener('click', resultsHandler);