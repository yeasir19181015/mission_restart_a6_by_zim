// ======================
// NAVIGATION CONTROL
// ======================

function showHome() {

    document.getElementById("bannerSection").style.display = "block";
    document.getElementById("whySection").style.display = "block";
    document.getElementById("productSection").style.display = "block";
    document.getElementById("productContainerSection").style.display = "grid";

}

function showProducts() {

    document.getElementById("bannerSection").style.display = "none";
    document.getElementById("whySection").style.display = "none";
    document.getElementById("productSection").style.display = "block";
    document.getElementById("productContainerSection").style.display = "grid";

    // Optional: scroll to product section
    document.getElementById("productSection").scrollIntoView({
        behavior: "smooth"
    });

}











// =======================
// LOAD ALL PRODUCTS
// =======================

const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => displayProducts(data));
};


// =======================
// DISPLAY PRODUCTS
// =======================

const displayProducts = (products) => {

    const productContainer = document.getElementById("product-container");

    // ✅ Clear previous products
    productContainer.innerHTML = "";

    products.forEach((product) => {

        const productCard = document.createElement("div");

        productCard.innerHTML = `
        <div class="card hover:bg-blue-200 bg-base-100 shadow-sm h-full flex flex-col hover:shadow-lg transition duration-300">

         <figure class="bg-black/30 p-6 h-56 sm:h-64 flex items-center justify-center">

           <img src="${product.image}" class="max-h-full object-contain" />

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
                  </span> (${product.rating.count})
                </h1>
              </div>

              <h2 class="mb-2">${product.title}</h2>

              <h1 class="text-lg font-bold">
                <i class="fa-solid fa-dollar-sign"></i>${product.price}
              </h1>
            </div>

            <div class="flex justify-between mt-4">
              <button onclick="showDetails(${product.id})"class="btn btn-md px-5">
              <i class="fa-regular fa-eye"></i> Details
              </button>

              <div class="btn btn-md bg-blue-600 text-white px-5">
                <i class="fa-solid fa-cart-arrow-down"></i> Add
              </div>
            </div>

          </div>
        </div>
        `;

        productContainer.append(productCard);
    });
};


// =======================
// LOAD ALL CATEGORIES
// =======================

function loadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data));
}


// =======================
// LOAD PRODUCTS BY CATEGORY
// =======================

const loadCategoryProducts = (category) => {

    const url = `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayProducts(data));
};


// =======================
// DISPLAY CATEGORIES
// =======================

function displayCategories(categories) {

    const catergoryContainer = document.getElementById("categoryContainer");

    catergoryContainer.innerHTML = "";

    // ✅ Optional: Add ALL button
    const allBtn = document.createElement("button");
    allBtn.innerText = "All";
    allBtn.className = "btn btn-sm hover:text-white hover:bg-blue-600";
    allBtn.onclick = loadProducts;
    catergoryContainer.append(allBtn);

    for (let cat of categories) {

        const categoryBtn = document.createElement("button");

        categoryBtn.innerText = cat;
        categoryBtn.className = "btn btn-sm hover:text-white hover:bg-blue-600";

        // 🔥 Important fix (string passed properly)
        categoryBtn.onclick = () => loadCategoryProducts(cat);

        catergoryContainer.append(categoryBtn);
    }
}



// =======================
// SHOW PRODUCT DETAILS
// =======================

const showDetails = (id) => {

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {

            const modalContent = document.getElementById("modal-content");

            modalContent.innerHTML = `
                <div class="grid md:grid-cols-2 gap-6">

                    <div class="flex justify-center items-center">
                        <img src="${product.image}" 
                        class="max-h-72 object-contain" />
                    </div>

                    <div>
                        <h2 class="text-xl font-bold mb-3">
                            ${product.title}
                        </h2>

                        <p class="text-sm text-gray-600 mb-4">
                            ${product.description}
                        </p>

                        <p class="text-lg font-semibold mb-2">
                            💲 ${product.price}
                        </p>

                        <p class="mb-4">
                            ⭐ ${product.rating.rate} 
                            (${product.rating.count} reviews)
                        </p>

                        <button class="btn btn-primary w-full">
                            🛒 Add to Cart
                        </button>
                    </div>

                </div>
            `;

            document.getElementById("productModal").showModal();
        });

};



// =======================
// INITIAL CALL
// =======================

loadProducts();
loadCategories();
