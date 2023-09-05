const Explore_button = document.querySelector('.explore_icon');
const explore_detail = document.querySelector('.explore_detail');
const back_button = document.querySelector('.back_button');
const explore_detail_content_revuelto = document.querySelector('.explore_detail_content');
const explore_detail_content_revuelto_op_hidden = document.querySelector('.explore_detail_content_op_hidden');
var cnt = 0;
function revuelto_op() {
    explore_detail_content_revuelto_op_hidden.classList.toggle('explore_detail_content_op_visible');

}

// gallery_container da duoc khai bao o section gallery slider

Explore_button.addEventListener('click', () => {
    gallery_container.classList.add('gallery_container_move');
    explore_detail.classList.add('explore_detail_visible');
    gallery_container.classList.remove('gallery_container_back');

});
back_button.addEventListener('click', () => {
    gallery_container.classList.add('gallery_container_back');
    explore_detail.classList.remove('explore_detail_visible');
    explore_detail_content_revuelto_op_hidden.classList.remove('explore_detail_content_op_visible')

})
explore_detail_content_revuelto.addEventListener('click', () => {
    revuelto_op();
})