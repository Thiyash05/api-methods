import React, {useEffect , useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Crud(){

    const [photo , setPhoto]=useState([])

    useEffect(()=>{
        fetch("https://api.tvmaze.com/shows/1/episodes")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setPhoto(data)
            console.log(data);
        })
        
    })
    return(
        <div className="card-section">
             

                        <Container className="card-container">
                            <Row className="card-row row-cols-lg-3">
             {
                photo.map((img)=>(
                    <div>
                                <Col className="card-col">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img.image.medium}/>
                                        <Card.Body>
                                            <Card.Title>{img.name}</Card.Title>
                                            <Card.Text>
                                            {img.summary}
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
export default Crud;