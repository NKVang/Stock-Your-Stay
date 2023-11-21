import React from "react";
import "./shop_style.css";
import SubCat1 from "./SubCat1.js";
import SubCat2 from "./SubCat2.js";
import SubCat3 from "./SubCat3.js";

function SubCatGallery() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <SubCat1 />
                    </div>
                    <div className="row">
                        <SubCat2 />
                    </div>
                    <div className="row">
                        <SubCat3 />
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default SubCatGallery;