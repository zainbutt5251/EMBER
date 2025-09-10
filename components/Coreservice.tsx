// src/components/CoreServices.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import core1 from "../assets/core1.png";
import core2 from "../assets/core2.png";
import core3 from "../assets/core3.png";
import core4 from "../assets/core4.png";
const services = [
  {
    title: "Market Intelligence",
    desc: "Market assessment & opportunity sizing Competitive intelligence & positioning Regular insights",
    img: core1.src,
    dark: true,
  },
  {
    title: "Market Entry & Strategy",
    desc: "Entity structuring & establishment Product registration & launch roadmap",
    img: core2.src,
  },
  {
    title: "Growth & Partnerships",
    desc: "Strategic partnerships & channel optimization Route-to-market strategy & expansion",
    img: core3.src,
  },
  {
    title: "Operational Excellence",
    desc: "Build-operate-transfer implementation Outsourcing & optimization initiatives",
    img: core4.src,
  },
];

export default function CoreService() {
  return (
    <section className="w-full bg-[#f9f5ef] py-16 px-6 rounded-2xl">
      {/* Section Heading */}
      <div className="m-5 bg-[#EEE5D8] p-2 rounded-md py-5">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            » Services
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Core Service Solutions
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <Card
              key={i}
              className={`relative rounded-xl overflow-hidden shadow-md ${
                service.dark ? "bg-[#19223c] text-white" : "bg-white"
              }`}
            >
              <CardContent className="p-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full p-4  h-40 object-cover"
                />
                {/* Overlay circle button */}
                <div className="absolute top-36 left-1/2 transform -translate-x-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
                  <Plus className="w-5 h-5 text-gray-700" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-80">{service.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Button className="px-6 py-2 rounded-lg text-sm font-medium">
            View All →
          </Button>
        </div>
      </div>
    </section>
  );
}
