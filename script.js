document.addEventListener('DOMContentLoaded', () => {
    let instruments = document.querySelector('.instrument');
    let cartTotal = 0
    function fetchInstruments(url) {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                for (let i = 0; i < response.length; i++) {
                    instruments.innerHTML += `
                        <div class="instrument">
                            <img src="${response[i].img}" alt ="" class="product-img">
                            <div class="product-content">
                                <h4 class="product-type">${response[i].type}</h4>
                                <h3 class="description">${response[i].description}</h3>
                                <div class="price-container">
                                    <h3 class="instrument-price">ksh.${response[i].Price}.00</h3>
                                    <a href="#!" data-instrumentId="${response[i].id}" class="add-to-cart"><i class="fa-solid fa-cart-shopping fa-beat"></i></a>
                                    <button onClick='buyNowButton' id="buy-now" class="buy-now" role="button">Buy Now</button>
                                </div>
                            </div>    
                        </div>`;
                }

                
            })
            .catch(error => console.log(error));
               
    }

    document.getElementById("buy-now", ()=> {
        addEventListener("click", () => {
            alert('you have successfuly bought')
        });
    });

    fetchInstruments('https://crediblesounds.onrender.com/instruments');

    
});
