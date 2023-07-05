# goit-js-hw-07

import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);
let instance = '';

function createGalleryMarkup (images) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
`
    })
    .join("");
}

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onClick);
document.addEventListener('keyup', closeModal);

function onClick(evt) {
    evt.preventDefault();
    const {target} = evt;

    if (!evt.target.classList.contains('gallery__image')){
        return;
    }

    let adressImg = target.src;
    adressImg = target.dataset.source;

    createModal(adressImg);
      }

function createModal (src){
        instance = basicLightbox.create(`
        <img width="1400" height="900" src="${src}">
    `);
    instance.show();
    }

function closeModal (evt) {
    console.log(evt.code)
            if (instance && evt.code === 'Escape' ) {
        instance.close();
                       }
                   }




