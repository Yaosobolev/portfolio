let images = document.getElementsByClassName("view-image");
let viewer = document.getElementById("image-viewer");
let viewerImage = document.getElementById("image-viewer__image");

for (let i = 0; i < images.length; i++) {
    let element = images[i];
    element.addEventListener("click", (event) => {
        viewerImage.src = element.src;
        viewerImage.alt = element.alt;
        viewer.classList.add("showed");
    });
}

viewer.addEventListener("click", (event) => {
    viewer.classList.remove("showed");
    viewerImage.src = "";
    viewerImage .alt = "";
});