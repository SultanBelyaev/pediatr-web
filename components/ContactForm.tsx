'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaComment, FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    service: '',
    message: '',
    preferredContact: 'phone',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Консультация педиатра',
    'Профилактический осмотр',
    'Вакцинация',
    'Лечение ОРВИ',
    'Наблюдение новорожденного',
    'Консультация по питанию',
    'Другое'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        phone: '',
        email: '',
        childAge: '',
        service: '',
        message: '',
        preferredContact: 'phone',
        agreeToTerms: false
      })
    }, 3000)
  }

  if (submitStatus === 'success') {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPaperPlane className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-gray-600 mb-6">
                Спасибо за обращение! Я свяжусь с вами в течение 2 часов в рабочее время.
              </p>
              <div className="text-sm text-gray-500">
                Форма автоматически закроется через несколько секунд
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
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
            Записаться на прием
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните форму, и я свяжусь с вами для уточнения времени приема
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Имя Фамилия"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+7 (XXX) XXX-XX-XX"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Возраст ребенка
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Например: 2 года"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Услуга
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Опишите проблему или вопрос..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Предпочтительный способ связи
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Телефон</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="mr-3 mt-1"
                    />
                    <span className="text-sm text-gray-600">
                      Я согласен на обработку персональных данных и получение информации о записи *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Что происходит после отправки?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                    <span>Я получу вашу заявку и изучу информацию</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                    <span>Свяжусь с вами в течение 2 часов в рабочее время</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                    <span>Уточним удобное время для приема</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                    <span>Подтвердим запись и дам рекомендации</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Экстренные случаи
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Если у ребенка высокая температура, рвота, затрудненное дыхание — 
                  не ждите ответа на заявку, звоните сразу!
                </p>
                <a 
                  href="tel:+7XXXXXXXXXX" 
                  className="inline-block bg-red-600 text-white hover:bg-red-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  🚨 Экстренный вызов
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Конфиденциальность
                </h3>
                <p className="text-sm text-gray-600">
                  Вся информация о здоровье вашего ребенка строго конфиденциальна. 
                  Я соблюдаю врачебную тайну и не передаю данные третьим лицам.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
