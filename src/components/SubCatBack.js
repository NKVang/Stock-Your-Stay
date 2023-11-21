import React from "react";
import "./shop_style.css";
import { useNavigate } from "react-router-dom";

function SubCatBack() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div classname="center-align">
            <div className="col d-flec justify-content-left">
                <button type="button" className="btn btn-light" onClick={goBack}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default SubCatBack;