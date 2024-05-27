window.onload = () => {
    const webGallery = document.querySelector("web-gallery"); 
    console.log(webGallery);

    webGallery.dataURL = "gallery_data.json"; //chama a função dataURL que é criada em webComponents na Classe WebGallery 
}
