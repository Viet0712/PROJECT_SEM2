const gallery_container = document.querySelector('.gallery_container');

const gallery_item = document.querySelectorAll('.gallery_item');

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery_item_1');
            el.classList.remove('gallery_item_2');
            el.classList.remove('gallery_item_3');
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`gallery_item_${3 - i}`);
        });
    }

    setCurrentState(direction) {
        const gallery_control_next = document.querySelector('.next');
        const gallery_control_previous = document.querySelector('.previous');

        if (direction === gallery_control_next) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {

            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
    }

    useControls() {
        const gallery_control_next = document.querySelector('.next');
        const gallery_control_previous = document.querySelector('.previous');

        gallery_control_next.addEventListener('click', (event) => {
            event.preventDefault();
            this.setCurrentState(gallery_control_next);
            checkGalleryItem1Visibility_next();

        });

        gallery_control_previous.addEventListener('click', (event) => {
            event.preventDefault();
            this.setCurrentState(gallery_control_previous);
            checkGalleryItem1Visibility_previous();

        });
    }
}

const run = new Carousel(gallery_container, gallery_item);
run.setCurrentState();
run.useControls();



const revuelto = document.querySelector('#revuelto');
const hurucan = document.querySelector('#hurucan');
const urus = document.querySelector('#urus');


function checkGalleryItem1Visibility_next() {
    const isVisible_revuelto = revuelto.offsetWidth > window.innerWidth * 0.5; // kiem tra do rong cua cac id co hơn 50% man hinh hay khon
    const isVisible_hurucan = hurucan.offsetWidth > window.innerWidth * 0.5;
    const isVisible_urus = urus.offsetWidth > window.innerWidth * 0.5;
    const models_infor_gallery = document.querySelector('#models-infor');

    // sau khi models nao xuat hien xong thì sẽ thêm thông tin của models tiep theo , vì hình và thông tin chạy lệch pha

    if (isVisible_hurucan) {
        console.log('hurucan');
        models_infor_gallery.innerHTML = "<h1>REVUELTO</h1><p>FROM NOW ON</p>";
        const Model_info = document.querySelector('.Model-info');
        const Confingurator = document.querySelector('.Confingurator');
        const explore_detail_content_text = document.querySelector('.explore_detail_content_text');
        explore_detail_content_text.innerHTML = "<p>EXPLORE</p>REVUELTO";
        Model_info.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i> Model info</a>";

        Confingurator.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i>Confingurator</a>"
        return;
    }
    if (isVisible_urus) {
        console.log('urus');

        models_infor_gallery.innerHTML = "<h1>HURACÁN</h1><p>BEYOND THE CONCRETE</p>";
        const Model_info = document.querySelector('.Model-info');
        const Confingurator = document.querySelector('.Confingurator');
        const explore_detail_content_text = document.querySelector('.explore_detail_content_text');
        explore_detail_content_text.innerHTML = "<p>EXPLORE</p>HURACÁN STERRATO";
        Model_info.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i> Model info</a>";

        Confingurator.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i>Confingurator</a>"
        return;
    }
    if (isVisible_revuelto) {
        console.log('REVUELTO');
        models_infor_gallery.innerHTML = "<h1>URUS</h1><p>UNLOCK ANY ROAD</p>";
        const Model_info = document.querySelector('.Model-info');
        const Confingurator = document.querySelector('.Confingurator');
        const explore_detail_content_text = document.querySelector('.explore_detail_content_text');
        explore_detail_content_text.innerHTML = "<p>EXPLORE</p>URUS S";
        Model_info.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i> Model info</a>";

        Confingurator.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i>Confingurator</a>"
        return;
    }
}

function checkGalleryItem1Visibility_previous() {
    const isVisible_revuelto = revuelto.offsetWidth > window.innerWidth * 0.5;
    const isVisible_hurucan = hurucan.offsetWidth > window.innerWidth * 0.5;
    const isVisible_urus = urus.offsetWidth > window.innerWidth * 0.5;
    const models_infor_gallery = document.querySelector('#models-infor');


    if (isVisible_revuelto) {
        console.log('urus');

        models_infor_gallery.innerHTML = "<h1>HURACÁN</h1><p>BEYOND THE CONCRETE</p>";
        const Model_info = document.querySelector('.Model-info');
        const Confingurator = document.querySelector('.Confingurator');
        const explore_detail_content_text = document.querySelector('.explore_detail_content_text');
        explore_detail_content_text.innerHTML = "<p>EXPLORE</p>HURACÁN STERRATO";
        Model_info.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i> Model info</a>";

        Confingurator.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i>Confingurator</a>"

        return;
    }
    if (isVisible_hurucan) {
        console.log('REVUELTO');

        models_infor_gallery.innerHTML = "<h1>URUS</h1><p>UNLOCK ANY ROAD</p>";
        const Model_info = document.querySelector('.Model-info');
        const Confingurator = document.querySelector('.Confingurator');
        const explore_detail_content_text = document.querySelector('.explore_detail_content_text');
        explore_detail_content_text.innerHTML = "<p>EXPLORE</p>URUS S";
        Model_info.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i> Model info</a>";

        Confingurator.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i>Confingurator</a>"

        return;
    }
    if (isVisible_urus) {
        console.log('hurucan');
        models_infor_gallery.innerHTML = "<h1>REVUELTO</h1><p>FROM NOW ON</p>";
        const Model_info = document.querySelector('.Model-info');
        const Confingurator = document.querySelector('.Confingurator');
        const explore_detail_content_text = document.querySelector('.explore_detail_content_text');
        explore_detail_content_text.innerHTML = "<p>EXPLORE</p>REVUELTO";
        Model_info.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i> Model info</a>";

        Confingurator.innerHTML = "<a id=\"Model-info\" href=\"#\"><i class=\"far fa-arrow-alt-circle-right forward\"></i>Confingurator</a>"


        return;
    }
}


