import React from "react";
import '../Componets/Header.css'

function Header(props) {
    console.log(props);
    
    return(
        <header>
             <div className="container">
                <div className="row align-items justify-content-between">
                    <div className="logo">
                        <img src="images/logo2.png"></img>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Pages<i class="fa-solid fa-chevron-down"></i></a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#">Page-1</a>
                                            </li>
                                            <li>
                                                <a href="#">Page-2</a>
                                            </li>
                                            <li>
                                                <a href="#">Page-3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {
                                    props.list.map((l) => {
                                        console.log("list>>>",l);
                                        return(
                                            <li>
                                                <a href="#">{l}</a>
                                            </li>
                                        )   
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
             </div>
        </header>
    )
}


export default Header;


