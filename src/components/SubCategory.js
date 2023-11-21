import React from "react";
import Footer from "./Footer";
import SubCatGallery from "./SubCatGallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop_style.css";
import SubCatBack from "./SubCatBack";

function SubCategory() {
    return (
        <div>
        <SubCatBack />
        <SubCatGallery />
        <Footer /> 
        </div>
    );
}

export default SubCategory;