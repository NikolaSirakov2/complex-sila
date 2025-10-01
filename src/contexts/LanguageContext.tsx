"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'BG' | 'EN';
  setLanguage: (language: 'BG' | 'EN') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  BG: {
    'nav.services': 'Услуги',
    'nav.gym': 'Спортна зала',
    'nav.events': 'Събития',
    'nav.kids': 'За деца',
    'nav.pricing': 'Цени',
    'nav.shop': 'Магазин',
    'carousel.innovation.title': 'Иновации',
    'carousel.innovation.subtitle': 'Креативни решения',
    'carousel.innovation.description': 'Иновативни технологии и креативни решения',
    'carousel.excellence.title': 'Превъзходство',
    'carousel.excellence.subtitle': 'Качествено обслужване',
    'carousel.excellence.description': 'Превъзходство във всеки проект, който предприемаме',
    'carousel.partnership.title': 'Партньорство',
    'carousel.partnership.subtitle': 'Доверено сътрудничество',
    'carousel.partnership.description': 'Вашият доверен партньор за иновативни решения',
    'carousel.growth.title': 'Растеж',
    'carousel.growth.subtitle': 'Напред към бъдещето',
    'carousel.growth.description': 'Превръщане на идеите в реалност',
    'carousel.success.title': 'Успех',
    'carousel.success.subtitle': 'Постижения',
    'carousel.success.description': 'Доставяне на изключителни резултати',
    'carousel.photoBy': 'Екип СИЛА',
    // Beams background content
    'beams.title': 'Kомплекс С.И.²Л.А. въвежда нов метод на плащане!',
    'beams.intro1': 'Онлайн пазаруването е неразделна част от ежедневието ни. С напредъка на технологиите, все повече хора предпочитат да правят своите абонаменти от комфорта на дома си.',
    'beams.intro2': 'Новият метод за плащане е повече от лесен и приятен. Функцията е подходяща за нови и настоящи клиенти, които искат да улеснят подновяването или закупуването на абонамент чрез бърза и лесна поръчка.',
    'beams.cta.title': 'Купи онлайн лесно и бързо!',
    'beams.cta.subtitle': 'Всичко, от което имаш нужда, е само на няколко клика разстояние!',
    'beams.step1.title': 'Регистрация',
    'beams.step1.desc': 'Нужно е да си направите регистрация в my.complexsila.com',
    'beams.step2.title': 'Избор на услуга',
    'beams.step2.desc': 'Да си изберете услугата, която искате да закупите или подновите',
    'beams.step3.title': 'Сигурно плащане',
    'beams.step3.desc': 'Да платите сигурно и удобно, като пестите време',
    'beams.warning.title': 'ВАЖНО!',
    'beams.warning.text': 'Всички клиенти, които закупят даден абонамент за първи път през онлайн портала, е необходимо при първото си посещение в комплекса, да се обърнат към рецепция, за да получат картата си за достъп или да им бъде валидирана старата. При ПОДНОВЯВАНЕ на абонамент през онлайн портала my.complexsila.com, клиентът не е длъжен да минава през рецепцията на комплекса. Картата ще бъде активирана автоматично след извършено онлайн плащане.',
    'beams.guarantee.title': 'Отдай се на грижа за себе си – лесно, бързо и удобно!',
    'beams.guarantee.text': 'Kомплекс С.И.²Л.А. гарантира разплащането да бъде максимално сигурно и запаметяването на всички лични данни и банкови детайли да остава под строг контрол.',
    'beams.company.title': 'Комплекс "С.И.²Л.А."',
    'beams.company.desc1': 'Ви предлага комплексно обслужване, адекватно на съвременния активен начин на живот, като осигурява висока удовлетвореност на своите клиенти.',
    'beams.company.desc2': 'Предоставяме Ви различни възможности за спортна, развлекателна и социална дейност чрез широка гама от конкурентни услуги.',
    'beams.company.desc3': 'Разполагаме със собствен хотел "Алианс" 4* и ресторант "Копчето", които се намират непосредствено близо до комплекса.',
    // About section
    'about.title': 'Защо да изберете Комплекс С.И.²Л.А.?',
    'about.noContract': 'Ние не ви обвързваме с договор - може да изберете между 1,3,6-месечен или годишен абонамент и да го подновите когато пожелаете.',
    'about.diversity': 'При нас разнообразието от услуги и пакети е голямо: няма друго място, на което да можете да комбинирате фитнес, спа, басейн, групови тренировки, наем на спортни терени, тенис и айкидо тренировки.',
    'about.kidsCorner': 'Ние сме единственият комплекс, който разполага с детски кът, където да оставите децата си да се забавляват, докато вие спортувате или релаксирате.',
    'about.kidsTraining': 'Тук имаме тренировки и за вашето дете: тенис, айкидо и плуване',
    'about.parking': 'Денонощният охраняем паркинг е на разположение на наши и външни клиенти, като всички абонати имат включени часове паркинг към картите си за фитнес, спа и басейн.',
    'about.visit': 'Можем да ви разкажем още много, но предпочитаме това да стане на място - заповядайте и нашите отзивчиви рецепционисти ще ви разведат из комплекса, за да придобиете представа кои сме ние и какво предлагаме.',
    // Testimonials section
    'testimonials.title': 'Какво казват нашите клиенти',
    'testimonials.subtitle': 'Нека не само ние говорим за нас. Ето какво казват нашите доволни клиенти за преживяването си с нас.',
    // Video section
    'video.title': 'Вижте нашия комплекс',
    'video.subtitle': 'Запознайте се с нашите съоръжения и услуги чрез този видео тур',
    // Footer section
    'footer.description': 'Ние сме екип от страстни разработчици, дизайнери и иноватори, посветени на създаването на изключителни дигитални преживявания за бизнеси по целия свят.',
    'footer.services': 'Услуги',
    'footer.company': 'Компания',
    'footer.support': 'Поддръжка',
    'footer.webDevelopment': 'Уеб разработка',
    'footer.mobileApps': 'Мобилни приложения',
    'footer.cloudSolutions': 'Облачни решения',
    'footer.consulting': 'Консултации',
    'footer.uiUxDesign': 'UI/UX дизайн',
    'footer.aboutUs': 'За нас',
    'footer.ourTeam': 'Нашият екип',
    'footer.careers': 'Кариери',
    'footer.blog': 'Блог',
    'footer.press': 'Прес',
    'footer.helpCenter': 'Център за помощ',
    'footer.contactUs': 'Свържете се с нас',
    'footer.privacyPolicy': 'Политика за поверителност',
    'footer.termsOfService': 'Условия за ползване',
    'footer.cookiePolicy': 'Политика за бисквитки',
    'footer.stayUpdated': 'Останете информирани',
    'footer.newsletterText': 'Абонирайте се за нашия бюлетин за най-новите актуализации и прозрения.',
    'footer.emailPlaceholder': 'Въведете вашия имейл',
    'footer.subscribe': 'Абониране',
    'footer.copyright': 'Всички права запазени.',
    'footer.allRightsReserved': 'Всички права запазени.'
  },
  EN: {
    'nav.services': 'Services',
    'nav.gym': 'Gym',
    'nav.events': 'Events',
    'nav.kids': 'Kids',
    'nav.pricing': 'Pricing',
    'nav.shop': 'Shop',
    'carousel.innovation.title': 'Innovation',
    'carousel.innovation.subtitle': 'Creative Solutions',
    'carousel.innovation.description': 'Innovative technology and creative solutions',
    'carousel.excellence.title': 'Excellence',
    'carousel.excellence.subtitle': 'Quality Service',
    'carousel.excellence.description': 'Excellence in every project we undertake',
    'carousel.partnership.title': 'Partnership',
    'carousel.partnership.subtitle': 'Trusted Collaboration',
    'carousel.partnership.description': 'Your trusted partner for innovative solutions',
    'carousel.growth.title': 'Growth',
    'carousel.growth.subtitle': 'Future Forward',
    'carousel.growth.description': 'Transforming ideas into reality',
    'carousel.success.title': 'Success',
    'carousel.success.subtitle': 'Achievement',
    'carousel.success.description': 'Delivering exceptional results',
    'carousel.photoBy': 'Sila Team',
    // Beams background content
    'beams.title': 'Complex S.I.²L.A. introduces a new payment method!',
    'beams.intro1': 'Online shopping is an integral part of our daily lives. With the advancement of technology, more and more people prefer to make their subscriptions from the comfort of their homes.',
    'beams.intro2': 'The new payment method is more than easy and pleasant. The function is suitable for new and existing clients who want to facilitate the renewal or purchase of a subscription through a quick and easy order.',
    'beams.cta.title': 'Buy online easily and quickly!',
    'beams.cta.subtitle': 'Everything you need is just a few clicks away!',
    'beams.step1.title': 'Registration',
    'beams.step1.desc': 'You need to register at my.complexsila.com',
    'beams.step2.title': 'Service Selection',
    'beams.step2.desc': 'Choose the service you want to purchase or renew',
    'beams.step3.title': 'Secure Payment',
    'beams.step3.desc': 'Pay securely and conveniently, saving time',
    'beams.warning.title': 'IMPORTANT!',
    'beams.warning.text': 'All clients who purchase a subscription for the first time through the online portal must contact the reception upon their first visit to the complex to receive their access card or to have their old one validated. When RENEWING a subscription through the online portal my.complexsila.com, the client is not obliged to go through the reception of the complex. The card will be activated automatically after the online payment is made.',
    'beams.guarantee.title': 'Dedicate yourself to self-care – easy, fast and convenient!',
    'beams.guarantee.text': 'Complex S.I.²L.A. guarantees that the payment will be maximally secure and the storage of all personal data and bank details will remain under strict control.',
    'beams.company.title': 'Complex "S.I.²L.A."',
    'beams.company.desc1': 'Offers you comprehensive service, adequate to the modern active lifestyle, ensuring high satisfaction of its clients.',
    'beams.company.desc2': 'We provide you with various opportunities for sports, entertainment and social activities through a wide range of competitive services.',
    'beams.company.desc3': 'We have our own "Alliance" 4* hotel and "Kopcheto" restaurant, which are located immediately near the complex.',
    // About section
    'about.title': 'Why choose Complex S.I.²L.A.?',
    'about.noContract': 'We do not bind you with a contract - you can choose between 1, 3, 6-month or annual subscription and renew it whenever you wish.',
    'about.diversity': 'The diversity of services and packages with us is great: there is no other place where you can combine fitness, spa, pool, group training, sports court rental, tennis and aikido training.',
    'about.kidsCorner': 'We are the only complex that has a children\'s corner where you can leave your children to have fun while you exercise or relax.',
    'about.kidsTraining': 'Here we have training for your child too: tennis, aikido and swimming',
    'about.parking': '24-hour guarded parking is available to our and external clients, with all subscribers having parking hours included in their fitness, spa and pool cards.',
    'about.visit': 'We can tell you much more, but we prefer this to happen on site - come and our responsive receptionists will take you around the complex so you can get an idea of who we are and what we offer.',
    // Testimonials section
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what our satisfied customers have to say about their experience with us.',
    // Video section
    'video.title': 'See Our Complex',
    'video.subtitle': 'Get acquainted with our facilities and services through this video tour',
    // Footer section
    'footer.description': 'We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences for businesses worldwide.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.webDevelopment': 'Web Development',
    'footer.mobileApps': 'Mobile Apps',
    'footer.cloudSolutions': 'Cloud Solutions',
    'footer.consulting': 'Consulting',
    'footer.uiUxDesign': 'UI/UX Design',
    'footer.aboutUs': 'About Us',
    'footer.ourTeam': 'Our Team',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.press': 'Press',
    'footer.helpCenter': 'Help Center',
    'footer.contactUs': 'Contact Us',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.stayUpdated': 'Stay Updated',
    'footer.newsletterText': 'Subscribe to our newsletter for the latest updates and insights.',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': 'All rights reserved.',
    'footer.allRightsReserved': 'All rights reserved.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'BG' | 'EN'>('BG');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
