import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold text-xl">П</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Али Муслимович</h3>
                <p className="text-gray-400">Педиатр</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Профессиональная медицинская помощь детям от 0 до 18 лет. 
              Индивидуальный подход к каждому ребенку и заботливое отношение к семье.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">+7 930 714 0303</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaTelegram className="w-4 h-4 text-primary-400" />
                <a href="https://t.me/Pashap1991" className="text-gray-300 hover:text-white transition-colors">@Pashap1991</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 text-primary-400" />
                <a href="https://wa.me/79307140303" className="text-gray-300 hover:text-white transition-colors">+7 930 714 0303</a>
              </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300">Персона. Нижний Новгород, Сибирская 3. Метро Стрелка</span>
                  </div>
              <div className="flex items-center space-x-3">
                <FaClock className="w-4 h-4 text-primary-400" />
                <div className="text-gray-300">
                  <div>Пн-Вс: 8:00-20:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Али Муслимович. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
