import React from "react";
import ContactForm from "../../components/ui-components/ContactForm";

const Contact = () => {
  return (
    <main className="flex flex-col items-center w-full p-6 gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Let's talk</h1>
        <h2 className="text-1xl font-semibold">
          This form will send an email directly to my inbox
        </h2>
      </div>
      <ContactForm />
    </main>
  );
};

export default Contact;
