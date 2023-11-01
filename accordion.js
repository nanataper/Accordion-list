  <!--Accordion tab openening and closing function-->
  <script>
    let acc = document.getElementsByClassName("accordion");
  
  
    let i;
  
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                // accordionPlus.innerHTML = "&#43";
  
  
            } else {
                panel.style.display = "block";
                // accordionPlus.innerHTML = "&#8722";
  
  
            }
        });
    }
  
  </script>
