import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, Building, User, Camera, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Heart className="w-12 h-12 text-primary mb-4" />,
      title: 'Wedding Photography',
      description: 'Capture your special day with our premium wedding photography package.',
      price: '5,000 DH',
      features: ['Full day coverage', 'Edited digital photos', 'Wedding album', 'Engagement session']
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: 'Family Portraits',
      description: 'Beautiful family portraits that capture your family\'s unique personality.',
      price: '1,200 DH',
      features: ['1-hour session', '20 edited photos', 'Digital delivery', 'Print options available']
    },
    {
      icon: <Building className="w-12 h-12 text-primary mb-4" />,
      title: 'Commercial Photography',
      description: 'Professional product and brand photography for your business needs.',
      price: '3,000 DH',
      features: ['Product photography', 'Brand imagery', 'Commercial license', 'Quick turnaround']
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary mb-4" />,
      title: 'Event Coverage',
      description: 'Comprehensive coverage for your corporate or social events.',
      price: '2,500 DH',
      features: ['Full event coverage', 'Quick previews', 'Professional editing', 'Online gallery']
    },
    {
      icon: <User className="w-12 h-12 text-primary mb-4" />,
      title: 'Portrait Session',
      description: 'Professional portrait sessions for individuals.',
      price: '800 DH',
      features: ['45-minute session', '10 edited photos', 'Digital delivery', '1 outfit change']
    },
    {
      icon: <Camera className="w-12 h-12 text-primary mb-4" />,
      title: 'Basic Photo Shoot',
      description: 'Perfect for social media content and casual photography needs.',
      price: '500 DH',
      features: ['30-minute session', '5 edited photos', 'Digital delivery', 'Single location']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of photography services to meet your needs, from weddings and events to portraits and commercial photography
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden service-card"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif text-secondary">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-center text-primary mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="block text-center bg-secondary hover:bg-primary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;