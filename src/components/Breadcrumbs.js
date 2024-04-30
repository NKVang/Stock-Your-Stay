import { Breadcrumb } from "react-bootstrap";
import { isMobile } from "./Functions";

const Breadcrumbs = ({ category, productName }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
        {category ? (
          <Breadcrumb.Item href={`/sub-category/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Breadcrumb.Item>
        ) : null}
        <Breadcrumb.Item active>
          {isMobile() ? productName.slice(0, 15) + "..." : productName}
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
