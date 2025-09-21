'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaBook, FaMicroscope, FaEye } from 'react-icons/fa'
import { useState } from 'react'

export default function Education() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const educationItems = [
    {
      icon: FaGraduationCap,
      title: 'Диплом специалиста по педиатрии',
      institution: 'ГБОУ ВПО «Нижегородская государственная медицинская академия» Министерства здравоохранения Российской Федерации',
      year: '2016',
      description: 'Специальность: 31.05.02 Педиатрия. Квалификация: Врач – педиатр общей практики. Диплом государственного образца.',
      documentImage: '/images/documents/diploma-specialist.jpg',
      documentType: 'Диплом специалиста'
    },
    {
      icon: FaCertificate,
      title: 'Диплом о профессиональной переподготовке',
      institution: 'Частное учреждение «Международная академия экспертизы и оценки»',
      year: '2019',
      description: 'Программа: «Инфекционные болезни». Квалификация: врач-инфекционист. Регистрационный номер: 2019/318-0192.',
      documentImage: '/images/documents/diploma-infectious.jpg',
      documentType: 'Диплом о переподготовке'
    },
    {
      icon: FaBook,
      title: 'Диплом об интернатуре',
      institution: 'ФГБОУ ВО «Нижегородская государственная медицинская академия» Министерства здравоохранения Российской Федерации',
      year: '2017',
      description: 'Послевузовское профессиональное образование (интернатура) по специальности «Педиатрия». Протокол № 527 от 27.06.2017.',
      documentImage: '/images/documents/diploma-internship.jpg',
      documentType: 'Диплом об интернатуре'
    },
    {
      icon: FaCertificate,
      title: 'Сертификат специалиста по педиатрии',
      institution: 'ООО «Межотраслевой Институт Госаттестации»',
      year: '2020',
      description: 'Сертификат специалиста по специальности «Педиатрия». Регистрационный номер: П-25169.',
      documentImage: '/images/documents/certificate-pediatrics.jpg',
      documentType: 'Сертификат специалиста'
    },
    {
      icon: FaMicroscope,
      title: 'Удостоверение о повышении квалификации',
      institution: 'ФБУН «Центральный НИИ эпидемиологии» Роспотребнадзора',
      year: '2019',
      description: 'Цикл: «Актуальные вопросы ВИЧ-инфекции». Объем: 144 часа. Эпидемиология, клиника, диагностика и лечение ВИЧ-инфекции.',
      documentImage: '/images/documents/certificate-hiv.jpg',
      documentType: 'Удостоверение о повышении квалификации'
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
            Образование и квалификация
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Постоянное совершенствование знаний и навыков — основа качественной медицинской помощи
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedDocument(item.documentImage)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-primary-600 font-medium">{item.year}</span>
                      <FaEye className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <p className="text-primary-600 font-medium mb-2">{item.institution}</p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                  
                  <div className="flex items-center text-xs text-gray-500 group-hover:text-primary-600 transition-colors duration-300">
                    <FaEye className="w-3 h-3 mr-1" />
                    <span>Нажмите для просмотра документа</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Непрерывное обучение
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ежегодно прохожу курсы повышения квалификации, участвую в медицинских конференциях 
            и семинарах. Слежу за последними достижениями в области педиатрии и детской медицины.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-3 py-1 rounded-full">Детская кардиология</span>
            <span className="bg-white px-3 py-1 rounded-full">Аллергология</span>
            <span className="bg-white px-3 py-1 rounded-full">Гастроэнтерология</span>
            <span className="bg-white px-3 py-1 rounded-full">Неврология</span>
            <span className="bg-white px-3 py-1 rounded-full">Иммунология</span>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно для просмотра документов */}
      {selectedDocument && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedDocument(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Просмотр документа
              </h3>
              <button
                onClick={() => setSelectedDocument(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 max-h-[80vh] overflow-auto">
              <img
                src={selectedDocument}
                alt="Документ об образовании"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex flex-col items-center justify-center py-12 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                          <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"></path>
                          </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Ошибка загрузки</h4>
                        <p class="text-gray-600">Не удалось загрузить изображение документа</p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
