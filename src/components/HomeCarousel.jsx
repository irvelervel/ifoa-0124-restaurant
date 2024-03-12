import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// recupero l'array delle pastasciutte con un import
import items from '../data/menu.json'

// ora vorremmo generare un Carousel.Item (una slide) per OGNI elemento di items (per ogni pastasciutta)

const HomeCarousel = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {/* <div class="col-12 col-md-8 col-lg-6"> */}
          <h2 className="my-3 text-center">Ecco il nostro menù!</h2>
          <Carousel>
            {
              // con queste graffe dichiaro un "blocco logico" in JSX, una "parte dinamica"
              // con .map() andiamo a mappare un array e a generare dinamicamente del contenuto,
              // ritornando in questo caso un Carousel.Item per ogni pasta nell'array items (menu.json)
              items.map((pasta) => {
                // pasta è un oggetto! il primo oggetto dell'array al primo ciclo, il secondo al secondo e così via...
                return (
                  <Carousel.Item>
                    <img
                      src={pasta.image}
                      alt="a pasta from the menu"
                      className="w-100"
                    />
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeCarousel
