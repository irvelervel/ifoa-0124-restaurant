import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
// import { Form, Button } from 'react-bootstrap' <-- questo metodo anche funziona, ma non è ottimale

// questo form creerà una prenotazione in un database sfruttando delle API
// name: string <-- required
// phone: string/number <-- required
// numberOfPeople: string/number <-- required
// dateTime: string <-- required
// smoking: boolean <-- required
// specialRequests <-- NOT required

class BookingForm extends Component {
  // creo un sotto-oggetto nello state di BookingForm, che rappresenterà il CONTENUTO del form di prenotazione
  // grazie ad una serie di input "controllati", ad ogni pressione di un tasto in un campo noi andremo a modificare
  // lo stato del componente in modo da mantenerli sempre "sincronizzati"
  // il nostro form sarà SEMPRE consapevole del proprio contenuto!
  // alla pressione del tasto submit ci basterà andare a leggere il contenuto dello state, che sarà
  // stato automaticamente aggiornato strada facendo

  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      dateTime: '',
      smoking: false,
      specialRequests: '',
    },
  }

  render() {
    return (
      <>
        <h2 className="text-center mt-3">Prenota un tavolo ORA!</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Il tuo nome</Form.Label>
            {/* i Form.Control si traducono in HTML in <input /> */}
            <Form.Control
              type="text"
              placeholder="Mario Rossi"
              required
              onChange={
                // qui dentro ci va una funzione che viene eseguita ad ogni cambiamento dell'input
                (e) => {
                  this.setState({
                    // dobbiamo FONDERE un nuovo oggetto all'interno del nostro this.state
                    reservation: {
                      ...this.state.reservation, // riportando qui dentro TUTTE le proprietà di reservation
                      name: e.target.value, // il carattere che ho appena scritto
                    },
                  })
                }
              }
              value={this.state.reservation.name}
            />
          </Form.Group>

          {this.state.reservation.name === 'Al Bano' && (
            <Alert variant="success">FELICITÀ!</Alert>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Numero di telefono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="320xxxxxxx"
              required
              onChange={(e) => {
                this.setState({
                  reservation: {
                    ...this.state.reservation, // riportando qui dentro TUTTE le proprietà di reservation
                    phone: e.target.value,
                  },
                })
              }}
              value={this.state.reservation.phone}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>In quanti siete?</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  reservation: {
                    ...this.state.reservation, // riportando qui dentro TUTTE le proprietà di reservation
                    numberOfPeople: e.target.value,
                  },
                })
              }}
              value={this.state.reservation.numberOfPeople}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data / Ora</Form.Label>
            <Form.Control
              type="datetime-local"
              required
              onChange={(e) => {
                this.setState({
                  reservation: {
                    ...this.state.reservation, // riportando qui dentro TUTTE le proprietà di reservation
                    dateTime: e.target.value,
                  },
                })
              }}
              value={this.state.reservation.dateTime}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Tavolo fumatori?"
              onChange={(e) => {
                this.setState({
                  reservation: {
                    ...this.state.reservation, // riportando qui dentro TUTTE le proprietà di reservation
                    smoking: e.target.checked, // checked è true/false, value nelle checkboxes sarebbe "on"/"off"
                  },
                })
              }}
              checked={this.state.reservation.smoking}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Allergie, intolleranze, richieste speciali?</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              onChange={(e) => {
                this.setState({
                  reservation: {
                    ...this.state.reservation, // riportando qui dentro TUTTE le proprietà di reservation
                    specialRequests: e.target.value,
                  },
                })
              }}
              value={this.state.reservation.specialRequests}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Prenota!
          </Button>
        </Form>
      </>
    )
  }
}

export default BookingForm