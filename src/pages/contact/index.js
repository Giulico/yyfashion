import React from 'react'
import { navigate } from 'gatsby-link'

// Components
import { Grid, GridItem } from '../../components/Grid'
import Container from '../../components/Container'
import InputField from '../../components/InputField'
import Button from '../../components/Button'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  state = { isValidated: false }

  render() {
    const { name = '', email = '', message = '' } = this.state
    return (
      <Container>
        <h1>Contact</h1>
        <Grid className="u-pt--1">
          <GridItem large>
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
              <Button type="submit">Invia</Button>
            </form>
          </GridItem>
        </Grid>
      </Container>
    )
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
}

export default Contact
