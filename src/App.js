import React, { Component }from 'react';
import lodash from 'lodash';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import AboutEl from './AboutEl/AboutEl';
import ModeSelector from './ModeSelector/ModeSelector';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModeSelected: false,
      isLoaded: false,
      items: [],
      error: null,
      sort: 'asc',
      namecolumn: 'id',
      el: null
    }

  }
  getData(url) {
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: lodash.orderBy(result, this.state.namecolumn, this.state.sort)
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
    const truedata = this.state.items.concat()
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'

    const orderedData = lodash.orderBy(truedata, namecolumn, sortType)
    this.setState({
      items: orderedData,
      sort: sortType,
      namecolumn
    })
  }

  showRow = el => {
    this.setState({el})
  }

  onSelectMode = url => {
    this.setState({
      isModeSelected: true,
    });

    this.getData(url)
  }

  render() {
    if (!this.state.isModeSelected) {
      return (    
            <ModeSelector onSelect={this.onSelectMode}/>        
      )
    }
    const {error, isLoaded} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <Loader />
        } else {
            return(
                <div className="wrapper">
                  <Table
                   data={this.state.items}
                   sortFunc={this.sortFunc}
                   sort={this.state.sort}
                   namecolumn={this.state.namecolumn}
                   showRow={this.showRow}
                  />
                  {
                  this.state.el ? <AboutEl datarow={this.state.el} /> : null
                  }
                </div>
                
            )
        }
  }
}

export default App;
