let previewclass = document.querySelector('.class-preview');
let previewBox =  document.querySelector('.preview');
document.querySelectorAll('.class-container .class-1').forEach(product=>{
    product.onclick = () =>{
        previewclass.getElementsByClassName.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = product.getAttribute('data-target');
        });
    };
});
previewBox.forEach(close =>{
    close.onclick = () =>{
        previewclass.getElementsByClassName.display = 'none';
        };
})
Collapse

















