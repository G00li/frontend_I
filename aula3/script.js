window.onload = () =>{


    const canvas = document.querySelector('canvas'); 
    const ctx = canvas.getContext("2d");
 
    let animID = null;
    const button = document.querySelector("button");


    const stop = () =>{
        if(animID){
            cancelAnimationFrame(animID);
            animID = null;
        }
    }
        

    button.onclick = () =>{
        if(animID){
            cancelAnimationFrame(animID);
            animID = null;
            button.innerText = "Start"
        }
        else{
            draw();
            button.innerText = "Stop"; 
        }
    }

    const width = canvas.width
    const height = canvas.height



    // console.log(width, height);


    // const colors = ["green", "yellow", "blue", "red", "pink", "orange", "brown", "black", "white", "gray"];

    // const blockWidth = width /colors.length;


    // for(let i = 0; i < colors.length; i++){
    //     ctx.fillStyle= colors[i];
    //     ctx.fillRect(blockWidth*i, 0, blockWidth, height);
    // }


    const vector = {
        x: 0, 
        y: 0
    }

    const draw = () =>{

        ctx.clearRect(0,0, width, height)
        ctx.beginPath()
        ctx.lineWidth=5
        ctx.strokeStyle = "black"
        ctx.moveTo(0,0);
        ctx.lineTo(vector.x,vector.y)
        ctx.stroke()
       


        animID = requestAnimationFrame(draw)

        vector.x +=1;
        vector.y+=1;
    }

    draw(); 

    // ctx.strokeStyle="blue";
    // ctx.lineWidth=5 // espessura da linha
    // ctx.beginPath() //inicializando a caneta
    // ctx.lineTo(100,150)
    // ctx.bezierCurveTo(200,200,300,200,400,150) //Curva 
    // ctx.stroke() //Linha
    // // ctx.fill() //Enchimento 
  

}