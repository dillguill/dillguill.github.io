import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;