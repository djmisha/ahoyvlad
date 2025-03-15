import { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e, id) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const fieldID = id;

    // create input object
    const input = {
      [fieldName]: fieldValue,
      id: fieldID,
    };

    // create new state
    const newState = state.map((obj) => {
      // input data if id found
      if (obj.id === fieldID) {
        // update the field with new input data
        return { ...obj, [fieldName]: fieldValue };
      }
      return obj;
    });

    let inputFoundinState = false;

    // check the state for our input id and return true if found
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === fieldID) inputFoundinState = true;
    }

    // update the state if input found with the state
    if (inputFoundinState) setState([...newState]);

    // or add the input to the current state
    if (!inputFoundinState) setState([...state, input]);
  };

  const checkForErrors = () => {
    // Check if we have all required fields (name, email, service, message)
    if (!state || state.length < 4) {
      setHasError(true);
      return true;
    }

    // Check for required fields specifically
    const hasName = state.some((item) => item.name && item.name.trim() !== "");
    const hasEmail = state.some(
      (item) => item.email && item.email.trim() !== ""
    );
    const hasService = state.some(
      (item) => item.service && item.service !== ""
    );
    const hasMessage = state.some(
      (item) => item.message && item.message.trim() !== ""
    );

    if (!hasName || !hasEmail || !hasService || !hasMessage) {
      setHasError(true);
      return true;
    }

    setHasError(false);
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!checkForErrors()) {
      // remove id's from State
      const cleanData = state.map((obj) => {
        const newObj = { ...obj };
        delete newObj.id;
        return newObj;
      });

      let objectData = {};

      // add values to our new data Object
      cleanData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          objectData[key] = obj[key];
        });
      });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...objectData,
        }),
      })
        .then(() => {
          setIsSubmitted(true);
          setState([]);
        })
        .catch((error) => alert("Error submitting the form: " + error));
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form submission-success">
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. We'll be in touch soon.</p>
        <button className="contact-btn" onClick={() => setIsSubmitted(false)}>
          📤 Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      name="ahoy-vlad-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Hidden field for Netlify form handling */}
      <input type="hidden" name="form-name" value="ahoy-vlad-contact" />
      <div hidden>
        <label>
          Don't fill this out:{" "}
          <input name="bot-field" onChange={(e) => handleChange(e, 1)} />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => handleChange(e, 2)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => handleChange(e, 3)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={(e) => handleChange(e, 4)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interest*</label>
        <select
          id="service"
          name="service"
          onChange={(e) => handleChange(e, 5)}
          required
        >
          <option value="" disabled selected>
            Select a service
          </option>
          <option value="charter">Charter & Adventure Sailing</option>
          <option value="education">Sailing Education & Training</option>
          <option value="captain">Captain-for-Hire Services</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message*</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          onChange={(e) => handleChange(e, 6)}
          required
        ></textarea>
      </div>

      {hasError && (
        <div className="form-error">
          Please fill out all required fields marked with an asterisk (*).
        </div>
      )}

      <button type="submit" className="contact-btn">
        📤 Send Message
      </button>
    </form>
  );
};

export default ContactForm;
