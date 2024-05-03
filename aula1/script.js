import TestA from "./TestA.js"
import TestB from "./TestB.js";


window.onload = () =>{

    // new TestA();
    // new TestB();


    let div = document.querySelector("#a");
    console.log(div)

    // let divB = document.getElementsByClassName("b")
    // console.log(divB);
    
    // let divb = document.getElementsByTagName("name")
    // console.log(divb);


    let button = document.querySelector("button");

    button.onclick = () => {
        // div.style.backgroundColor = "yellow";
    //    let frase = document.createElement("h1")
    //     frase.textContent = "Isso é a Div A com a cor amarela"
    //     div.appendChild(frase)
        div.style.backgroundImage= "url(https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg)"
        div.style.minWidth = "500px"

    

            // div.style.position = "absolute";
            // div.style.width = "100%";
            // div.style.height = "100%";
            // div.style.zIndex = 9999; 
            div.classList.toggle("clickable")
    
        // div.onmouseout = () => {
        //     div.style.position = "initial";
        //     div.style.width = "initial";
        //     div.style.height = "initial";

        // }

    }

}