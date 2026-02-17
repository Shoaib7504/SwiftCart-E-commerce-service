// document.getElementById('mobile-menu-btn').addEventListener('click', function() {
//     const mobileMenu = document.getElementById('mobile-menu');
//     mobileMenu.classList.toggle('hidden');
// });

const loadContainer = () => {
    const SectionContainer = document.getElementById('container')
    SectionContainer.innerHTML = "";

    const section = document.createElement('section')
    section.innerHTML = `
      <!-- Hero Section -->
        <section class="bg-[url('./banner-image.png')] bg-cover bg-center  h-[500px] flex items-center">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl">
                    <h1 class="text-white text-5xl md:text-6xl font-bold mb-4">Best Collection For You</h1>
                    <p class="text-white text-lg mb-6 max-w-xl">
                        Discover the latest trends in fashion, electronics, and more. Shop with confidence and style at
                        SwiftCart.
                    </p>
                    <button id="shop-now-btn"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer px-8 py-3 rounded transition font-medium">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>

    <section  class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-3">Why Choose Us</h2>
                <p class="text-gray-600 text-center mb-12">
                    We provide the best shopping experience with top-notch services.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Fast Delivery -->
                    <div class="bg-white p-6 rounded-lg text-center feature-card">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Fast Delivery</h3>
                        <p class="text-gray-600 text-sm">
                            Get your orders delivered to your doorstep quickly and efficiently.
                        </p>
                    </div>

                    <!-- 24/7 Support -->
                    <div class="bg-white p-6 rounded-lg text-center feature-card">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">24/7 Support</h3>
                        <p class="text-gray-600 text-sm">
                            Our support team is available around the clock to assist you.
                        </p>
                    </div>

                    <!-- Secure Payment -->
                    <div class="bg-white p-6 rounded-lg text-center feature-card">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Secure Payment</h3>
                        <p class="text-gray-600 text-sm">
                            Experience safe and secure transactions with our encrypted payment systems.
                        </p>
                    </div>

                    <!-- Easy Returns -->
                    <div class="bg-white p-6 rounded-lg text-center feature-card">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Easy Returns</h3>
                        <p class="text-gray-600 text-sm">
                            Not satisfied? Return your products easily within 30 days.
                        </p>
                    </div>
                </div>
            </div>
        </section>`


    SectionContainer.append(section)


}
loadContainer()



const loadProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            const slicedData = data.slice(0, 4);
            displayProduct(slicedData);

        }
        )


}

const displayProduct = (products) => {
    // console.log(products);
    const ProductContainer = document.getElementById('product-container')
    ProductContainer.innerHTML = "";

    products.forEach(product => {
        console.log(product);

        const productsCard = document.createElement('section')
        productsCard.innerHTML = `  <div
                    class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition product-card">
                    <div class="relative bg-gray-100 h-70 h-cover overflow-hidden">
                        <img src=${product.image} />
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between">
                            <span class="inline-block bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full mb-2">
                           ${product.category}
                        </span>
                        <div class="flex items-center gap-1 mb-3">
                            <span><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i></span>
                            <span class="text-sm">${product.rating.rate}</h3>
                                (${product.rating.count})</span>
                        </div>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
                        
                        <div class="text-2xl font-bold mb-4">$${product.price}</div>
                        <div class="flex gap-2">
                            <button
                                class="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50 transition flex items-center justify-center gap-2">
                               <span> <i class="fa-solid fa-eye"></i></span>
                                Details
                            </button>
                            <button
                                class="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition flex items-center justify-center gap-2 add-to-cart">
                               <span><i class="fa-solid fa-cart-arrow-down" style="color: rgba(230, 232, 236, 1.00);"></i></span>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                
                
                `
        ProductContainer.append(productsCard)

    });

}
loadProduct()


const loadCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => displayCategory(data)
        )
}

const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => displayProducts(data)

        );
}


const displayCategory = (categories) => {

    const categoryContainer = document.getElementById('main-container')
    categoryContainer.innerHTML = `  <h1 class="font-bold text-center mt-6 mb-6 text-4xl">Our products</h1>
        
       <section id="products-container"  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></section>
    
    `;




    categories.forEach(category => {
        console.log(category);
        const div = document.createElement('div')
        div.innerHTML = `
                         
                       <button
                         class="px-5 py-2  mt-4 rounded-full  bg-gray-200 text-gray-700 hover:bg-pink-600 hover:text-white transition duration-300">
                         ${category}
                          </button>
                 `
        categoryContainer.append(div)
    });

    


    loadProducts()

}

const displayProducts = (products) => {

    const categoryContainer = document.getElementById('products-container')

    products.forEach(product => {

        const productsCards = document.createElement('section')
        productsCards.innerHTML = `
         <div
                    class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition product-card">
                    <div class="relative bg-gray-100 h-70 h-cover overflow-hidden">
                        <img src=${product.image} />
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between">
                            <span class="inline-block bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full mb-2">
                           ${product.category}
                        </span>
                        <div class="flex items-center gap-1 mb-3">
                            <span><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i></span>
                            <span class="text-sm">${product.rating.rate}</h3>
                                (${product.rating.count})</span>
                        </div>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
                        
                        <div class="text-2xl font-bold mb-4">$${product.price}</div>
                        <div class="flex gap-2">
                            <button
                                class="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50 transition flex items-center justify-center gap-2">
                               <span> <i class="fa-solid fa-eye"></i></span>
                                Details
                            </button>
                            <button
                                class="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition flex items-center justify-center gap-2 add-to-cart">
                               <span><i class="fa-solid fa-cart-arrow-down" style="color: rgba(230, 232, 236, 1.00);"></i></span>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
       
                
                
                `
        categoryContainer.append(productsCards)

    });

}

