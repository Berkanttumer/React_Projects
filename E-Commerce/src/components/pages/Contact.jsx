import React from 'react';

const Contact = () => {
  return (
    <section className="contact mt-12 ">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210483094!2d28.68253373686614!3d41.00537021828283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1709661161881!5m2!1str!2str"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <div className="flex flex-col gap-3 mt-5">
          <span className="text-red-600 mt-6">Contact with us</span>
          <h1 className="text-4xl font-bold">Get In Touch</h1>
          <span>
            In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
            lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo
            a, pretium lobortis metus. Vivamus consectetur consequat justo.
          </span>
        </div>
        <div className=" flex justify-between gap-32">
          <form className="form-contact flex flex-col gap-5 mt-12 mb-12 text-sm">
            <div className=" gap-1 ">
              <label>
                Your Name <span className="text-red-600 text-xs">*</span>
              </label>
              <input type="text" required />
            </div>
            <div className=" gap-1">
              <label>
                Your E-Mail <span className="text-red-600 text-xs">*</span>
              </label>
              <input type="email" required />
            </div>
            <div className=" gap-1">
              <label>
                Subject <span className="text-red-600 text-xs">*</span>
              </label>
              <input type="text" required />
            </div>
            <div className=" gap-1">
              <label>
                Your Message <span className="text-red-600 text-xs">*</span>
              </label>
              <textarea
                rows="2"
                className="text-black p-3 outline-none"
                required
              ></textarea>
              <div>
                <button className="mt-6 bg-white text-black pl-7 pr-7 pt-1 pb-1 text-sm font-bold">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col mt-12 gap-5 text-sm">
            <h3 className="font-bold">Clotya Store</h3>
            <span>
              Clotya Store Germany — 785 15h Street, Office 478/B Green Mall
              Berlin, De 81566
            </span>
            <div className="flex flex-col">
              <span>Phone: +1 1234 567 88 </span>
              <span>Email: contact@example.com </span>
            </div>
            <h3 className="font-bold">Opening Hours</h3>
            <div>
              <p>Monday - Friday : 9am - 5pm</p>
              <p>Weekend Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
