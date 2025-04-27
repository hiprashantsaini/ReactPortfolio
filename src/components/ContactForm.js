import { faClipboard, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoaderCircle } from 'lucide-react';
import React, { useState } from 'react';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Handle form submission logic here
      console.log(formData);
      setIsLoading(false);
      alert("You message sent.");
      // Reset the form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div id='contact' className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg z-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1 flex items-center">
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-blue-600 mr-2" />
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-blue-600 mr-2" />
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 flex items-center">
            <FontAwesomeIcon icon={faClipboard} className="h-5 w-5 text-blue-600 mr-2" />
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 flex items-center">
            <FontAwesomeIcon icon={faClipboard} className="h-5 w-5 text-blue-600 mr-2" />
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          ></textarea>
        </div>

        {!isLoading ? <button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Send Message
        </button> :
          <button
            className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 flex justify-center items-center"
          >
            <LoaderCircle className='animate-spin' />
          </button>
        }
      </form>
    </div>
  );
};

export default ContactForm;
