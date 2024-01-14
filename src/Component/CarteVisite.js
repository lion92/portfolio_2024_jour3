import React from 'react';
import './css/contact.css'
import Header from "./Header";

const CarteVisite = () => {
    return (
        <div>
<Header></Header>
            <div className="blanc">

                <h1>Kriss CLOTILDE</h1>
                <p>Developpeur fullstack</p>

                <ul>
                    <li><a href="https://www.linkedin.com/in/kriss-clotilde/"
                           target="_blank"
                    ><i className="fab fa-linkedin-in fa-2x"></i>lien linkdin</a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default CarteVisite;