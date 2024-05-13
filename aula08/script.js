
// Com Classes

// class WordCounter {
//     #view;
    
//     constructor(){
//         this.#view = document.querySelector(".word-counter"); 
//         console.log(this.#view)
//     }

//     get numwords(){
//         return this.innerText.split(" ").length;
//     }

//     set innerText(text){
//         this.#view.querySelector("p").innerText = text;
//     }
//     get innerText(){
//         return this.#view.querySelector("p").innerText;
//     }
// }


// Com Web Component 

class WordCounter extends HTMLElement{


    constructor(){
        super(); 
        console.log();
    }

    static get oberservedAttribute (){
        return ['class']
    }

    createElement(element,text) {

        const elemento = document.createElement(element);
        elemento.textContent = text
        this.appendChild(elemento);
    }


    createAudio(url) {

        const audio = document.createElement("audio");
        audio.src=url;
        audio.controls=true; 
        this.appendChild(audio)
    }

    get numwords(){
        return this.querySelector("p").innerText.split(/\s+/g).length; 
    }

    connectedCallback() {

        console.log("Custom element added to page.");
    }
    
    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }
    
    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }


}
customElements.define('word-counter', WordCounter); //Dizendo ao nosso HTML que é um elemento customizado



window.onload = () =>{

    const wordCounter = document.querySelector("word-counter");




    // const wordCounter = new WordCounter();
    // console.log(wordCounter.numwords);

    // wordCounter.innerText = " Hello World."
    // wordCounter.innerHTML = "<p> Hello World </p>"
    console.log(wordCounter.numwords);

    const p = wordCounter.querySelector("p")
    console.log(p);

    wordCounter.createElement("p", "Hello World"); 
    wordCounter.createAudio("https://file-examples.com/storage/fe92070d83663e82d92ecf7/2017/11/file_example_MP3_700KB.mp3"); 

    // document.body.removeChild(document.querySelector("word-counter"))

    wordCounter.setAttribute("class", "New-class-name")
    // console.log(wordCounter.numwords);
}