import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Услуги и цены - Детский врач | Консультации педиатра',
  description: 'Полный спектр медицинских услуг для детей. Консультации, лечение, вакцинация, профилактические осмотры. Прозрачные цены и качественная помощь.',
  keywords: 'услуги педиатра, цены, консультация детского врача, лечение детей, вакцинация',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Pricing />
      <FAQ />
    </>
  )
}
