import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedEventsSection from '@/components/home/FeaturedEventsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'RS Media Solution | Professional Event Planning',
  description: 'Make your events memorable with our professional event planning services',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturedEventsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}