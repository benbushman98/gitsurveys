let mode = "dark";

const toggleLightMode = async () => {
   console.log("check")
   let link = document.getElementById("css-light-switch");
   let nav = document.getElementById("nav");
   
    if (mode === "dark") {
       mode = "light";
       link.setAttribute("href", "/css/style-light.css");
       nav.setAttribute("class", "navbar fixed-top navbar-expand-lg bg-yellow");
    }
    else {
        mode = "dark";
        link.setAttribute("href", "/css/style.css");
    }
};

const toggleBtn = document.getElementById('toggle');
toggleBtn.addEventListener('click', toggleLightMode);


  
