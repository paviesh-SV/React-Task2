import React from "react";
// Creating the the navigation bar with other links and number ot items in the cart
function Navbar({ cartItems }) {
    return (
        // Creating the Navigation bar
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#">PSV Store</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown=toggle"
                                id="navbarDropdown"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop
                            </a>

                            <ul className="dropdown-menu" aria-labelledy="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        All Products
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Popular Items
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        New Arrivals
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* Creating a form to store and modify the number of items in cart */}
                    <form className="d-flex">
                        <button className="btn btn-outline-dark text" href='#' type="submit">
                            <img
                                src="./Images/shopping-cart.svg"
                                className="card-img-left"
                                alt="Items"
                            />

                            <i className="bi bi-cart me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">
                                {cartItems}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )

}

export default Navbar