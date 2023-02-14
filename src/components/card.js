import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ iconName, title, paragraph, cardImg, isDiv }) {
  return (
    <Card style={{ backgroundColor: "white", border: "none" }}>
      <Card.Body>
        <Card.Img variant="top" src={cardImg} />
        <div
          style={{
            display: isDiv ? "flex" : "none",
            width: "63px",
            height: "63px",
            backgroundColor: " #F9F9F9",
            borderRadius: "50%",
            marginBottom: "1.2rem",
          }}
          className="justify-content-center align-items-center"
        >
          <i
            className={`cardIcon bi bi-${iconName}`}
            style={{ fontSize: "30px" }}
          ></i>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="grayParagraph">{paragraph}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
