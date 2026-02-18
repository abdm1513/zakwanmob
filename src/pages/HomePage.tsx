import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CTA } from '../components/home/CTA';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTA />
    </main>
  );
};