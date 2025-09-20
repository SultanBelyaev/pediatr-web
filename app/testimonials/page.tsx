import { Metadata } from 'next'
import TestimonialsHero from '@/components/TestimonialsHero'
import TestimonialsList from '@/components/TestimonialsList'
import AddTestimonial from '@/components/AddTestimonial'

export const metadata: Metadata = {
  title: 'Отзывы - Детский врач | Мнения родителей',
  description: 'Реальные отзывы родителей о работе детского врача-педиатра. Опыт лечения, консультаций и наблюдения за детьми.',
  keywords: 'отзывы педиатра, отзывы детского врача, мнения родителей, рекомендации',
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsList />
      <AddTestimonial />
    </>
  )
}
