import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Camera className="w-10 h-10 text-primary" />,
      title: 'Professional Equipment',
      description: 'We use top-of-the-line cameras and lenses to ensure the highest quality photos.',
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: 'Award-Winning',
      description: 'Our work has been recognized for its creativity and technical excellence.',
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and always deliver on time.',
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'Client Focused',
      description: 'Your vision and satisfaction are our top priorities throughout the process.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Eagle Shoot</h2>
          <p className="section-subtitle">
            Capturing life's precious moments with an eagle's precision and artistic vision
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img 
                src="/our_story.jpg" 
                alt="Photographer at work" 
                className="rounded-lg shadow-xl w-full h-auto"
                style={{ width: '400px', height: 'auto' }} // Custom width

              />
          </motion.div>

          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-secondary font-serif">Our Story</h3>
            <p className="text-lg mb-6 text-gray-700">
              Eagle Shoot Photography was founded with a passion for capturing life's most precious moments with the precision and vision of an eagle. Our team of professional photographers brings years of experience and artistic talent to every shoot.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              We specialize in a wide range of photography services, from weddings and events to portraits and commercial photography. Our goal is to exceed your expectations and deliver stunning images that you'll treasure for years to come.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;