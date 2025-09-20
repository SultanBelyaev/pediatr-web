'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы записаться на консультацию?
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь со мной удобным способом или заполните форму обратной связи. 
            Я отвечу в течение 2 часов в рабочее время.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <FaPhone className="w-8 h-8 mx-auto mb-4 text-primary-200" />
              <h3 className="font-semibold mb-2">Позвонить</h3>
              <p className="text-sm opacity-90 mb-4">+7 (XXX) XXX-XX-XX</p>
              <a 
                href="tel:+7XXXXXXXXXX" 
                className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Позвонить
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <FaEnvelope className="w-8 h-8 mx-auto mb-4 text-primary-200" />
              <h3 className="font-semibold mb-2">Написать</h3>
              <p className="text-sm opacity-90 mb-4">pediatr@example.com</p>
              <a 
                href="mailto:pediatr@example.com" 
                className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Написать
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <FaCalendarAlt className="w-8 h-8 mx-auto mb-4 text-primary-200" />
              <h3 className="font-semibold mb-2">Записаться</h3>
              <p className="text-sm opacity-90 mb-4">Онлайн форма</p>
              <Link 
                href="/contacts" 
                className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Записаться
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Заполнить форму записи
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Узнать больше о враче
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
