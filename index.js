const list = document.querySelectorAll(".list");
console.log(list);

function activLink(){
    // console.log("clicked");
    list.forEach((item) =>
     item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) => 
item.addEventListener("click", activLink))