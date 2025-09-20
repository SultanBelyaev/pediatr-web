'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaHeart, FaBaby, FaUserMd } from 'react-icons/fa'

export default function TestimonialsList() {
  const testimonials = [
    {
      id: 1,
      name: 'Анна Петрова',
      child: 'мама Маши, 3 года',
      rating: 5,
      date: '2 недели назад',
      text: 'Очень благодарна доктору за профессиональный подход. Маша перестала бояться врачей благодаря доброму отношению и терпению. Всегда подробно объясняет, что происходит с ребенком.',
      service: 'Консультация педиатра',
      verified: true
    },
    {
      id: 2,
      name: 'Михаил Соколов',
      child: 'папа Данила, 7 лет',
      rating: 5,
      date: '1 месяц назад',
      text: 'Доктор помог нам разобраться с проблемами пищеварения у сына. Очень внимательный специалист, всегда находит время для подробных объяснений. Рекомендую!',
      service: 'Лечение гастроэнтерологических проблем',
      verified: true
    },
    {
      id: 3,
      name: 'Елена Козлова',
      child: 'мама Алисы, 1 год',
      rating: 5,
      date: '3 месяца назад',
      text: 'Спасибо за наблюдение за нашей малышкой с самого рождения. Доктор всегда на связи, дает ценные советы по уходу и развитию ребенка. Очень довольны!',
      service: 'Наблюдение новорожденного',
      verified: true
    },
    {
      id: 4,
      name: 'Ольга Иванова',
      child: 'мама Максима, 5 лет',
      rating: 5,
      date: '2 месяца назад',
      text: 'Отличный врач! Помог быстро справиться с простудой у сына. Объяснил все простым языком, дал четкие рекомендации. Ребенок выздоровел быстро.',
      service: 'Лечение ОРВИ',
      verified: true
    },
    {
      id: 5,
      name: 'Сергей Волков',
      child: 'папа Софии, 4 года',
      rating: 5,
      date: '1 неделю назад',
      text: 'Очень профессиональный подход. Доктор не только лечит, но и объясняет родителям, как правильно ухаживать за ребенком. Дочка теперь с удовольствием идет к врачу.',
      service: 'Профилактический осмотр',
      verified: true
    },
    {
      id: 6,
      name: 'Мария Сидорова',
      child: 'мама Артема, 2 года',
      rating: 5,
      date: '3 недели назад',
      text: 'Благодарю за помощь в составлении рациона для малыша. Проблемы с аппетитом решились быстро. Очень довольна результатом и подходом врача.',
      service: 'Консультация по питанию',
      verified: true
    },
    {
      id: 7,
      name: 'Александр Морозов',
      child: 'папа Виктории, 6 лет',
      rating: 5,
      date: '2 месяца назад',
      text: 'Доктор провела вакцинацию дочери. Все прошло без проблем, ребенок даже не плакал. Очень аккуратно и профессионально. Спасибо!',
      service: 'Вакцинация',
      verified: true
    },
    {
      id: 8,
      name: 'Наталья Федорова',
      child: 'мама Дмитрия, 8 лет',
      rating: 5,
      date: '1 месяц назад',
      text: 'Обратились с аллергией у сына. Доктор подобрала правильное лечение, дала рекомендации по питанию. Результат превзошел ожидания!',
      service: 'Лечение аллергии',
      verified: true
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
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FaHeart className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.child}</div>
                  </div>
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
          <button className="btn-secondary">
            Показать еще отзывы
          </button>
        </motion.div>
      </div>
    </section>
  )
}
