console.log("Hello World");
let btnCreate = document.querySelector('#btnCreate');
btnCreate.onclick = function() {
    let floatingProductName = document.querySelector("#floatingProductName");
    let floatingPrice = document.querySelector("#floatingPrice");
    createProduct(floatingProductName.value , floatingPrice.value);
};
function createProduct(productName, productPrice) {
    if (!productName) return alert ("Product Name is required");
    else if (!productPrice) return alert (`Product must have a price.`);

    let product ={
        name:productName,
        price:productPrice,
    };

localStorage.setItem("product",JSON.stringify(product));
console.log("Creating product..." , productName, productPrice);
}
