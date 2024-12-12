import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../assets/types/article";
import { Col, Container, Row } from "react-bootstrap";

const MyDetails = () => {
  const [details, setdetails] = useState<Article>();
 console.log(details)
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
        <Col sm={12}> 
          <h1> </h1>
        </Col>
      </Row>
    </Container>
  );
};
export default MyDetails;
