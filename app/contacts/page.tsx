import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Контакты - Детский врач | Записаться на прием',
  description: 'Свяжитесь с детским врачом-педиатром. Запись на прием, консультации, вызовы на дом. Телефон, email, адрес клиники.',
  keywords: 'контакты педиатра, запись на прием, телефон детского врача, адрес клиники',
}

export default function ContactsPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  )
}
