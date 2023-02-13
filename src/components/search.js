import React from "react";
import Container from "react-bootstrap/esm/Container";
import searchImg from "../Image/Rectangle 2.jpg";
import "../style/search.css";

const Search = () => {
  return (
    <div className="outerDiv">
      <Container>
        <div className="text-center font row justify-content-center">
          <h1 className="title col-9">
            Discover Furniture With High Quality Wood
          </h1>
          <p className="grayParagraph col-9" style={{ paddingTop: "30px" }}>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
        <div className="row justify-content-center pt-5">
          <div className="col-12" style={{ position: "relative" }}>
            <img
              src={searchImg}
              alt="searchImg"
              style={{ position: "relative", width: "100%" }}
            />
            <div className="searchDiv col-9" style={{ position: "absolute" }}>
              <input placeholder="Search property" className="searchInput" />
              <i className="bi bi-search"></i>
              <button className="btn btn-success searchButton">Search</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
