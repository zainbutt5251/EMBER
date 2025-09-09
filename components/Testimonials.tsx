'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "EMBER Consulting transformed our operations completely. Their strategic approach and attention to detail resulted in a 40% increase in operational efficiency within just 6 months.",
    author: "Sarah Johnson",
    title: "CEO, TechFlow Industries",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content: "The team's expertise in change management was invaluable during our digital transformation. They guided us through every step with professionalism and clear communication.",
    author: "Michael Chen",
    title: "COO, Global Manufacturing Corp",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content: "Outstanding results! Their data-driven approach helped us identify new market opportunities that generated an additional $2M in revenue in the first year.",
    author: "Emily Rodriguez",
    title: "VP Strategy, RetailMax",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content: "EMBER's innovation consulting opened our eyes to possibilities we never considered. Their creative solutions gave us a significant competitive advantage.",
    author: "David Thompson",
    title: "Founder, StartupHub",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content: "Professional, knowledgeable, and results-driven. The ROI on their consulting services exceeded our expectations by 300%. Highly recommended!",
    author: "Lisa Park",
    title: "Director, FinanceFirst",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content: "Their risk management expertise saved our company from potential major losses. The frameworks they implemented are now integral to our operations.",
    author: "Robert Wilson",
    title: "CRO, SecureBank",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what industry leaders have to say about 
            their experience working with EMBER Consulting Group.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-7">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={testimonial.image}
                        alt={`${testimonial.author} profile picture`}
                      />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}