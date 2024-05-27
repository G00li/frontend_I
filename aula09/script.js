const template = document.createElement('template');
template.innerHTML = `
    <style>
        /*Elements*/
        *{
            font-family: system-ui, sans-serif;
        }

        button{
            border: none;
            background-color: green; 
            padding: 10px 20px;
            cursor: pointer;

        }


        /*Classes*/
            .gallery{
                position: relative;
                display:flex;
                flex-direction: column;
                width: 500px; 
                height: 500px; 
                gap: 10px;
            }


        /*ID's*/
            #images-container{
                display: flex; 
                flex:1;
                background-color: red; 
            }

            #controls{
                display: flex;
                justify-content: space-between;
                background-color: blue; 
            }

            #play-pause{
                position:absolute;
                top: 10px;
                left: 10px;
            }

    </style>

    <div class="gallery">

        <div id = "images-container">  </div>
    
        <div id ="controls">
            <button id="previous">Previous</button>
            <button id="next">Next</button>
        </div>

        <button id="play-pause"> STOP </button>


    </div>
`;

const itemTemplate = document.createElement('template');
itemTemplate.innerHTML=`
    
<style>
    .item {
        width: 100%;
        height: 100%;
        background-image: url(https://media.istockphoto.com/id/134134047/pt/foto/surfista.jpg?s=612x612&w=0&k=20&c=LWPNI2D9muCaFyzs1NwwIFke5YsLS9KilVYcU7hrR3I=); 
        background-position: center;
        background-size: cover;
    }
</style>


<div class="item"> 
</div>


`;

class WebGallery extends HTMLElement {

    shadowRoot = null;
    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        const imageContainer = this.shadowRoot.querySelector("#images-container");
        const item = itemTemplate.content.cloneNode(true); 
        imageContainer.appendChild(item); 
        
        this.shadowRoot.querySelector("#previous").onclick = () => {
            console.log("previous clicked");
        }
        this.shadowRoot.querySelector("#next").onclick = () => {
            console.log("next clicked");
        }
        this.shadowRoot.querySelector("#play-pause").onclick = () => {
            console.log("play-pause clicked");
        }


    }
}
customElements.define('web-gallery', WebGallery);


window.onload = () => {

 }