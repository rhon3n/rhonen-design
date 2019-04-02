import React, { Component } from 'react';
import './App.css';
import './index.scss';
import { 
  Section,
  Heading,
  Container,
  Hero, } from "react-bulma-components/full";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Hero color="primary" gradient>
            <Hero.Body>
              <h1 className="title">Hi, I'm Joel 👋</h1>
              <h2 className="subtitle">Thanks for stopping by!</h2>
            </Hero.Body>
          </Hero>
        </Section>
        <EmailForm />
      </div>      
    );
  }
}

// Creates an form for collecting email.
class EmailForm extends Component {
  render() {
    return (
      <Section class="is-flex-mobile">
        <Container>
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="email" placeholder="you@arecool.com" />
            </div>
            <a class="button has-background-info has-text-white">Stay in touch</a>
          </div>
        </Container>
      </Section>
    )
  }
}

export default App;
