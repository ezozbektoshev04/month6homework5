import React, { Component } from "react";
import AddStidents from "./AddStidents";
import StudentList from "./StudentList";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: JSON.parse(localStorage.getItem("contact")) || [],
      search: "",
      show: false,
    };
  }

  addContact = (person) => {
    // e.preventDefault();
    let newContact = [
      ...this.state.person,
      {
        id: Math.floor(Math.random() * 100000),
        ...person,
      },
    ];

    localStorage.setItem("contact", JSON.stringify(newContact));
    this.setState({
      person: JSON.parse(localStorage.getItem("contact")),
    });
  };

  deleteContact = (id) => {
    let newContact = this.state.person.filter((el) => el.id !== id);
    localStorage.setItem("contact", JSON.stringify(newContact));
    this.setState({
      person: JSON.parse(localStorage.getItem("contact")),
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleEditShow = () => {
    this.setState({ show: true });
  };
  editChange = () => {
    this.handleEditShow();
  };

  // handleSearchChange = (event) => {
  //   this.setState({
  //     search: event.target.value,
  //   });
  //   console.log(this.state.person.firstName);
  //   let newContact = this.state.person.filter(
  //     (el) => el.firstName === this.state.search
  //   );
  //   localStorage.setItem("contact", JSON.stringify(newContact));
  //   this.setState({
  //     person: JSON.parse(localStorage.getItem("contact")),
  //   });
  // };

  render() {
    // localStorage.clear();
    // const { show } = this.props;
    const { show, person } = this.state;
    return (
      <div className="container">
        <div className="mt-3 d-flex gap-5 justify-content-between">
          <form className="w-75">
            <input
              type="text"
              className="form-control"
              // value={this.search}
              // onKeyUp={this.handleSearchChange}
              placeholder="Search..."
            />
          </form>
          <button className="btn btn-primary" onClick={this.handleShow}>
            Add Contact
          </button>
        </div>
        <AddStidents
          show={show}
          handleClose={this.handleClose}
          person={person}
          addContact={this.addContact}
          // editChange={this.editChange}
        />
        <StudentList
          // handleClose={this.handleClose}
          editChange={this.editChange}
          show={show}
          handleClose={this.handleClose}
          person={this.state.person}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Contact;
