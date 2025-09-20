// Аналитика и метрики для сайта педиатра

// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Отслеживание просмотров страниц
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Отслеживание событий
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Специфичные события для медицинского сайта
export const trackAppointmentRequest = (method: 'form' | 'phone' | 'email') => {
  event({
    action: 'appointment_request',
    category: 'engagement',
    label: method,
  })
}

export const trackServiceView = (service: string) => {
  event({
    action: 'service_view',
    category: 'content',
    label: service,
  })
}

export const trackTestimonialSubmit = () => {
  event({
    action: 'testimonial_submit',
    category: 'engagement',
    label: 'testimonial_form',
  })
}

export const trackContactFormSubmit = () => {
  event({
    action: 'contact_form_submit',
    category: 'lead_generation',
    label: 'contact_form',
  })
}

// Yandex Metrica (альтернатива Google Analytics)
export const YANDEX_METRICA_ID = process.env.NEXT_PUBLIC_YM_ID || ''

// Facebook Pixel для рекламных кампаний
export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''

// Отслеживание конверсий
export const trackConversion = (conversionType: 'appointment' | 'contact' | 'testimonial') => {
  // Google Analytics
  event({
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: 1,
  })

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: conversionType,
    })
  }
}

// Отслеживание времени на странице
export const trackTimeOnPage = (page: string, timeInSeconds: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: page,
    value: timeInSeconds,
  })
}

// Отслеживание кликов по CTA
export const trackCTAClick = (ctaText: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaText}_${location}`,
  })
}

// Отслеживание просмотра отзывов
export const trackTestimonialView = (testimonialId: string) => {
  event({
    action: 'testimonial_view',
    category: 'content',
    label: testimonialId,
  })
}

// Отслеживание скачивания документов
export const trackDocumentDownload = (documentName: string) => {
  event({
    action: 'document_download',
    category: 'engagement',
    label: documentName,
  })
}

// Отслеживание ошибок форм
export const trackFormError = (formName: string, errorType: string) => {
  event({
    action: 'form_error',
    category: 'error',
    label: `${formName}_${errorType}`,
  })
}

// Отслеживание мобильного трафика
export const trackMobileUsage = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    event({
      action: 'mobile_usage',
      category: 'device',
      label: 'mobile',
    })
  }
}

// Функция gtag для Google Analytics
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(args)
  }
}

// Инициализация аналитики
export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (GA_TRACKING_ID) {
      window.dataLayer = window.dataLayer || []
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', GA_TRACKING_ID, {
        page_path: window.location.pathname,
      })
    }

    // Yandex Metrica
    if (YANDEX_METRICA_ID) {
      const script = document.createElement('script')
      script.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${YANDEX_METRICA_ID}, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `
      document.head.appendChild(script)
    }

    // Facebook Pixel
    if (FACEBOOK_PIXEL_ID) {
      const script = document.createElement('script')
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FACEBOOK_PIXEL_ID}');
        fbq('track', 'PageView');
      `
      document.head.appendChild(script)
    }
  }
}

// Типы для TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
    fbq: (...args: any[]) => void
    ym: (...args: any[]) => void
  }
}
