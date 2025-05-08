function clickBtn() {
    let lis = document.createElement("li");
    lis.innerText = inp.value;
    unli.appendChild(lis);
    inp.value = "";

    let delBtn = document.createElement("button");
    lis.append(delBtn);
    
    delBtn.innerText = "delete";
    delBtn.classList.add(".delBtn");

    delBtn.addEventListener("click", function () {
        delBtn.parentElement.remove();
    });

}
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let unli = document.querySelector("ul");

btn.addEventListener("click", clickBtn);
inp.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
       clickBtn();
    }
});




