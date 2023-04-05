let instruments = document.querySelector(".instrument");
let cart = [];
document.getElementById("cart_total").innerHTML = cart.length;

document.addEventListener("DOMContentLoaded", () => {
  function fetchInstruments(url) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          instruments.innerHTML += `
                        <div class="instrument">
                            <img src="${response[i].img}" alt ="" class="product-img">
                            <div class="product-content">
                                <h4 class="product-type">${response[i].type}</h4>
                                <h3 class="description">${response[i].description}</h3>
                                <div class="price-container">
                                    <h3 class="instrument-price">ksh.${response[i].Price}.00</h3>
                                    <button onclick='cart.push(${response[i].id});document.getElementById("cart_total").innerHTML = cart.length; console.log(cart)' data-instrumentId="${response[i].id}" class="add-to-cart"><i class="fa-solid fa-cart-shopping fa-beat"></i></button>
                                    <button onclick='alert("you have successfuly bought ${cart}");'class="buy-now" role="button">Buy Now</button>
                                </div>
                            </div>    
                        </div>`;
        }
      })
      .catch((error) => console.log(error));
  }


  for (let i = 0; i < cart.length; i++) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        document.getElementById('cartItem').innerHTML=""
        for (let j = 0; j < response.length; j++) {
            if (cart[i] == response[j]) {
                document.getElementById('cartItem').innerHTML+=`
                
                <h5>Test Description</h5>
                <p>KES. 12,500.00</p>
                `
            }
        }
    });
        
            
    
  }
  fetchInstruments("https://crediblesounds.onrender.com/instruments");

});
