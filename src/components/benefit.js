import React, { useEffect, useState } from "react";
import Cards from "./card";
import "../style/global.css";
import "../style/benefit.css";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";

const Benefit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/api/carddata").then((dt) => {
      setData(dt.data.message);
    });
  }, []);
  console.log(data);
  return (
    <div className="outerDiv">
      <Container>
        <div>
          <h3 className="yellowTitle">Benefits</h3>
          <div className="row justify-content-between pb-5">
            <h2 className="blackTitle col-5 pe-5 ">
              Benefits when using our services
            </h2>
            <p className="grayParagraph col-5 ps-3">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between gap-3">
          {data.map((e) => {
            return (
              <Cards
                isDiv={true}
                iconName={e.iconName}
                title={e.title}
                paragraph={e.paragraph}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Benefit;
