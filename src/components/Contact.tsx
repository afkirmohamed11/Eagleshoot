import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary font-serif mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch with us today to discuss your photography needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-secondary font-serif">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Our team will get back to you as soon as possible to discuss your photography needs and how we can help bring your vision to life.
            </p>

            <div className="space-y-8">
              <a 
                href="tel:+212605921443" 
                className="flex items-center gap-6 group cursor-pointer"
                aria-label="Call us"
              >
                <div className="p-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary">Phone</h4>
                  <p className="text-gray-600 text-lg">+212 60-5921443</p>
                </div>
              </a>
              
              <a 
                href="mailto:eagleshot.photographer@gmail.com" 
                className="flex items-center gap-6 group cursor-pointer"
                aria-label="Email us"
              >
                <div className="p-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary">Email</h4>
                  <p className="text-gray-600 text-lg">eagleshot.photographer@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://maps.app.goo.gl/LNsXcZPbs8j9azEfA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
                aria-label="View our location"
              >
                <div className="p-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary">Address</h4>
                  <p className="text-gray-600 text-lg">Imzouren, Al Hoceima</p>
                </div>
              </a>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-secondary">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://web.facebook.com/profile.php?id=100068582700441&locale=fr_FR" 
                  className="p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/eagleshoot_photographer?igsh=czV0a2Vtc2h2anV5" 
                  className="p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div  
            className="lg:w-1/2 flex flex-col justify-center" 
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
          > 
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-secondary font-serif">Contact Us Directly</h3>
              
              <p className="text-gray-600 mb-8">
                Prefer a quick conversation? Reach out to us on WhatsApp for immediate assistance with your photography needs.
              </p>
              
              <a 
                href="https://wa.me/212605921443" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full"
              > 
                <Send className="w-6 h-6" /> Contact us via WhatsApp
              </a>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-lg font-semibold mb-3 text-secondary">Working Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;