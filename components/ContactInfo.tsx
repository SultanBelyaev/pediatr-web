'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa'

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

  const socialMedia = [
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/79307140303',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: FaTelegram,
      name: 'Telegram',
      url: 'https://t.me/Pashap1991',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: '#',
      color: 'bg-pink-500 hover:bg-pink-600'
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Социальные сети
              </h3>
              <p className="text-gray-600 mb-6">
                Следите за полезными советами по здоровью детей, 
                новостями клиники и ответами на частые вопросы
              </p>
              
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Полезная информация
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>При первом визите принесите медицинскую карту ребенка</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Запись ведется за 1-2 дня до приема</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Возможна отмена записи за 2 часа до приема</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>В клинике есть детская комната ожидания</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
