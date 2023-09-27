import React, { Component } from "react";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class AddStidents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      gender: "",
    };
  }
  handleSave = (e) => {
    e.preventDefault();

    this.props.addContact({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      gender: this.state.gender,
    });
    this.setState({ firstName: "", lastName: "", phone: "", gender: "" });
    this.props.handleClose();
  };

  render() {
    // localStorage.clear();
    // console.log(this.state);
    const { show } = this.props;
    const { firstName, lastName, phone } = this.state;
    const { handleClose } = this.props;
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="firstName">Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName">Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                {/* <label htmlFor="gender"></label> */}
                <select
                  name="gender"
                  id="gender"
                  className="form-select form-control"
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={this.handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStidents;
