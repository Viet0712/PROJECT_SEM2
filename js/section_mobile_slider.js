const gallery_container_mobile = document.querySelector('.gallery_container_mobile');

const gallery_item_mobile = document.querySelectorAll('.gallery_item_mobile');

const revuelto_slider = document.querySelector('#revuelto_slider');
const huracan_slider = document.querySelector('#huracan_slider');
const urus_slider = document.querySelector('#urus_slider');


function checkGalleryItem1Visibility_slider_next() {
    const isVisible_revuelto = revuelto_slider.offsetWidth > window.innerWidth * 0.95; // kiem tra do rong cua cac id co hơn 50% man hinh hay khon
    const isVisible_hurucan = huracan_slider.offsetWidth > window.innerWidth * 0.95;
    const isVisible_urus = urus_slider.offsetWidth > window.innerWidth * 0.95;
    const models_mobile_content = document.querySelector('.models_mobile_content');


    // sau khi models nao xuat hien xong thì sẽ thêm thông tin của models tiep theo , vì hình và thông tin chạy lệch pha

    if (isVisible_hurucan) {

        models_mobile_content.innerHTML = "<h1>URUS</h1><p>UNLOCK ANY ROAD</p><div class=\"explore_mobile\"><a href=\"\">EXPLORE THE MODELS</a></div><div class=\"Confingurator_mobile\"><a href=\"\">OPEN CAR CONFIGURATION</a></div>"

        return;
    }
    if (isVisible_urus) {

        models_mobile_content.innerHTML = "<h1>REVUELTO</h1><p>FROM NOW ON</p><div class=\"explore_mobile\"><a href=\"\">EXPLORE THE MODEL</a></div><div class=\"Confingurator_mobile\"><a href=\"\">OPEN CAR CONFIGURATION</a></div>"



        return;
    }
    if (isVisible_revuelto) {

        models_mobile_content.innerHTML = "<h1>HURACÁN</h1><p>BEYOND THE CONCRETE</p><div class=\"explore_mobile\"><a href=\"\">EXPLORE THE MODELS</a></div><div class=\"Confingurator_mobile\"><a href=\"\">OPEN CAR CONFIGURATION</a></div>"

        return;
    }
}
function checkGalleryItem1Visibility_slider_previous() {
    const isVisible_revuelto = revuelto_slider.offsetWidth > window.innerWidth * 0.95; // kiem tra do rong cua cac id co hơn 50% man hinh hay khon
    const isVisible_hurucan = huracan_slider.offsetWidth > window.innerWidth * 0.95;
    const isVisible_urus = urus_slider.offsetWidth > window.innerWidth * 0.95;
    const models_mobile_content = document.querySelector('.models_mobile_content');

    // sau khi models nao xuat hien xong thì sẽ thêm thông tin của models tiep theo , vì hình và thông tin chạy lệch pha

    if (isVisible_hurucan) {
        models_mobile_content.innerHTML = "<h1>REVUELTO</h1><p>FROM NOW ON</p><div class=\"explore_mobile\"><a href=\"\">EXPLORE THE MODEL</a></div><div class=\"Confingurator_mobile\"><a href=\"\">OPEN CAR CONFIGURATION</a></div>"


        return;
    }
    if (isVisible_urus) {

        models_mobile_content.innerHTML = "<h1>HURACÁN</h1><p>BEYOND THE CONCRETE</p><div class=\"explore_mobile\"><a href=\"\">EXPLORE THE MODELS</a></div><div class=\"Confingurator_mobile\"><a href=\"\">OPEN CAR CONFIGURATION</a></div>"


        return;
    }
    if (isVisible_revuelto) {
        models_mobile_content.innerHTML = "<h1>URUS</h1><p>UNLOCK ANY ROAD</p><div class=\"explore_mobile\"><a href=\"\">EXPLORE THE MODELS</a></div><div class=\"Confingurator_mobile\"><a href=\"\">OPEN CAR CONFIGURATION</a></div>"

        return;
    }
}


class Carousel_mobile {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];

    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery_item_mobile_1');
            el.classList.remove('gallery_item_mobile_2');
            el.classList.remove('gallery_item_mobile_3');
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`gallery_item_mobile_${3 - i}`);
        });
    }
    setCurrentState(direction) {


        if (direction === "next") {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {

            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
    }


    useControls() {
        let that = this; // Lưu trữ tham chiếu đến đối tượng Carousel_mobile
        let startX;
        let gallery_control = "";
        let currentX, deltaX;
        function handleTouchStart(event) {
            startX = event.touches[0].clientX;
        }

        function handleTouchMove(event) {
            currentX = event.touches[0].clientX;
            deltaX = startX - currentX;


        }

        function handleTouchEnd(event) {
            if (deltaX > 10) {
                console.log('Slide sang trái');
                gallery_control = "next";
                that.setCurrentState(gallery_control); // Sử dụng that thay vì this
                checkGalleryItem1Visibility_slider_next();
                return;
            }
            if (deltaX < -10) {
                console.log('Slide sang phai');
                gallery_control = "previous";
                that.setCurrentState(gallery_control); // Sử dụng that thay vì this
                checkGalleryItem1Visibility_slider_previous();
                return;
            }
        }

        gallery_item_mobile.forEach(item => {
            item.addEventListener('touchstart', handleTouchStart);
            item.addEventListener('touchmove', handleTouchMove);
            item.addEventListener('touchend', handleTouchEnd);


        });
    }
}

const run_mobile = new Carousel_mobile(gallery_container_mobile, gallery_item_mobile);
run_mobile.updateGallery();
run_mobile.useControls();

