import React from 'react';
import { CreditCard, ShoppingCart, UserCheck, Shield } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kомплекс С.И.²Л.А. въвежда нов метод на плащане!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Онлайн пазаруването е неразделна част от ежедневието ни. С напредъка на технологиите, все повече хора предпочитат да правят своите абонаменти от комфорта на дома си.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Новият метод за плащане е повече от лесен и приятен. Функцията е подходяща за нови и настоящи клиенти, които искат да улеснят подновяването или закупуването на абонамент чрез бърза и лесна поръчка.
          </p>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Купи онлайн лесно и бързо!
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Всичко, от което имаш нужда, е само на няколко клика разстояние!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <UserCheck className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Регистрация
            </h3>
            <p className="text-gray-600 text-center">
              Нужно е да си направите регистрация в my.complexsila.com
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Избор на услуга
            </h3>
            <p className="text-gray-600 text-center">
              Да си изберете услугата, която искате да закупите или подновите
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Сигурно плащане
            </h3>
            <p className="text-gray-600 text-center">
              Да платите сигурно и удобно, като пестите време
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
          <div className="flex items-start">
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                ВАЖНО!
              </h3>
              <p className="text-yellow-700">
                Всички клиенти, които закупят даден абонамент за първи път през онлайн портала, е необходимо при първото си посещение в комплекса, да се обърнат към рецепция, за да получат картата си за достъп или да им бъде валидирана старата. При ПОДНОВЯВАНЕ на абонамент през онлайн портала my.complexsila.com, клиентът не е длъжен да минава през рецепцията на комплекса. Картата ще бъде активирана автоматично след извършено онлайн плащане.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Отдай се на грижа за себе си – лесно, бързо и удобно!
          </h3>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <Shield className="h-5 w-5 text-green-600" />
            <p className="text-sm">
              Kомплекс С.И.²Л.А. гарантира разплащането да бъде максимално сигурно и запаметяването на всички лични данни и банкови детайли да остава под строг контрол.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Комплекс &quot;С.И.²Л.А.&quot;
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Ви предлага комплексно обслужване, адекватно на съвременния активен начин на живот, като осигурява висока удовлетвореност на своите клиенти.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Предоставяме Ви различни възможности за спортна, развлекателна и социална дейност чрез широка гама от конкурентни услуги.
            </p>
            <p className="text-lg text-gray-700">
              Разполагаме със собствен хотел &quot;Алианс&quot; 4* и ресторант &quot;Копчето&quot;, които се намират непосредствено близо до комплекса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
