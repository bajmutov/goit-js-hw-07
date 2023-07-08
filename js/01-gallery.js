
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const modalWindow = document.querySelector('.basicLightbox');
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

function onClick(evt) {
    evt.preventDefault();
    const {target} = evt;

    if (target.nodeName !== "IMG"){
        return;
    }

    let adressImg = target.src;
    adressImg = target.dataset.source;

    createModal(adressImg);
      }

function createModal (src){
        instance = basicLightbox.create(`
        <img width="1400" height="900" src="${src}">
    ` ,{
		onShow: (instance) => document.addEventListener('keyup', closeModal),
		onClose: (instance) => document.removeEventListener("keyup", closeModal)
	});
    instance.show();
        }

function closeModal(evt) {
    console.log(evt.code)
    
     if (evt.code === 'Escape' ) {
        instance.close();
                    }
 }




