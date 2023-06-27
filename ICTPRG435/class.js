//get the class preview elemet.
let preveiwContainer = document.querySelector('.class-preview');
//get a n array form of the prview box.
let previewBox = Array.from(preveiwContainer.querySelectorAll('.preview'));
//add a click event for each class-1 element.
document.querySelectorAll('.class-container .class-1').forEach(product => {
  product.onclick = () => {
    //show preview container
    preveiwContainer.style.display = 'flex';
    // get the data-name attribute for each click event. 
    let name = product.getAttribute('data-name');
    //repeat over each previewBox.
    previewBox.forEach(preview => {
      //get the data-target attribute of the prviewBox    
      let target = preview.getAttribute('data-target');
      //if data-name matched the data-target add the 'active 'class to the previewBox.
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});
//add a click event in each previewBox element.
previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    //remove the active class from the previewBox.
    close.classList.remove('active');
    //hide the preview container.
    preveiwContainer.style.display = 'none';
  };
});













