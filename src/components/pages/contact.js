import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.setState({
      email: '',
      message: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container componentContainer">
          <p className="componentHead">Contact</p>
        </div>
        <div className="container componentContent">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="7"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <input
                    className="btn btn-primary submit"
                    type="submit"
                    value="Submit"
                    id="submitBtn"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
} 
