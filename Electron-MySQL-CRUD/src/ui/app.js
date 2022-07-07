const productForm = document.getElementById('productForm');
const productName = document.getElementById('name');
const productPrice = document.getElementById('price');
const {remote} = requrie('electron');

remote.hello();

productForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('submiting');

    const newProduct = {
        name: productName.value,
        price: productPrice.value
    }
})