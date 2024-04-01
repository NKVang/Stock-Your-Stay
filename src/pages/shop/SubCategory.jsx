import React from "react";
import SubCategorySection from "../../components/SubCategorySection";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { categoryName } = useParams();

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <h2>{categoryName}</h2>
              <SubCategorySection
                tagName={categoryName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
