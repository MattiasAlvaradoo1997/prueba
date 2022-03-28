import React from "react";
import './styles/Card.css';
import './styles/Base.css';
import { Link } from "react-router-dom";
import Add from "../images/add.png";

const AddButton = () =>(
        <Link className="card card-button mx-auto User-Info" to="/task/new">
            <div>
                <img className="imagefix" src={Add} alt="task"/>
            </div>
        </Link>
)

export default AddButton