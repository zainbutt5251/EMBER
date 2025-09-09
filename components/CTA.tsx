'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 sm:top-[-30rem] sm:-ml-80 lg:left-[max(14rem,38%)] lg:ml-0 lg:top-[-32rem] xl:left-[max(0rem,36%)] xl:top-[-43rem]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#4338ca] to-[#7c3aed] opacity-25"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Ignite Your Success?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join hundreds of companies that have transformed their operations with EMBER. 
            Schedule a consultation today and discover how we can accelerate your growth.
          </p>
        </motion.div>
        
        <motion.div
          className="mx-auto mt-10 flex max-w-md gap-x-4 lg:max-w-none lg:justify-center lg:gap-x-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-semibold group flex-1 sm:flex-none"
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 group flex-1 sm:flex-none"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
            <div className="text-gray-300">30-minute strategy session</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">Quick Response</div>
            <div className="text-gray-300">Within 24 hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">No Commitment</div>
            <div className="text-gray-300">Explore options risk-free</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}