import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Approach from '@/components/Approach'

export const metadata: Metadata = {
  title: 'Обо мне - Детский врач | Педиатр с 15-летним опытом',
  description: 'Познакомьтесь с детским врачом-педиатром. Образование, опыт работы, подход к лечению детей. Более 15 лет практики в детской медицине.',
  keywords: 'педиатр, детский врач, опыт работы, образование, биография врача',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Education />
      <Experience />
      <Approach />
    </>
  )
}
