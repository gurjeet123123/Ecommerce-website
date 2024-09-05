// console.log("hello world!");
// const button = document.getElementsByClassName("newbtn")
// console.log("hello world!",button[0]);
// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButton = document.querySelectorAll(".newbtn");
//     // const cards = document.querySelectorAll('.pro');
  
//     // Loop through each card
//     addToCartButton.forEach(card => {
      
//       const button = card.querySelector('button');
  
      
//       button.addEventListener('click', function(event) {
       
       
//         const proElement = event.target.closest(".pro");
//         const imgElement = proElement.querySelector("img");
//         const brandElement = proElement.querySelector(".des span");
//         const titleElement = proElement.querySelector(".des h5");
//         const priceElement = proElement.querySelector(".hehe .h3:nth-child(2)");

//         console.log("Image source:", imgElement.src);
//         console.log("Brand:", brandElement.textContent);
//         console.log("Title:", titleElement.textContent);
//         console.log("Price:", priceElement.textContent);
//       });
//     });
//     // addToCartButton.addEventListener("click", function(event) {
//     //     const proElement = event.target.closest(".pro");
//     //     const imgElement = proElement.querySelector("img");
//     //     const brandElement = proElement.querySelector(".des span");
//     //     const titleElement = proElement.querySelector(".des h5");
//     //     const priceElement = proElement.querySelector(".hehe .h3:nth-child(2)");

//     //     console.log("Image source:", imgElement.src);
//     //     console.log("Brand:", brandElement.textContent);
//     //     console.log("Title:", titleElement.textContent);
//     //     console.log("Price:", priceElement.textContent);

//     //     // You can perform further actions with these elements here
//     // });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'pro'
    const cards = document.querySelectorAll('.pro');
  
    // Loop through each card
    cards.forEach(card => {
      // Find the button within the card
      const button = card.querySelector('.newbtn');
  
      // Add a click event listener to the button
      button.addEventListener('click', function(event) {
        // Get the parent element with the class 'pro'
        const parentCard = event.target.closest('.pro');
        console.log('Parent card element:', parentCard);
        const proElement = event.target.closest(".pro");
    const imgElement = proElement.querySelector("img");
    const brandElement = proElement.querySelector(".des span");
    const titleElement = proElement.querySelector(".des h5");
   const priceElement = proElement.querySelectorAll(".hehe h3");
   console.log('Price element:', priceElement[1].textContent);
   console.log("Image source:", imgElement.src);
   console.log("Brand:", brandElement.textContent);
   console.log("Title:", titleElement.textContent);
//    console.log("Price:", priceElement[1].textContent);
  
        
        parentCard.style.backgroundColor = 'yellow'; // Example action




        //adding in add to cart file
        const productData = {
            imgSrc: imgElement ? imgElement.src : '',
            brand: brandElement ? brandElement.textContent : '',
            title: titleElement ? titleElement.textContent : '',
            price: priceElement.length > 1 ? priceElement[1].textContent : ''
        };

        // Get existing products from localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Add new product to the array
        products.push(productData);

        // Store updated products array in localStorage
        localStorage.setItem('products', JSON.stringify(products));

        // Redirect to cart.html
        // window.location.href = 'wishlist.html';
      });
    });
  });
  