import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const { name, email, message } = formState;

  // const [errorMessage, setErrorMessage] = useState("");

  // function handleChange(e) {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);
  //     // isValid conditional statement
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }

  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }

  //   console.log("errorMessage", errorMessage);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  return (
    <section>
      <h2>Contact me</h2>
      {/* <form
        id="contact-form"
        className="mt-4 border border-light border-4 rounded-4 p-3 mx-5 d-flex justify-content-evenly"
        onSubmit={handleSubmit}
      >
        <div className="border border-light border-4 rounded-4 p-3 flex-grow-1 me-2">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
              className="form-control"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form> */}
      <div className="border border-light border-4 rounded-4 p-3 d-flex flex-column align-items-center">
        <h4>My contact information</h4>
        <p>
          <b>Welcome to contact me</b>
        </p>
        <address className="text-center">
          772 Caboto Trail, Markham, <br /> ON L3R 4X2, CA <br />
          <div className="mt-2">
            Email:{" "}
            <a href="mailto:joey674901205@gmail.com">joey674901205@gmail.com</a>
            <br />
            Github:{" "}
            <a href="https://github.com/YangLongWang">
              https://github.com/YangLongWang
            </a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/longyang-wang/">
              https://www.linkedin.com/in/longyang-wang/
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}

export default ContactForm;
