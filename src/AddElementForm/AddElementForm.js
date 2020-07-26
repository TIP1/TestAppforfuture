import React, {Component} from 'react';
import './AddElementForm.css';

class AddElementForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        streetAddress: 'has not',
        city: 'has not',
        state: 'has not',
        zip: 'has not',
      },
      description: 'has not',
      validation: false,
    };
  }


  wrapSend = event => {
    event.preventDefault ();
    this.props.handleSubmit (this.state);
    document.forms['addEl'].reset ();
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        streetAddress: 'has not',
        city: 'has not',
        state: 'has not',
        zip: 'has not',
      },
      description: 'has not',
      validation: false,
    })
  };

  handleChange = e => {
    switch (e.target.name) {
      case 'id':
        this.setState ({id: e.target.value.replace (' ', '')});
        break;
      case 'firstName':
        this.setState ({firstName: e.target.value.replace (' ', '')});
        break;
      case 'lastName':
        this.setState ({lastName: e.target.value.replace (' ', '')});
        break;
      case 'email':
        this.setState ({email: e.target.value.replace (' ', '')});
        break;
      case 'phone':
        this.setState ({phone: e.target.value.replace (' ', '')});
        break;
      default:
        this.setState ({validation: false});
    }
    if (e.target.value === '') {
      this.setState ({validation: false});
    } /*else if (e.target.value.length === 1) {
      this.reqСond ();
      let {id, firstName, lastName, email, phone} = this.state;
      let arr = [id, firstName, lastName, email, phone];
      if (!arr.includes ('')) {
        this.setState ({validation: true});
      }
    }*/
    else {
      this.reqСond ();
    }
  };
  reqСond = () => {
    let {id, firstName, lastName, email, phone} = this.state;
    let arr = [id, firstName, lastName, email, phone];
    if (!arr.includes ('')) {
     // console.log ('ok');
      this.setState ({validation: true});
    } else {
      this.setState ({
        validation: false,
      });
    }
  };

  render () {
    return (
      <div className="formAdd">
        <form action="#" name="addEl" onSubmit={this.wrapSend}>
          <input
            type="number"
            name="id"
            placeholder="id"
            onChange={this.handleChange}
            className="paramEl"
          />
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            onChange={this.handleChange}
            className="paramEl"
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            onChange={this.handleChange}
            className="paramEl"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            className="paramEl"
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={this.handleChange}
            className="paramEl"
          />
          {this.state.validation
            ? <button type="submit" className="btn btn-success subm" onClick={this.reqСond}>Submit</button>
            : <button type="submit" className="btn btn-light subm" onClick={this.reqСond} disabled>
                Submit
              </button>}
        </form>
      </div>
    );
  }
}

export default AddElementForm;
