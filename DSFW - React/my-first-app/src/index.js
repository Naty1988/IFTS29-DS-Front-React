/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
 
                            

import React from "react";

import ReactDOM from "react-dom";
/*
const Hello = (props) => {

  return (

      <div>

          <p>

              Hello {props.name}, you are {props.age} years old

          </p>

      </div>

  );

};

const App = () => {

  const name = "Peter";

  const age = 10;

  return (

      <div>

          <h1>Greetings</h1>

          <Hello name="Maya" age={26 + 10} />

          <Hello name={name} age={age} />

      </div>

  );

};              
*/
 
/*
class RandomNumber extends React.Component {

    render() {

        const randomNumber = Math.floor(Math.random() * 10 + 1);

        let message;

        if (randomNumber >= 5) {

            message = "El número es mayor o igual a 5!";

        } else {

            message = "El número es menor a 5!";

        }

        return (

        <div>

            <h1>{message}</h1>

            <p>El número aleatorio generado es: {randomNumber}</p>

        </div>

        );

    }

    }
    
    ReactDOM.render(<RandomNumber/>, document.getElementById("root"));
     
*/
                     
                      
                            
/*
class Heladeria extends React.Component {

  get helado() {

      return "chocolate";

  }

  render() {

      return <h1>A mí me gusta el helado de {this.helado}.</h1>;

  }

}
 
         */                   

 /*
                            

class Button extends React.Component {

  scream() {

      alert("AAAAAAAAHHH!!!!!");

  }

  render() {

      return <button onClick={this.scream}>AAAAAH!</button>;

  }

}

ReactDOM.render(<Button />, document.getElementById("root"));

 
              */              

 
                            
/*

import { NavBar } from "./NavBar";
import { ProfilePage } from "./PorfilePage";

class App extends React.Component {

    render() {

        return (

            <div>

            <h1>¿Qué hora es?</h1>

            <NavBar />
            <ProfilePage />
            


        </div>

        );

    }

}

                        
ReactDOM.render(<App/>, document.getElementById("root"));
*/
 
                            
/* CONTADOR


class Contador extends React.Component {

    constructor(props) {

        super(props);

            this.state = {

                contador: 0

            };

        // No olvides vincular la función para que el valor de `this` sea el componente

        this.incrementarContador = this.incrementarContador.bind(this);

    }

    // Función para incrementar el valor del contador

    incrementarContador() {

        this.setState((prevState) => ({ contador: prevState.contador + 1 }));

    }

    render() {

        return (

            <div>

                <h1>Contador: {this.state.contador}</h1>

                <button onClick={this.incrementarContador}>Incrementar</button>

            </div>

        );

    }

}
ReactDOM.render(<Contador/>, document.getElementById("root"));
export default Contador;

*/
                            

class MiComponente extends React.Component {

  constructor(props) {

      super(props);

      this.state = { showPassword: false };

  }

  render() {

      let texto;

      if (this.state.showPassword) {

          texto = `La contraseña es ${this.props.password}`;

      } else {

          texto = "La contraseña es un secreto";

      }

      return (

          <div>

              <p>{texto}</p>

              <button

                  onClick={(event) => {

                      event.preventDefault();

                      this.setState((oldState) => ({

                          showPassword: !oldState.showPassword

                      }));

                  }}

              >

              Mostrar/ocultar contraseña

              </button>

          </div>

      );

  }

}
ReactDOM.render(<MiComponente/>, document.getElementById("root"));

                      


                        

                        


                      

                      


                      

                      

                        
