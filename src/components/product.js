import React from "react";
import Container from "react-bootstrap/esm/Container";

const Product = () => {
  return (
    <div className="outerDiv">
      <Container>
        <div>
          <p className="yellowTitle">Product</p>
          <p className="blackTitle">Our popular product</p>
          <p className="grayParagraph">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Product;
