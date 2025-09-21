'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaHeart, FaBaby, FaUserMd } from 'react-icons/fa'

export default function TestimonialsList() {
  const testimonials = [
    {
      id: 1,
      name: 'Анонимный пользователь',
      child: 'родитель из Костромской области',
      rating: 5,
      date: '1 неделю назад',
      text: 'Никогда не писала отзывов ни об одном враче. Хотя с ребенком пришлось объехать очень много разных - не сосчитаю... К Али Муслимовичу обращаемся из Костромской области. Ребята, таких врачей, как говорят, днем с огнем не сыщешь! Профессионал! Умница! Всесторонне владеет информацией! Принял нас даже в отпуске, жертвуя своим временем! Огромная благодарность и низкий поклон доктору! Человек и врач с большой буквы!',
      service: 'Консультация педиатра',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      id: 2,
      name: 'Анонимный пользователь',
      child: 'родитель пациента',
      rating: 5,
      date: '1 месяц назад',
      text: 'Компетентный специалист. Отличный, внимательный врач и профессионал своего дела. Обязательно буду рекомендовать Магомедова Али Муслимовича своим знакомым и близким. Очень благодарны ему за выздоровления ребенка.',
      service: 'Лечение заболеваний',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      id: 3,
      name: 'Анонимный пользователь',
      child: 'родитель из Костромской области',
      rating: 5,
      date: '3 месяца назад',
      text: 'Никогда не писала отзывов ни об одном враче. Хотя с ребенком пришлось объехать очень много разных - не сосчитаю... К Али Муслимовичу обращаемся из Костромской области. Ребята, таких врачей, как говорят, днем с огнем не сыщешь! Профессионал! Умница!',
      service: 'Консультация педиатра',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      id: 4,
      name: 'Анонимный пользователь',
      child: 'родитель пациента',
      rating: 5,
      date: '2 месяца назад',
      text: 'Грамотный доктор (редкость). Рекомендую. Выслушает, к детям внимательный, осмотрит полностью, а не только жалобу.',
      service: 'Профилактический осмотр',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      id: 5,
      name: 'Анонимный пользователь',
      child: 'родитель пациента',
      rating: 5,
      date: '1 неделю назад',
      text: 'Хочу сказать огромное спасибо за то, как нас сегодня ночью принял этот врач! Спокойно, грамотно, внимательно и вежливо! Таких врачей я ещё не встречала! Несмотря на ночное время, ребёнок был осмотрен несколько раз, на все мои вопросы были даны ответы, и советы!',
      service: 'Экстренная помощь',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      id: 6,
      name: 'Анонимный пользователь',
      child: 'родитель пациента',
      rating: 5,
      date: '3 недели назад',
      text: 'Отличный врач. Лучший из участковых педиатров, которые нам попадались. Лечение недорогое, и главное, действенное. Ребёнок не боится к нему ходить, это очень важно.',
      service: 'Участковый педиатр',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    },
    {
      id: 7,
      name: 'Анонимный пользователь',
      child: 'родитель пациента',
      rating: 5,
      date: '2 месяца назад',
      text: 'Прекрасный врач, думающий, внимательный к деталям. Если назначает лечение, то он помнит всю вашу историю с начала времен и, будьте уверены, лечение будет индивидуально ваше. Лучший педиатр из тех, кто лечил моих детей.',
      service: 'Индивидуальное лечение',
      verified: true,
      source: 'https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/otzivi/'
    }
  ]

  const getServiceIcon = (service: string) => {
    if (service.includes('новорожденн')) return FaBaby
    if (service.includes('вакцин')) return FaUserMd
    return FaHeart
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
            Все отзывы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории семей, которые доверили мне здоровье своих детей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const ServiceIcon = getServiceIcon(testimonial.service)
            
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-all duration-300 relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-primary-200">
                  <FaQuoteLeft className="w-6 h-6" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      ✓ Проверен
                    </span>
                  )}
                </div>
                
                {/* Service */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <ServiceIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-sm text-primary-600 font-medium">{testimonial.service}</span>
                </div>
                
                {/* Text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <FaHeart className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.child}</div>
                    </div>
                  </div>
                  <a 
                    href={testimonial.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 hover:text-primary-700 transition-colors ml-2"
                  >
                    ПроДокторов →
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://prodoctorov.ru/nnovgorod/vrach/496615-magomedov/#rating"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Показать еще отзывы
          </a>
        </motion.div>
      </div>
    </section>
  )
}
