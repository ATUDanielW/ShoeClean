import React from 'react'; //import react
import {Container, Row, Col, Image, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Home extends React.Component{ // react.component 
    render(){
      
        return ( 
            <div>
                <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={8}>
            <Image src="https://i.etsystatic.com/21816291/r/il/d13741/4653032269/il_fullxfull.4653032269_7tm9.jpg"
                fluid
                rounded
              />

            </Col>
            <Col sm={4}>
            <h1>DSD SHOE DOCTOR</h1>
              <h2>
              Welcome to StayFresh, your ultimate destination for urban luxury sneaker care in the UK.
              We live and breathe sneakers, and our expertise shines through in every pair we revive.
              With over 3 years of experience and 10,000+ shoes brought back to life, we're the go-to choice for sneaker enthusiasts everywhere
              </h2>
              
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-danger text-white my-5 py-4">
            <Card.Body>
              OUR PROCESS
              Our team of experts guarantee that your repair will be completed efficiently and effectively. We have the experience and dedication to get the job done right. Get in touch to see how we can help you today.</Card.Body>
            </Card>
            <h1>THE BEST SHOE DOCTOR IN IRELAND NO.1</h1>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.beyondstore.fi/tuotekuvat/1500x1500/EssentialKitHero.jpg" />
                <Card.Body>
                <Card.Title>Clean Kit</Card.Title>
                  <Card.Text>
                  With a team of skilled artisans and state-of-the-art cleaning techniques, we are dedicated to reviving the allure of your shoes and bringing them back to life.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.walkingsticks.co.uk/user/products/luxury-suede-shoe-care-bundle-HC.jpg" />
                <Card.Body>
                  <Card.Title>Book YOUR SERVICE ONLINE</Card.Title>
                  <Card.Text>
                  Simply visit our website and choose the service that best fits your needs. You can then book your service online and select the option that is most convenient for you - either have your sneakers collected from your door, drop them off at our store, or take them to a local DPD location.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://veldskoen.ie/cdn/shop/files/Beige_and_Gray_Minimalist_Quote_Instagram_Post_54_1600x.png?v=1615291628" />
                <Card.Body>
                  <Card.Title>WE INSPECT, DETAIL, CLEAN AND SERVICE YOUR ORDER</Card.Title>
                  <Card.Text>
                  Once we receive your sneakers, our team of experts will carefully inspect them to determine the best cleaning and detailing method. We use eco-friendly and effective solutions to remove dirt, stains, and odours from your sneakers while preserving their quality and integrity. We also offer additional services such as sole repainting, lace cleaning, and more to ensure that your sneakers receive the comprehensive care they deserve.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/32de1b69970321.5b9362e23a251.jpg" />
                <Card.Body>
                  <Card.Title>WE DELIVER YOUR SNEAKERS RIGHT TO YOUR DOORSTEP </Card.Title>
                  <Card.Text>
                  After we have cleaned and serviced your sneakers, we will deliver them right to your home address, fully insured. You can rest assured that your sneakers are in good hands with Stay Fresh, and that they will arrive looking and feeling like new. We pride ourselves on providing a hassle-free and stress-free service, so that you can enjoy your sneakers to the fullest. Book your service today and experience the Stay Fresh difference.
                  </Card.Text>
         
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </main>
      
      <footer class="py-5 my-5 bg-danger">
      <h5>© 2023 SHOE DOCTOR, Inc. All Rights Reserved</h5>
      </footer>

              
            </div>
          );
    }
}