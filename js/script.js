  let count = 0;
    const gap = 45;
    const flipElement = document.getElementById("flip");
    setInterval(function() {
      if (count == flipElement.children.length-1) count = 0;
      else count++;
      size = 0;
      for (let i = 0; i < count; i++) {
        size += flipElement.children[i].offsetHeight+gap;
      }
      flipElement.children[0].style.marginTop = `${-size}px`;
    }, 5000);