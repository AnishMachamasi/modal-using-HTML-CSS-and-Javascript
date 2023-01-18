const viewBtn = document.querySelector(".view-modal"),
      popup = document.querySelector(".popup"),
      close = popup.querySelector(".close"),
      field = popup.querySelector(".field"),
      input = field.querySelector("input"),
      copy = field.querySelector("button");

viewBtn.onclick = ()=>{
  popup.classList.toggle("show");
  document.body.style.backgroundColor = "rgb(138, 51, 43)";
}
close.onclick = ()=>{
  viewBtn.click();
  document.body.style.backgroundColor = "#FF6F61";
}

copy.onclick = ()=>{
  input.select(); //select input value
  if(document.execCommand("copy")){ //if the selected text copy
    field.classList.add("active");
    copy.innerText = "Copied";
    setTimeout(()=>{
      window.getSelection().removeAllRanges(); //remove selection from document
      field.classList.remove("active");
      copy.innerText = "Copy";
    }, 3000);
  }
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeid")[0];