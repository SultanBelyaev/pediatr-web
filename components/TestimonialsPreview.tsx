'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Анонимный пользователь',
      child: 'мама сына, 2,5 года',
      text: 'Очень добрый и внимательный врач и к детям и, что немаловажно, к взволнованным, нервным порой, родителям. Наш сын, 2,5 года, всегда с радостью идет на прием, сейчас пытается выговаривать Али Муслимович. Приятно видеть, как у врача есть контакт с твоим ребенком.',
      rating: 5,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      name: 'Анонимный пользователь',
      child: 'родитель пациента',
      text: 'Компетентный специалист. Отличный, внимательный врач и профессионал своего дела. Обязательно буду рекомендовать Магомедова Али Муслимовича своим знакомым и близким. Очень благодарны ему за выздоровления ребенка.',
      rating: 5,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      name: 'Анонимный пользователь',
      child: 'родитель из Костромской области',
      text: 'Никогда не писала отзывов ни об одном враче. Хотя с ребенком пришлось объехать очень много разных - не сосчитаю... К Али Муслимовичу обращаемся из Костромской области. Ребята, таких врачей, как говорят, днем с огнем не сыщешь! Профессионал! Умница!',
      rating: 5,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
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
                <div className="text-sm text-gray-500 mb-2">{testimonial.child}</div>
                <a 
                  href={testimonial.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Читать на ПроДокторов →
                </a>
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
