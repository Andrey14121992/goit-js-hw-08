// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galaryDiv = document.querySelector('.gallery');

const createGalery = collection => {
    collection.map(({ preview, original, description }) => {
        const markingElement = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
        galaryDiv.insertAdjacentHTML('afterbegin', markingElement);
    })
}

createGalery(galleryItems)


const onImgClick = event => {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});
}
galaryDiv.addEventListener('click', onImgClick);