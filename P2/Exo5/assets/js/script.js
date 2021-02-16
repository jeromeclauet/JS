function changeImage(image) {
    image.src = image.src.replace(".jpg", "_2.jpg");
}

function changeImages(image) {
    image.src = image.src.replace("_2.jpg", ".jpg");
}