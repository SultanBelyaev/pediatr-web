'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'С какого возраста принимаете детей?',
      answer: 'Я принимаю детей с рождения до 17 лет включительно. Для новорожденных доступен патронаж на дому.'
    },
    {
      question: 'Как записаться на прием?',
      answer: 'Записаться можно по телефону +7 (XXX) XXX-XX-XX, через форму на сайте или по электронной почте pediatr@example.com. Работаю по предварительной записи.'
    },
    {
      question: 'Возможен ли вызов на дом?',
      answer: 'Да, вызов на дом возможен для детей до 3 лет или в экстренных случаях. Стоимость вызова - 5 000 рублей в пределах города.'
    },
    {
      question: 'Какие документы нужно принести на прием?',
      answer: 'Принесите медицинскую карту ребенка, полис ОМС, паспорт родителя и результаты предыдущих анализов (если есть).'
    },
    {
      question: 'Проводите ли вакцинацию?',
      answer: 'Да, провожу плановую и дополнительную вакцинацию по индивидуальному календарю. Все вакцины сертифицированы и хранятся в соответствии с требованиями.'
    },
    {
      question: 'Можно ли получить консультацию по телефону?',
      answer: 'Да, консультации по телефону доступны для пациентов с пакетным обслуживанием. Экстренные консультации доступны всем пациентам.'
    },
    {
      question: 'Работаете ли в выходные дни?',
      answer: 'В субботу работаю с 9:00 до 14:00. Воскресенье - выходной. В экстренных случаях возможны консультации по телефону.'
    },
    {
      question: 'Какие методы оплаты принимаете?',
      answer: 'Принимаю наличные, банковские карты и переводы. Возможна оплата через СБП. Для пакетного обслуживания доступна рассрочка.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о моих услугах и работе
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Свяжитесь со мной любым удобным способом, и я обязательно отвечу на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacts" className="btn-primary">
                Задать вопрос
              </a>
              <a href="tel:+7XXXXXXXXXX" className="btn-secondary">
                Позвонить
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
