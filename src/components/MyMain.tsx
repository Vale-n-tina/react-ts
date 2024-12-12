import { useEffect, useState } from "react"
import Article from "../assets/types/article";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

   
const MyMain=()=>{
  
    interface ApiResponse {
        count: number;
        next: string | null; 
        previous: string | null; 
        results: Article[]; 
      }

  const [articles, setarticles]=useState<ApiResponse>()


  const getArticles=()=>{

     fetch("https://api.spaceflightnewsapi.net/v4/articles")
     .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("errore nel recupero dei dati")
        }
     })
     .then((arrayofarticles)=>{
        console.log(arrayofarticles)
        setarticles(arrayofarticles)

     })
     .catch((err)=>{
        console.log("errore", err)
     })
  }
  

 useEffect(()=>{getArticles()},[])
    return(
        <Container className=" mt-5">
            <Row className=" g-3">
                
           {articles?.results?.map((ar)=>{
                return(
                <Col sm={12} md={6} lg={3}>
             <MyCard key={ar.id} array={ar}/> </Col>)
                })}
             
            </Row>
        </Container>
       
    )
}

export default MyMain