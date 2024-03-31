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
              <h2>Above 4</h2>
              <SubCategorySection
                tableName={categoryName}
                filterByFormula={"{price} > 4"}
              />
            </div>
            <div className="row">
              <h2>Under 10 Dollars</h2>
              <SubCategorySection
                tableName={categoryName}
                filterByFormula={"{price} < 10"}
              />
            </div>
            <div className="row">
              <h2>Under 10 Dollars and Above 4</h2>
              <SubCategorySection
                tableName={categoryName}
                filterByFormula={"AND({price} < 10, {price} > 4)"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
