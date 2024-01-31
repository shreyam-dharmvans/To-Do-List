let ul =document.querySelector("ul");
let button= document.querySelector("button");
let input= document.querySelector("input");

button.addEventListener("click",function (){
      let li= document.createElement("li");
      let btn= document.createElement("button");
      btn.innerText="delete";
      btn.classList.add("del");
      li.innerText=input.value;

      li.append(btn);

      ul.appendChild(li);
      input.value="";
    }
);

// let btnDelete= document.querySelectorAll(".del");

// for(btnDel of btnDelete){
//   btnDel.addEventListener("click",function(){
//     let par= this.parentElement;
//     par.remove();
//   })
// }

ul.addEventListener("click",function(event){
      if(event.target.nodeName=="BUTTON"){
        let par= event.target.parentElement;
        par.remove();
      }
    });
