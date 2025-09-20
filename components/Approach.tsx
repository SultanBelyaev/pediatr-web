'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaUserFriends, FaShieldAlt, FaLightbulb, FaHandHoldingHeart, FaComments } from 'react-icons/fa'

export default function Approach() {
  const principles = [
    {
      icon: FaHeart,
      title: 'Заботливый подход',
      description: 'Каждый ребенок уникален. Я создаю комфортную атмосферу, чтобы дети не боялись врачей.',
      details: [
        'Использую игровые элементы в общении с детьми',
        'Объясняю все процедуры простым языком',
        'Учитываю индивидуальные особенности ребенка'
      ]
    },
    {
      icon: FaUserFriends,
      title: 'Работа с семьей',
      description: 'Здоровье ребенка — результат совместной работы врача и родителей.',
      details: [
        'Подробно объясняю родителям все аспекты лечения',
        'Обучаю правильному уходу за ребенком',
        'Всегда на связи для консультаций'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Безопасность и качество',
      description: 'Строго следую медицинским протоколам и стандартам безопасности.',
      details: [
        'Использую только проверенные методы лечения',
        'Соблюдаю все санитарные нормы',
        'Постоянно повышаю квалификацию'
      ]
    },
    {
      icon: FaLightbulb,
      title: 'Современные методы',
      description: 'Применяю последние достижения медицины для точной диагностики и эффективного лечения.',
      details: [
        'Использую современное диагностическое оборудование',
        'Слежу за новинками в педиатрии',
        'Применяю доказательную медицину'
      ]
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Профилактика',
      description: 'Предотвращение заболеваний важнее их лечения. Уделяю особое внимание профилактике.',
      details: [
        'Составляю индивидуальные планы вакцинации',
        'Даю рекомендации по питанию и режиму',
        'Провожу профилактические осмотры'
      ]
    },
    {
      icon: FaComments,
      title: 'Открытое общение',
      description: 'Честно и понятно отвечаю на все вопросы родителей о здоровье ребенка.',
      details: [
        'Объясняю диагнозы простым языком',
        'Обсуждаю все варианты лечения',
        'Учитываю пожелания родителей'
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Мой подход к работе
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Принципы, которыми я руководствуюсь в своей медицинской практике
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <principle.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {principle.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {principle.description}
              </p>
              
              <ul className="space-y-2">
                {principle.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Моя миссия
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Обеспечить каждому ребенку качественную медицинскую помощь, основанную на современных 
            научных данных, с заботой и пониманием. Помочь родителям вырастить здоровых и счастливых детей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacts" className="btn-primary">
              Записаться на консультацию
            </a>
            <a href="/services" className="btn-secondary">
              Посмотреть услуги
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
