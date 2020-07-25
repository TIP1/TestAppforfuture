import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import lodash from 'lodash';
import Loader from './Loader/Loader';
import TableSearch from './TableSearch/TableSearch';
import AddElementForm from './AddElementForm/AddElementForm';
import Table from './Table/Table';
import AboutEl from './AboutEl/AboutEl';
import ModeSelector from './ModeSelector/ModeSelector';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isModeSelected: false,
      isLoaded: false,
      addElement: false,
      items: [],
      error: null,
      search: '',
      sort: 'asc',
      namecolumn: 'id',
      el: null,
      page: 0,
    };
  }
  getData (url) {
    fetch (url).then (res => res.json ()).then (
      result => {
        this.setState ({
          isLoaded: true,
          items: lodash.orderBy (
            result,
            this.state.namecolumn,
            this.state.sort
          ),
        });
      },
      error => {
        this.setState ({
          isLoaded: true,
          error,
        });
      }
    );
  }

  sortFunc = namecolumn => {
    const truedata = this.state.items.concat ();
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';

    const orderedData = lodash.orderBy (truedata, namecolumn, sortType);
    this.setState ({
      items: orderedData,
      sort: sortType,
      namecolumn,
    });
  };

  showRow = el => {
    this.setState ({el});
  };

  handlePageClick = ({selected}) => {
    this.setState ({page: selected});
  };

  onSelectMode = url => {
    this.setState ({
      isModeSelected: true,
    });

    this.getData (url);
  };

  searchHandler = search => {
    this.setState ({search, page: 0});
  };

  showAddEl = () => {
    this.setState ({
      addElement: !this.state.addElement,
    });
  };

  addElFunc = e => {
    console.log (e.target.value);
  };

  getFilteredData () {
    const {items, search} = this.state;
    var isnum = /^\d+$/.test (search);
    if (!search) {
      return items;
    } else if (!isnum) {
      return items.filter (item => {
        return (
          item['firstName'].toLowerCase ().includes (search.toLowerCase ()) ||
          item['lastName'].toLowerCase ().includes (search.toLowerCase ()) ||
          item['email'].toLowerCase ().includes (search.toLowerCase ())
        );
      });
    } else if (isnum) {
      return items.filter (item => {
        return (
          item['id'].toString ().includes (search) ||
          item['phone'].toString ().includes (search)
        );
      });
    }
  }
  render () {
    const pageSize = 50;
    const filtered = this.getFilteredData ();
    const CountOfPage = Math.ceil (filtered.length / pageSize);
    const displayData = lodash.chunk (filtered, pageSize)[this.state.page];

    if (!this.state.isModeSelected) {
      return <ModeSelector onSelect={this.onSelectMode} />;
    }
    const {error, isLoaded} = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <div className="wrapper">
          <button className="btn btn-primary" onClick={this.showAddEl}>
            Add element
          </button>
          {this.state.addElement
            ? <AddElementForm handleChange={this.addElFunc} />
            : null}
          <TableSearch onSearch={this.searchHandler} />
          <Table
            data={displayData}
            sortFunc={this.sortFunc}
            sort={this.state.sort}
            namecolumn={this.state.namecolumn}
            showRow={this.showRow}
          />
          {this.state.items.length > pageSize
            ? <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={CountOfPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                forcePage={this.state.page}
              />
            : null}
          {this.state.el ? <AboutEl datarow={this.state.el} /> : null}
        </div>
      );
    }
  }
}

export default App;
