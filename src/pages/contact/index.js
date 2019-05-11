import React from 'react'

// Components
import { Grid, GridItem } from '../../components/Grid'
import Container from '../../components/Container'
import InputField from '../../components/InputField'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  state = {
    isValidated: false,
    thankYou: false
  }

  render() {
    const { name = '', email = '', message = '', thankYou } = this.state
    return (
      <Container>
        <h1>Contatti</h1>
        <Grid className="u-pt--1 u-ml--2 u-ml-desktop--4" left>
          <GridItem large>
            {thankYou ? (
              <div>
                <h2>Grazie!</h2>
                <p>
                  Hai inviato un messaggio, tieni sott'occhio la tua email,
                  presto ti risponderemo!
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <InputField
                  label="Il tuo nome"
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  hasContent={name.length > 0}
                  required
                />
                <InputField
                  label="La tua email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  hasContent={email.length > 0}
                  required
                />
                <InputField
                  label="Il tuo messaggio"
                  name="message"
                  type="textarea"
                  onChange={this.handleChange}
                  hasContent={message.length > 0}
                  required
                />
                <Checkbox name="privacy" onChange={this.handleChange} required>
                  dichiaro di aver letto bla blabla
                </Checkbox>
                <div className="u-text--right">
                  <Button type="submit">Invia</Button>
                </div>
              </form>
            )}
          </GridItem>
        </Grid>
      </Container>
    )
  }

  handleChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked && e.target.value })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => {
        this.setState({
          thankYou: true
        })
      })
      .catch(error => alert(error))
  }
}

export default Contact
