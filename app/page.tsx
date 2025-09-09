import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CoreService from '@/components/Coreservice';
import Methodology from '@/components/Methodology';
import Global from '@/components/Global';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <CoreService/>
      <Methodology/>
      <Global/>
       
      <Footer />
    </main>
  );
}