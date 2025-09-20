'use client'

import { motion } from 'framer-motion'
import { FaCheck, FaTimes } from 'react-icons/fa'

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Разовая консультация',
      price: '3 000',
      period: 'за визит',
      description: 'Идеально для разовых обращений и консультаций',
      features: [
        'Полный осмотр ребенка',
        'Постановка диагноза',
        'Назначение лечения',
        'Рекомендации по уходу',
        'Справка о состоянии здоровья'
      ],
      notIncluded: [
        'Повторные консультации',
        'Консультации по телефону',
        'Срочные вызовы'
      ],
      popular: false
    },
    {
      name: 'Пакет "Здоровый малыш"',
      price: '8 000',
      period: 'в месяц',
      description: 'Комплексное наблюдение для детей до 2 лет',
      features: [
        '2 консультации в месяц',
        'Консультации по телефону',
        'Контроль развития',
        'Рекомендации по питанию',
        'Срочные консультации',
        'Справки и документы'
      ],
      notIncluded: [
        'Вакцинация',
        'Вызовы на дом'
      ],
      popular: true
    },
    {
      name: 'Пакет "Школьник"',
      price: '5 000',
      period: 'в месяц',
      description: 'Наблюдение для детей школьного возраста',
      features: [
        '1 консультация в месяц',
        'Консультации по телефону',
        'Профилактические осмотры',
        'Справки для школы/спорта',
        'Консультации по питанию'
      ],
      notIncluded: [
        'Лечение острых заболеваний',
        'Вакцинация',
        'Вызовы на дом'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    { name: 'Вакцинация', price: '1 500 ₽' },
    { name: 'Вызов на дом', price: '5 000 ₽' },
    { name: 'Консультация по видеосвязи', price: '2 000 ₽' },
    { name: 'Срочная консультация (в течение 2 часов)', price: '4 000 ₽' },
    { name: 'Медицинская справка', price: '1 000 ₽' },
    { name: 'Консультация в нерабочее время', price: '2 500 ₽' }
  ]

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
            Тарифы и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные цены без скрытых доплат. Выберите подходящий тарифный план
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card relative ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                    Включено:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <FaCheck className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <FaTimes className="w-4 h-4 text-red-500 mr-2" />
                    Не включено:
                  </h4>
                  <ul className="space-y-2">
                    {plan.notIncluded.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-500">
                        <FaTimes className="w-3 h-3 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className={`w-full mt-6 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                plan.popular 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
              }`}>
                Выбрать план
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Дополнительные услуги
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-900 font-medium">{service.name}</span>
                <span className="text-primary-600 font-bold">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary-50 rounded-xl text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Скидки и льготы
            </h4>
            <p className="text-gray-600 mb-4">
              Скидка 10% при оплате за 3 месяца вперед. 
              Льготы для многодетных семей и детей с инвалидностью.
            </p>
            <a href="/contacts" className="text-primary-600 hover:text-primary-700 font-medium">
              Узнать подробности →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
