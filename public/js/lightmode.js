const toggleLightMode = async () => {
   console.log("check")
   const link = document.getElementById("css-light-switch");
   link.setAttribute("href", "/css/style-light.css");
  };

const toggleBtn = document.getElementById('toggle');
toggleBtn.addEventListener('click', toggleLightMode);


  
