'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaHeart } from 'react-icons/fa'

export default function TestimonialsHero() {
  const stats = [
    { number: '4.9', label: 'Средняя оценка' },
    { number: '150+', label: 'Отзывов' },
    { number: '98%', label: 'Рекомендуют' },
    { number: '5', label: 'Лет на сайте' }
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
            Отзывы родителей
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Мнения семей, которые доверили мне здоровье своих детей. 
            Каждый отзыв — это история заботы и доверия.
          </p>
          
          {/* Rating display */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">(150+ отзывов)</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute top-6 right-6 text-primary-200">
              <FaQuoteLeft className="w-12 h-12" />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="flex space-x-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">5 месяцев назад</span>
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
              "Доктор помогла нам с самого рождения дочки. Очень внимательная, всегда на связи, 
              дает подробные объяснения. Ребенок не боится врачей благодаря ее подходу. 
              Рекомендую всем родителям!"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <FaHeart className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Елена Козлова</div>
                <div className="text-sm text-gray-500">мама Алисы, 1 год</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
