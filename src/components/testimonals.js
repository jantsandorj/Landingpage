import Container from "react-bootstrap/esm/Container";
import Cards from "./card";
import "../style/Testimol.css";

const Testimol = () => {
  return (
    <div className="outerDiv">
      <Container>
        <div className="text-center row">
          <p className="yellowTitle">Testimonials</p>
          <p className="blackTitle">What our customer say</p>
        </div>
        <div className="row justify-content-center pb-5">
          <p className="grayParagraph col-6 text-center">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </Container>
      <div
        className="d-flex"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
        }}
      >
        <Cards
          title={"Janne Cooper"}
          iconName={"airplane-engines"}
          paragraph={
            "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. "
          }
          isDiv={true}
        />
        <Cards
          title={"Janne Cooper"}
          iconName={"airplane-engines"}
          paragraph={
            "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. "
          }
          isDiv={true}
        />
        <Cards
          title={"Janne Cooper"}
          iconName={"airplane-engines"}
          paragraph={
            "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. "
          }
          isDiv={true}
        />
      </div>
    </div>
  );
};

export default Testimol;
