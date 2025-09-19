import { useState } from "react";
import { useRef } from "react";
import emailJs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailJs.send(
        "service_nifis7a",
        "template_r6s5qwg",
        {
          from_name: formState.name,
          to_name: "Alexandre",
          from_email: formState.email,
          to_email: "ale.fenandes23@gmail.com",
          message: formState.message,
        },
        "9Z_MeKb2vdtlB2zMR"
      );
      alert("Sua mensagem foi enviada com sucesso!");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Something went wrong, please try again.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <section className="c-space my-20 overflow-hidden" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen max-xl:hidden"
        />
        <div className="contact-container p-14">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Quer você queira construir um novo site, melhorar o seu atual, ou dar vida a um projeto único, estou aqui para ajudar.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nome Completo:</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="João Silva"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">E-mail:</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="joaosilva@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Mensagem:</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Oi, quero construir um novo site..."
                style={{ resize: "none" }}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Send messsage"}
              <img
                src="/assets/arrow-up.png"
                alt="flecha"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
