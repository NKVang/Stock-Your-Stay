import React, { useState, useEffect } from "react";
import SubCategorySection from "../../components/SubCategorySection";
import { useParams } from "react-router-dom";
import { useBase } from "../../assets/hooks/useBase";
import { Carousel } from "react-bootstrap";

const SubCategory = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  let adjustedCategoryName = decodedCategoryName;
  const base = useBase();
  const [tags, setTags] = useState(new Set(['']));
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (adjustedCategoryName === 'local favorites') {
    adjustedCategoryName = '';
  }

  useEffect(() => {
    const subCategoriesBlacklist = [
      'breakfast', 'lunch', 'dinner', 'snacks', 'recommended'
    ];

    base("Products")
      .select({
        fields: ["Tags"],
        filterByFormula: `FIND('${adjustedCategoryName}', {Tags})`,
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          const recordTags = record.fields["Tags"] || [];
          const filteredTags = recordTags.filter(tag => tag !== adjustedCategoryName && !subCategoriesBlacklist.includes(tag));
          filteredTags.forEach(tag => setTags(prevTags => new Set([...prevTags, tag])));
        });
        fetchNextPage();
      }, (err) => {
        if (err) {
          console.error(err);
        }
      });
  }, [adjustedCategoryName, base]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };


  // carousel may require additional styling, couldn't leave it default for the dots indicating index
  // as the background is pure white
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2><strong>{decodedCategoryName}</strong></h2>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button onClick={() => handleSelect(activeIndex - 1)} disabled={activeIndex === 0}>Previous</button> {"   "}
              <button onClick={() => handleSelect(activeIndex + 1)} disabled={activeIndex === tags.size - 1}>Next</button>
            </div>
            <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null} controls={false} style={{ touchAction: "none" }}>
              {[...tags].map((tag, index) => (
                <Carousel.Item>
                  <div>
                    <SubCategorySection mainTag={decodedCategoryName} subTag={tag} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
