import React, {useEffect , useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

function Axioussection(){

    const [meals , setMeals]=useState([]);


    useEffect(()=>{
        axios.get("https://api.tvmaze.com/shows/1/episodes")
        .then((res)=>{
            setMeals(res.data)
            console.log(res.data)
        })
    },[])

    return(
        <div>
               <Container className="card-container">
                  <Row className="card-row row-cols-lg-3">
                        {
                            meals.map((img)=>(
                                <div>

                                    <Col className="card-col">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img.image.medium}/>
                                        <Card.Body>
                                            <Card.Title> {img.name}</Card.Title>
                                            <Card.Text>
                                                <div className="text">
                                               <p>Rating: <span>{img.rating.average}</span ></p>
                                               <p>Season: <span>{img.season}</span ></p>
                                               </div>
                                              <p className="summary">{img.summary}</p> 
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                
                                  </Col>
                        
                         
                                </div>
                            ))
                       }
                </Row>
          </Container>
        </div>
    )
}
export default Axioussection;