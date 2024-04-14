import React, { useState, useEffect } from "react";
import SubCategorySection from "../../components/SubCategorySection";
import { useParams } from "react-router-dom";
import { useBase } from "../../assets/hooks/useBase";
import { Carousel, Dropdown } from "react-bootstrap";

const SubCategory = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  let adjustedCategoryName = decodedCategoryName;
  const base = useBase();
  const [tags, setTags] = useState(new Set(['']));
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState("Select Category");
  
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
    setActive(selectedIndex);
    setSelected([...tags][selectedIndex]);
  };
  
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2><strong>{decodedCategoryName}</strong></h2>
            <Dropdown onSelect={(eventKey) => handleSelect(eventKey - 1)} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ textTransform: 'capitalize' }}>
                {selected === "" ? "View All" : selected}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {[...tags].map((tag, index) => (
                  <Dropdown.Item key={index} eventKey={index + 1} style={{ textTransform: 'capitalize'}}>
                    {tag === "" ? "View All" : tag}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Carousel activeIndex={active} onSelect={handleSelect} interval={null} controls={false} style={{ touchAction: "none" }}>
              {[...tags].map((tag) => (
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
