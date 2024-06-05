import React from "react";

// Creating the footer of the website
const Footer = () => {
    return (
        <footer className="bg-dark mt-5 py-5">
            <div className="container text-center">
                <h6 className="lead fw-normal text-center text-white-50 mb-0">
                    PSV Store
                </h6>
                <br></br>
                <p className="text-center text-white m-0">
                    Registered ®️{" "} PSV Store
                    <a 
                        href="#"
                        style={{textDecorationLine: "nono", color: "#32CD32", fontWeight: "Bold"}}
                    />
                </p>
            </div>
        </footer>
    )
}

export default Footer;