import React from "react";

const Article = () => {
  return (
    <div className="outerDiv product">
      <Container>
        <div className="text-center row">
          <p className="yellowTitle">Product</p>
          <p className="blackTitle">Our popular product</p>
        </div>
        <div className="row justify-content-center pb-5">
          <p className="grayParagraph col-6 text-center">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Article;
