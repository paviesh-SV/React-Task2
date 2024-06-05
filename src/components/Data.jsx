import React from "react";
import CardTemplate from "./card_templat";

//Function to create data
const CardGrid = ({setCartItems}) => {
    //Providing Data in another file and passing it onto the card template
    const Data = [
        {
            name: "Tomato",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "Rs.130",
            price: "Rs.100",
            img1: "true",
            isSale: "true",
            isSpecial: ""
        },

        {
            name: "Onion",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "",
            price: "Rs.70",
            img2: "true",
            isSale: "",
            isSpecial: ""
        },

        {
            name: "Mango",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "",
            price: "Rs.50",
            img3: "true",
            isSale: "",
            isSpecial: "True"
        },

        {
            name: "Gooseberry",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "",
            price: "Rs.65",
            img4: "true",
            isSale: "",
            isSpecial: ""
        },

        {
            name: "Coconut",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "Rs.105",
            price: "Rs.80",
            img5: "true",
            isSale: "true",
            isSpecial: ""
        },

        {
            name: "Carrot",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "",
            price: "Rs.40",
            img6: "true",
            isSale: "",
            isSpecial: ""
        },

        {
            name: "Green Chilli",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "",
            price: "Rs.30",
            img7: "true",
            isSale: "",
            isSpecial: ""
        },

        {
            name: "Lemon",
            rating: "⭐⭐⭐⭐⭐",
            originalPrice: "",
            price: "Rs.45",
            img8: "true",
            isSale: "",
            isSpecial: "true"
        },
    ]

    //Passing the data into the card template using the array map function
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {Data.map((card, index) => (
                        <div key={index} className="col-mb-4">
                            <CardTemplate Data={card} setCartItems={setCartItems} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardGrid;