const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

// {id: 11, title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', price: 109, description: '3D NAND flash are applied to deliver high transfer…e optimized performance and enhanced reliability.', category: 'electronics', …}
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// [[Prototype]]
// : 
// Object

const displayProducts = (products) => {
   
// 1. get the container & empty
const productContainer = document.getElementById("product-container");

// 2.get into every products
products.forEach((product) => {
    console.log(product);

    // 3.create Element
const productCard = document.createElement("div");

productCard.innerHTML = `

 <div class="card bg-base-100 shadow-sm h-full flex flex-col">

  <figure class="bg-black/30 px-10 h-64 flex items-center justify-center">
    <img
      src="${product.image}"
      class="h-full object-contain" />
  </figure>

  <div class="card-body flex flex-col justify-between flex-grow">
    
    <div>
      <div class="flex justify-between mb-2">
        <h1 class="text-blue-700 bg-slate-300 rounded px-2">
          ${product.category}
        </h1>
        <h1>
          <span class="text-yellow-500">
            <i class="fa-solid fa-star"></i>${product.rating.rate}
          </span>(${product.rating.count})
        </h1>
      </div>

      <h2 class="mb-2">
        ${product.title}
      </h2>

      <h1 class="text-lg font-bold">
        <i class="fa-solid fa-dollar-sign"></i>${product.price}
      </h1>
    </div>

    <div class="flex justify-between mt-4">
      <div class="btn btn-md px-5">
        <i class="fa-regular fa-eye"></i> Details
      </div>
      <div class="btn btn-md bg-blue-600 text-white px-5">
        <i class="fa-solid fa-cart-arrow-down"></i> Add
      </div>
    </div>

  </div>
</div>

`;
// 4. append into container
productContainer.append(productCard);
});


};
loadProducts();



function loadCategories(){
    // fetch the data 
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data))
}

// function loadProducts(){
//      fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => console.data);
   
// }


function displayCategories(categories){
//  get the container 
const catergoryContainer = document.getElementById("categoryContainer");
// loop operation on array of object 
for(let cat of categories){
    // console.log(cat)
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class=" btn btn-sm hover:text-white hover:bg-blue-600">${cat}</button>
    `
    // append the element 
    catergoryContainer.append(categoryDiv);



}


}

loadCategories();
loadProducts();