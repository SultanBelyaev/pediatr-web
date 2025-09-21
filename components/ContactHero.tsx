'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function ContactHero() {
  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Позвонить',
      description: 'Быстрая запись на прием',
      value: '+7 930 714 0303',
      action: 'tel:+79307140303',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaTelegram,
      title: 'Telegram',
      description: 'Написать в Telegram',
      value: '@Pashap1991',
      action: 'https://t.me/Pashap1991',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Написать в WhatsApp',
      value: '+7 930 714 0303',
      action: 'https://wa.me/79307140303',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Приехать',
      description: 'Посетить клинику',
      value: 'г. Москва, ул. Примерная, д. 1',
      action: '#map',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FaClock,
      title: 'Время работы',
      description: 'Когда я доступен',
      value: 'Пн-Пт: 9:00-18:00, Сб: 9:00-14:00',
      action: null,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь со мной
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите удобный способ связи. Я отвечу в течение 2 часов в рабочее время
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {method.description}
              </p>
              
              <p className="text-gray-900 font-medium mb-4">
                {method.value}
              </p>
              
              {method.action && (
                <a
                  href={method.action}
                  className={`inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    method.color.includes('green') 
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : method.color.includes('blue')
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : method.color.includes('purple')
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  {method.title}
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
