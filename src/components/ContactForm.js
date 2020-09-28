import React, { Component } from "react";
import "./ContactForm.css";
import Modal from "react-modal";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
      showPopup: false,
    };
  }

  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log("submit clicked");
    e.preventDefault();
    this.setState({ disabled: true });

    emailjs
      .sendForm(
        "gmail",
        "template_portfolioweb",
        e.target,
        "user_qChukgl5pDImakyg4khQ2"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({ showPopup: true });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <div>
        <div className="contact-container">
          <h1>Let's Talk</h1>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <label className="form-label">Message</label>
            <textarea
              className="form-input-area"
              name="message"
              id="message"
              placeholder="Enter your message"
              required
            />
            <input className="form-submit" type="submit" value="Send" />
          </form>
          <Modal
            isOpen={this.state.showPopup}
            style={{
              content: {
                top: "200px",
                right: "300px",
                bottom: "150px",
                left: "300px",
                textAlign: "center",
                alignItems: "flex-end",
                backgroundColor: "rgba(134, 226, 213, 0.7)",
                borderRadius: "15px",
              },
            }}
          >
            <h1>Email Sent, thank you</h1>
            <div className="close-button-container">
              <button
                className="button"
                onClick={() => this.setState({ showPopup: false })}
              >
                Click here to close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ContactForm;
