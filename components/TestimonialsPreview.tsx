'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Анна Петрова',
      child: 'мама Маши, 3 года',
      text: 'Очень благодарна доктору за профессиональный подход. Маша перестала бояться врачей благодаря доброму отношению и терпению. Рекомендую всем родителям!',
      rating: 5
    },
    {
      name: 'Михаил Соколов',
      child: 'папа Данила, 7 лет',
      text: 'Доктор помог нам разобраться с проблемами пищеварения у сына. Очень внимательный специалист, всегда находит время для подробных объяснений.',
      rating: 5
    },
    {
      name: 'Елена Козлова',
      child: 'мама Алисы, 1 год',
      text: 'Спасибо за наблюдение за нашей малышкой с самого рождения. Доктор всегда на связи, дает ценные советы по уходу и развитию ребенка.',
      rating: 5
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
            Отзывы родителей
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения семей, которые доверили нам здоровье своих детей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card relative"
            >
              <div className="absolute top-6 right-6 text-primary-200">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.child}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/testimonials" className="btn-secondary text-lg px-8 py-4">
            Читать все отзывы
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
