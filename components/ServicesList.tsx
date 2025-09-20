'use client'

import { motion } from 'framer-motion'
import { FaStethoscope, FaSyringe, FaHeartbeat, FaBaby, FaThermometer, FaPills, FaUserMd, FaFileMedical } from 'react-icons/fa'

export default function ServicesList() {
  const serviceCategories = [
    {
      title: 'Консультации и осмотры',
      services: [
        {
          icon: FaStethoscope,
          title: 'Первичная консультация педиатра',
          description: 'Полное обследование ребенка, сбор анамнеза, постановка диагноза, назначение лечения',
          duration: '60 мин',
          price: '3 000 ₽'
        },
        {
          icon: FaUserMd,
          title: 'Повторная консультация',
          description: 'Контрольный осмотр, оценка эффективности лечения, корректировка назначений',
          duration: '30 мин',
          price: '2 000 ₽'
        },
        {
          icon: FaHeartbeat,
          title: 'Профилактический осмотр',
          description: 'Плановый осмотр здорового ребенка, оценка физического и нервно-психического развития',
          duration: '45 мин',
          price: '2 500 ₽'
        }
      ]
    },
    {
      title: 'Специализированные услуги',
      services: [
        {
          icon: FaBaby,
          title: 'Наблюдение новорожденных',
          description: 'Патронаж на дому, консультации по уходу за малышом, контроль набора веса',
          duration: '90 мин',
          price: '4 000 ₽'
        },
        {
          icon: FaSyringe,
          title: 'Вакцинация',
          description: 'Плановые и дополнительные прививки по индивидуальному календарю',
          duration: '30 мин',
          price: '1 500 ₽'
        },
        {
          icon: FaThermometer,
          title: 'Лечение ОРВИ и простуд',
          description: 'Диагностика и лечение острых респираторных заболеваний, контроль температуры',
          duration: '45 мин',
          price: '2 000 ₽'
        },
        {
          icon: FaPills,
          title: 'Консультации по питанию',
          description: 'Составление рациона, рекомендации по прикорму, решение проблем с аппетитом',
          duration: '60 мин',
          price: '2 500 ₽'
        }
      ]
    },
    {
      title: 'Дополнительные услуги',
      services: [
        {
          icon: FaFileMedical,
          title: 'Справки и документы',
          description: 'Медицинские справки для детского сада, школы, спортивных секций',
          duration: '15 мин',
          price: '1 000 ₽'
        },
        {
          icon: FaStethoscope,
          title: 'Консультация по телефону',
          description: 'Экстренная консультация по телефону в нерабочее время',
          duration: '15 мин',
          price: '1 500 ₽'
        }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {category.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>⏱️ {service.duration}</span>
                    <span className="text-primary-600 font-semibold">{service.price}</span>
                  </div>
                  
                  <button className="w-full bg-primary-50 text-primary-600 hover:bg-primary-100 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Записаться
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Не нашли нужную услугу?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Свяжитесь со мной, и я подберу индивидуальное решение для вашего ребенка. 
            Возможны консультации по видеосвязи и выезд на дом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacts" className="btn-primary">
              Связаться со мной
            </a>
            <a href="tel:+7XXXXXXXXXX" className="btn-secondary">
              Позвонить сейчас
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
