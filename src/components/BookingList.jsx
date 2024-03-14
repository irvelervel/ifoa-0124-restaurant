import { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class BookingList extends Component {
  // questo componente avrà lo scopo di RECUPERARE le prenotazioni esistenti dalle API
  // e mostrarle sotto forma di LISTA nel JSX
  // in HTML + JS le chiamate di tipo GET vengono solitamente effettuate all'avvio

  // in React i componenti sono dotati di un "lifecycle": vengono montati, perdurano nella pagina, vengono smontati
  // oggi ci interessa la fase di montaggio: il nostro componente dovrà montarsi e RECUPERARE i dati da mostrare!

  // il processo sarà questo:
  // - creare uno stato iniziale per il componente
  // - recuperare i dati dall'esterno (con una fetch() con metodo GET)
  // - salveremo questi dati nello stato del componente
  // - utilizzare questi dati per creare le parti dinamiche dell'interfaccia

  state = {
    reservations: [], // al fine di non snaturare questa fonte di dati, il tipo di questa proprietà sarà SEMPRE
    // un array; poichè però le prenotazioni all'avvio ancora non ci sono, il suo valore sarà di array -vuoto-
  }

  render() {
    return (
      <div className="text-center mt-3">
        <h2 className="mb-2">Prenotazioni correnti</h2>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default BookingList
