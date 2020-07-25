import React, {Component} from 'react';
import './AddElementForm.css';

class AddElementForm extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div className="formAdd">
        <form action="#" name="addel">
          <input
            type="text"
            name="id"
            placeholder="id"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={this.props.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddElementForm;
