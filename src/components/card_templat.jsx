import React from "react";
import { useState } from "react";

// Function to create the card Template of the items being sold
function CardTemplate({ Data, setCartItems }) {
    const [activate, setActivate] = useState(true);
    return (   
        // adding images for each item
        <div className="card m-2">

            {Data.img1 && (
                <img src="./images/tomato1.png" className="card-img-top" alt="Item" />
            )}

            {Data.img2 && (
                <img src="./images/onion1.png" className="card-img-top" alt="Item2" />
            )}

            {Data.img3 && (
                <img src="./images/mango1.png" className="card-img-top" alt="Item" />
            )}

            {Data.img4 && (
                <img src="./images/gooseberry1.png" className="card-img-top" alt="Item" />
            )}

            {Data.img5 && (
                <img src="./images/coconut1.png" className="card-img-top" alt="Item" />
            )}

            {Data.img6 && (
                <img src="./images/carrot1.png" className="card-img-top" alt="Item" />
            )}

            {Data.img7 && (
                <img src="./images/greenchilli1.png" className="card-img-top" alt="Item" />
            )}

            {Data.img8 && (
                <img src="./images/lemon1.png" className="card-img-top" alt="Item" />
            )}

            {/* //checking if an item is sale and reducing the price and displaying its on sale */}
            {Data.isSale && (
                <div 
                    className="badge bg-dark text-white position-absolute"
                    style={{top: "0.5rem", right: "0.5rem"}}>
                    
                    Sale
                </div>
            )}

            {/* //checking if specific item is special and displaying it on the card */}
            {Data.isSpecial && (
                <div 
                    className="badge bg-danger text-white position-absolute"
                    style={{top: "0.5rem", right: "0.5rem"}}>
                    
                    Special
                </div>
            )}

            <div className="card-body p-4 text-center">
                <h5 className="card-title">{Data.name}</h5>
                <p className="card-text">
                    {Data.rating && <div>{Data.rating}</div>}
                    {Data.originalPrice ? (
                        <div>
                            <span style={{textDecoration: "line-through"}}>
                                {Data.originalPrice}
                            </span> {" "}
                            {Data.price}
                        </div>
                    ) : (
                        `Price: ${Data.price}`
                    )}
                </p>
            </div>
            
            {/* //using useState to modify the number of items in the card when add/remove button is clicked */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    {activate ? (
                        <button
                            className="btn btn-outline-dark mt-auto"
                            onClick = {() => {
                                setCartItems((items) => items + 1);
                                setActivate(false);
                            }}>
                                Add to Cart
                            </button>
                    ) : (
                        <button
                        className="btn btn-dark mt-auto"
                        onClick = {() => {
                            setCartItems((items) => items - 1);
                            setActivate(true);
                        }}>
                            Remove from Cart
                        </button>
                    )}
                </div>
            </div>       
        </div>
    )
}

export default CardTemplate;