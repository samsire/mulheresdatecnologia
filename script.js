    const controls = document.querySelectorAll("control"");
    let currentTtem = 0;
    const items = document.querySelectorAll("item);
    const maxitems = items.length;

    controls.forEach((control) => {
        control.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left");
            console.log("control clicked");
    
            if (isLeft) {
              currentitem -= 1;
            } else {
              currentitem += 1;
            }
        
            if (currentitem >= maxItems) {
              currentItem = 0;
            }
        
            if (currentitem < 0) { 

                currentItem = maxItems - 1;
            }
            item.forEach(function (item) {
                return item.classList.remove("current-item");
            });
            item[currentItem].scrollIntoViwe({
                inline: "center",
                behavior: "smooth"
           
          });

          items[currentItem].classList.add("current-item");
        });
     });

