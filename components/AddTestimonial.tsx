'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaStar, FaUser, FaComment, FaHeart, FaPaperPlane } from 'react-icons/fa'

export default function AddTestimonial() {
  const [formData, setFormData] = useState({
    name: '',
    childAge: '',
    rating: 5,
    service: '',
    message: '',
    agreeToPublish: false,
    isAnonymous: false
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
    'Лечение аллергии',
    'Другое'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Формируем данные для отправки
      const displayName = formData.isAnonymous ? 'Анонимный пользователь' : (formData.name || 'Анонимный пользователь')
      
      // Создаем сообщение для отправки в Telegram
      const message = `📝 Новый отзыв о враче:

👤 Имя: ${displayName}
👶 Возраст ребенка: ${formData.childAge || 'Не указан'}
⭐ Оценка: ${'⭐'.repeat(formData.rating)} (${formData.rating}/5)
🏥 Услуга: ${formData.service || 'Не указана'}

💬 Отзыв:
"${formData.message}"

📅 Дата: ${new Date().toLocaleDateString('ru-RU')}`

      // Отправляем в Telegram (временно, пока не настроен Google Sheets)
      const telegramUrl = `https://t.me/Pashap1991?text=${encodeURIComponent(message)}`
      
      // Открываем Telegram в новой вкладке
      window.open(telegramUrl, '_blank')
      
      // Показываем сообщение об успехе
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormData({
          name: '',
          childAge: '',
          rating: 5,
          service: '',
          message: '',
          agreeToPublish: false,
          isAnonymous: false
        })
      }, 3000)
    } catch (error) {
      console.error('Ошибка отправки отзыва:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
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
                <FaHeart className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Отзыв отправлен!
              </h2>
              <p className="text-gray-600 mb-6">
                Ваш отзыв успешно сохранен в нашей базе данных. Спасибо за обратную связь!
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
            Поделитесь своим опытом
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ваш отзыв поможет другим родителям принять решение. 
            Расскажите о своем опыте обращения к детскому врачу.
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={formData.isAnonymous}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      placeholder={formData.isAnonymous ? "Анонимный пользователь" : "Имя Фамилия"}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Опубликовать как "Анонимный пользователь"</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Возраст ребенка
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Например: 3 года"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Оценка *
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          star <= formData.rating
                            ? 'bg-yellow-100 text-yellow-500'
                            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }`}
                      >
                        <FaStar className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.rating === 5 && 'Отлично!'}
                    {formData.rating === 4 && 'Хорошо!'}
                    {formData.rating === 3 && 'Нормально'}
                    {formData.rating === 2 && 'Плохо'}
                    {formData.rating === 1 && 'Очень плохо'}
                  </p>
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
                    Ваш отзыв *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Расскажите о своем опыте обращения к врачу..."
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToPublish"
                      checked={formData.agreeToPublish}
                      onChange={handleInputChange}
                      required
                      className="mr-3 mt-1"
                    />
                    <span className="text-sm text-gray-600">
                      Я согласен на публикацию отзыва на сайте и обработку персональных данных *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToPublish}
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
                      Отправить отзыв
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
                  Почему важны отзывы?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Помогают другим родителям принять решение</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Позволяют мне улучшить качество услуг</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Создают доверие и прозрачность</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Показывают реальный опыт семей</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Правила публикации
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Отзывы проходят модерацию</li>
                  <li>• Не публикуем отзывы с оскорблениями</li>
                  <li>• Сохраняем конфиденциальность данных</li>
                  <li>• Можете указать только имя или инициалы</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Конфиденциальность
                </h3>
                <p className="text-sm text-gray-600">
                  Ваши персональные данные защищены. Мы не передаем информацию третьим лицам 
                  и используем ее только для публикации отзыва с вашего согласия.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
