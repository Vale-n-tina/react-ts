import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../assets/types/article";
import { Col, Container, Row } from "react-bootstrap";

const MyDetails = () => {
  const [details, setdetails] = useState<Article>();

  const params = useParams();

  const getDetails = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.articleid)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero dei dati");
        }
      })
      .then((arraydetails) => {
        console.log("dettagli ricevuti", arraydetails);
        setdetails(arraydetails);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={8} className=" m-auto mt-5">
          <h1> {details?.title} </h1>
          <img src={details?.image_url} alt="img" />
          <h6>{details?.title}summary
          </h6>
        </Col>
      </Row>
    </Container>
  );
};
export default MyDetails;
