'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Globe, Settings } from 'lucide-react';
import pillar1 from "../assets/pillar1.png"
import pillar2 from "../assets/pillar2.png"
import pillar3 from "../assets/pillar3.png"
const pillars = [
  {
    img: pillar1.src,
    title: 'Strategic Intelligence & Market Mastery',
    description:
      'Market analysis, cultural insight, and competitive positioning with the <b>ECG Market Penetration Matrix</b>.',
    marginleft: 0,
  },
  {
     img: pillar2.src,
    title: 'Regulatory Navigation & Government <br/> Relations',
    description:
      '95% approval success rate, <i>policy advocacy</i>, and faster compliance.',
    marginleft: 15,
  },
  {
     img: pillar3.src,
    title: 'Operational Excellence & <em>Implementation</em>',
    description:
      'Build-Operate-Transfer execution model, <u>entity setup</u>, and end-to-end operations.',
    marginleft: 30,
  },
];

export default function Pillars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-wide text-[#18203A] mb-3">
            » PILLARS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#18203A]">
            The ECG Advantage <br />
            – <span className="text-yellow-600">Three Pillars</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            Built on strategic intelligence, regulatory mastery, and operational excellence.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="flex flex-col space-y-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ marginLeft: pillar.marginleft }}>
                <Card className="h-full shadow-sm hover:shadow-md transition-all duration-300 rounded-xl bg-white">
                  <CardContent className="flex gap-2 items-start p-4">
                    <div className="flex-shrink-0 w-16 h-18 overflow-hidden rounded-md pt-2">
                      
                       <img src={pillar.img} alt="" />
                      </div>
                    <div>
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-1"
                        dangerouslySetInnerHTML={{ __html: pillar.title }}
                      />
                      <p
                        className="text-gray-600 text-sm leading-6"
                        dangerouslySetInnerHTML={{ __html: pillar.description }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
