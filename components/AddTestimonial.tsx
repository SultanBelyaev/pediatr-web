'use client'

import { motion } from 'framer-motion'
import { FaStar, FaHeart, FaExternalLinkAlt } from 'react-icons/fa'

export default function AddTestimonial() {
  const handleLeaveReview = () => {
    // Открываем страницу ПроДокторов в новой вкладке
    window.open('https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/#rating', '_blank')
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Поделитесь своим отзывом
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ваше мнение очень важно для нас и поможет другим родителям принять решение
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaStar className="w-10 h-10 text-primary-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Оставить отзыв на ПроДокторов
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Нажмите кнопку ниже, чтобы перейти на страницу врача на сайте ПроДокторов 
              и оставить свой отзыв. Это поможет другим родителям узнать о качестве 
              медицинских услуг.
            </p>

            <button
              onClick={handleLeaveReview}
              className="bg-primary-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-3 mx-auto text-lg"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              <span>Оставить отзыв на ПроДокторов</span>
            </button>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaHeart className="w-4 h-4 text-red-500" />
                  <span>Помогите другим родителям</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <span>Повысьте качество услуг</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}