import React, { Component }from 'react';
import Loader from './Loader/Loader'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      error: null
    }
  }
  componentDidMount() {
    fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
  }
  render() {
    const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <Loader />
        } else {
            return(
                <div className="wrapper">
                  <ul>
                      {items.map(item => (
                          <li key={item.id}>
                              {item.firstName}
                          </li>
                      ))}
                  </ul>
                </div>
            )
        }
  }
}

export default App;
