const template = document.createElement('template');
template.innerHTML = `
    <style>

        /*ELEMENTS*/
        * {
            font-family: system-ui, sans-serif;
        }
        button {
            border: none;
            background-color: green;
            padding: 10px 20px;
            cursor: pointer;
        }

        /*CLASSES*/
        .gallery {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 500px;
            height: 500px;
            gap: 10px;
        }

        /*IDS*/
        #images-container {
            position: relative;
            display: flex;
            flex: 1;
            background-color: red;
        }
        #controls {
            display: flex;
            justify-content: space-between;
            background-color: blue;
        }
        #play-pause {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    </style>
    <div class="gallery">

        <div id="images-container"></div>

        <div id="controls">
            <button id="previous">Previous</button>
            <button id="next">Next</button>
        </div>

        <button id="play-pause">STOP</button>
        
    </div>
`;
const itemTemplate = document.createElement('template');
itemTemplate.innerHTML = `
        <style>
            .item {
                position: absolute; 
                inset: 0;
                opacity: 0; 
                tansition: opacity 0.8s; 
                background-position: center;
                background-size: cover;

            }
        </style>
        <div class="item"></div>
`
class WebGallery extends HTMLElement {

    static observedAttributes = ['data-url', 'current-item'];

    shadowRoot = null;
    #galleryData = null;
    #imagesContainer = null;
    #intervalID= null; 
    #items = []; 
    #currentItemIndex = 0; 

    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

        this.#imagesContainer = this.shadowRoot.querySelector('#images-container');
        console.log(this.#imagesContainer);

        this.shadowRoot.querySelector('#previous').onclick = () => {
            console.log('previous clicked');
        }

        this.shadowRoot.querySelector('#next').onclick = () => {
            console.log('next clicked');
        }

        this.shadowRoot.querySelector('#play-pause').onclick = () => {
            console.log('play pause clicked');
        }
    }


    async attributeChangedCallback (attrName, oldVal, newVal) {


        switch (attrName) {
            case 'data-url':
                const req = await fetch (this.getAttribute('data-url')); 
                this.#galleryData = await req.json(); //Gallery data recebe o Json e salva-o 
                this.#render();
                break;

            case 'current-item':
                this.#currentItemIndex = newVal; 
                break; 
        
            default:
                break;
        }
    }

    // PRIVATE
    #render(){ //Função de renderizar as images, buscando pelo json 


        this.#items = []; 

        this.#galleryData.forEach((item, index) => {
            const clone = itemTemplate.content.cloneNode(true); //Faz o clone do ItemTemplate que é onde o design da imagem está
            const element = clone.querySelector(".item"); //Busca o style do clone para que possamos alterar a imagem de fundo

            if(index === this.#currentItemIndex){
                element.style.opacity=1;
            }
            this.#items.push(element); 
            element.style.backgroundImage = `url(${item.imageUrl})`;

            this.#imagesContainer.appendChild(clone);
        });

        this.#playPause();
    }


    #playPause (){

        if(this.#intervalID !== null){ //Limpando o intervalo, caso seja 0; 
            clearInterval(this.#intervalID); 
            this.#intervalID = null; 
        }

        else {
            
            this.#intervalID = setInterval(() => {
                console.log(this.#items[this.#currentItemIndex]);

                if(this.#currentItemIndex >= this.#items.lenght) this.#currentItemIndex = 0; 

                this.#items[this.#currentItemIndex].style.opacity=0;
                this.#currentItemIndex++;
                this.#items[this.#currentItemIndex].style.opacity=1;

            }, 2000);
        }
    }



    // SETTERS GETTERS 

    get dataURL() {
        return this.getAttribute('data-url')
    }
    set dataURL(value){ //Criando uma função de set URL que é chamada no script.js 
        //Insere o atributo (valor) dentro do data-url, Esse valor vem do attributeChangedCallback. Que é o valor que o DOM recebe quando o json é alterado 
        this.setAttribute('data-url', value);
        
    }
    
    get currentItem() {
        return this.getAttribute('current-index')
    }
    set currentItem(value){ //Criando uma função de set URL que é chamada no script.js 
        //Insere o atributo (valor) dentro do data-url, Esse valor vem do attributeChangedCallback. Que é o valor que o DOM recebe quando o json é alterado 
        this.setAttribute('current-index', value);
        
    }


}
customElements.define('web-gallery', WebGallery);
