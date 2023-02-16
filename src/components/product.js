import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Cards from "./card";
import axios from "axios";
import "../style/product.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product = () => {
  const [carddata, setCarddata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/api/products").then((res) => {
      console.log(res);
      setCarddata(res.data.result);
    });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carddata.map((e) => {
          return (
            <div
              className="d-flex"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
              }}
            >
              <Cards
                cardImg={e.thumbImg}
                title={e.productName}
                category={e.categoryID}
                paragraph={e.desc}
                isDiv={false}
                price={e.price}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Product;
