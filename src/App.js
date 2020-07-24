import React, { Component }from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      error: null
    }

    this.sortFunc = this.sortFunc.bind(this)
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

  sortFunc = namecolumn => {
    this.setState({
      items: this.state.items.sort((a, b) => (
        parseFloat(a[namecolumn]) - parseFloat(b[namecolumn])
      ))
    })
  }

  render() {
    const {error, isLoaded} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <Loader />
        } else {
            return(
                <div className="wrapper">
                  <Table data={this.state.items} sortFunc={this.sortFunc} />
                </div>
            )
        }
  }
}

export default App;
