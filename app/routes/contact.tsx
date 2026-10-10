
import { useState } from "react";

export function meta() {
  return [{ title: "Contact Me" }];
}

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Thank you, ${name}! Your message was entered.`);
  }

  return (
    <main>
      <h1>Contact Me</h1>
      <p>Send me a message using the form below.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}