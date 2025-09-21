'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTelegram } from 'react-icons/fa'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: FaPhone,
      title: 'Телефон',
      details: [
        'Основной: +7 930 714 0303',
        'Экстренный: +7 930 714 0303',
        'Время звонков: 8:00-20:00'
      ]
    },
    {
      icon: FaTelegram,
      title: 'Telegram',
      details: [
        '@Pashap1991',
        'Быстрые ответы',
        'Круглосуточно'
      ]
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: [
        '+7 930 714 0303',
        'Голосовые сообщения',
        'Круглосуточно'
      ]
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Адрес клиники',
      details: [
        'г. Москва, ул. Примерная, д. 1',
        'Метро: Примерная (5 мин пешком)',
        'Парковка: бесплатная'
      ]
    },
    {
      icon: FaClock,
      title: 'Режим работы',
      details: [
        'Понедельник - Пятница: 9:00-18:00',
        'Суббота: 9:00-14:00',
        'Воскресенье: выходной'
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
            Контактная информация
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все способы связи со мной и информация о клинике
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <contact.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {contact.title}
              </h3>
              
              <ul className="space-y-2">
                {contact.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
