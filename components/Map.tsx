'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaDirections, FaPhone, FaClock } from 'react-icons/fa'

export default function Map() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Как нас найти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Клиника находится в центре города с удобной транспортной доступностью
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Интерактивная карта</p>
                <p className="text-sm text-gray-500">г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
            
            {/* Map overlay info */}
            <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium">Клиника "Детский врач"</span>
              </div>
            </div>
          </motion.div>

          {/* Location info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Адрес и контакты
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Адрес клиники</p>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-gray-500">Вход со двора, 2-й этаж</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaPhone className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Телефон</p>
                    <p className="text-gray-600">+7 930 714 0303</p>
                    <p className="text-sm text-gray-500">Рабочие дни: 8:00-20:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaClock className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Режим работы</p>
                    <p className="text-gray-600">Пн-Вс: 8:00-20:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Как добраться
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-900">На метро</p>
                    <p className="text-sm text-gray-600">Станция "Примерная" (5 минут пешком)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-900">На автомобиле</p>
                    <p className="text-sm text-gray-600">Бесплатная парковка во дворе</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-900">Общественный транспорт</p>
                    <p className="text-sm text-gray-600">Автобусы № 1, 5, 10 (остановка "Примерная")</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center space-x-2 bg-primary-600 text-white hover:bg-primary-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <FaDirections className="w-4 h-4" />
                <span>Построить маршрут</span>
              </a>
              <a
                href="tel:+79307140303"
                className="flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg border-2 border-primary-600 transition-colors duration-200"
              >
                <FaPhone className="w-4 h-4" />
                <span>Позвонить</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
