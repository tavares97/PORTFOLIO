import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andre",
          from_email: form.email,
          to_email: "afpt.digital2013@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      toast("Your message was sent successfully", {
        icon: "👏",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast("Oh no, something went wrong, try again ?", {
        icon: "❌",
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontFamily: "SUSE",
          },
        }}
      />
      <div
        className="coding inverse-toggle pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-neutral-900   rounded-lg leading-normal overflow-hidden"
      >
        <div className="top mb-2 px-5 flex">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="mt-4 bg-neutral-800 ">
          <h3 className="text-green-500 p-1 font-vt323 text-xl">
            Let's talk:~$
          </h3>
          <p className="flex-1 typing items-center pl-3">apt-get hire me</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-5 px-3 py-2"
          >
            <label htmlFor="" className="space-y-1">
              <span className="field-label ">Name/Company Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label htmlFor="" className="space-y-1">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="JohnDoe@gmail.com"
              />
            </label>
            <label htmlFor="" className="space-y-1 pb-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I would like to give you a job @..."
              />
            </label>

            <button
              className="field-btn font-vt323"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
