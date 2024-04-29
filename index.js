$("document").ready(() =>{
console.log("Hello World");
});
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

    //get the initial value of products array
    let products = localStorage.getItem("product");
    
    //check if array is empty
    if(!products) products = [];
    else products = JSON.parse(products) //Parse to JSON object if not null.

    // validate if product name is already exsting
    let productIsExisting =products.findIndex((p) => {
    return p.name == product.name;

    });

    if(productIsExisting >= 0)
    return alert (`${product.name} is already in the database.`);

    products.push(product); // add sa array


//save sa database
localStorage.setItem("product",JSON.stringify(products));
alert(`${product.name} has been successfully added`);
console.log("Creating product....", productName, productPrice);

}

//read
function getProducts() {
    $("#tbodyProducts").html("");

//get the initial value of products array
let products = localStorage.getItem("product");

//check if array is empty
if(!products) products = [];
else products = JSON.parse(products)

products.forEach((p) => {
    $("#tbodyProducts").append(
    `<tr>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td><button> class "btn btn-primary ">Update</button>
    <button> class "btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
</tr>`
    );
});

}

function deleteProduct(productIndex) {
let products = localStorage.getItem("product");
if(!products) products =[];
else products =JSON.parse(products);

products[productIndex].isDeleted = true;


localStorage.setItem("product", JSON.stringify(products));
getProducts();
}