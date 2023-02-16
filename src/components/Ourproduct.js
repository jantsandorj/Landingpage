import React from "react";
import Container from "react-bootstrap/esm/Container";

const Ourproduct = () => {
  return (
    <div className="outerDiv">
      <Container>
        <p className="yellowTitle">Our Product </p>
        <div className="row">
          <div className="col-6">
            <p className="blackTitle">
              Crafted by talented and high quality material
            </p>
            <p className="grayParagraph py-3">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
              morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
            </p>
            <button className="btn btn-success mb-5 fs-4 px-5">
              Learn More
            </button>
            <img
              src="https://www.thespruce.com/thmb/E1XbLaqk9sLPwBN3lf9riPp3O_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/storing-your-clothes-without-a-closet-2648456-001-cfe0a333273b4b66a56ce1e65e7a9643.jpg"
              alt="sample"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between pb-5">
              <div className="d-flex flex-column">
                <p className="blackTitle m-0">20+</p>
                <p className="grayParagraph">Years Experience</p>
              </div>
              <div className="d-flex flex-column">
                <p className="blackTitle m-0">483</p>
                <p className="grayParagraph">Happy Client</p>
              </div>
              <div className="d-flex flex-column">
                <p className="blackTitle m-0">150+</p>
                <p className="grayParagraph">Project Finished</p>
              </div>
            </div>
            <img
              src="https://www.thespruce.com/thmb/E1XbLaqk9sLPwBN3lf9riPp3O_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/storing-your-clothes-without-a-closet-2648456-001-cfe0a333273b4b66a56ce1e65e7a9643.jpg"
              alt="sample"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ourproduct;
