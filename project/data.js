export const price = 28 * 4.99
export const lang = 'ru'
export const emion = {
    tests: 200
}
export const DATA = {
    companies_id: 1,
    password: 'motichs2021',
    pay: price,
    money: 0.95, 
    telegram: 'https://t.me/+Rs1iX46Lw_euN2Ra',
    name: 'MOTICH IT PRO',
    phone: '+380979151281',
    phoneView: '+38(097)91 51 281',
    welcome: 'Добро пожаловать на онлайн-платформу MOTICH IT PRO!',
    about: `
        <p>Вы приняли очень важное решение в своей жизни - Вы захотели стать топовым IT-специалистом</p>
        <p><b>Кто такой программист?</b></p>
        <p>Это человек, который постоянно стремится к самосовершенству. Профессия программиста - это увлекательный мир в котором очень много информации. И одна из важных единиц измерения в жизни - это время.</p>
        <p>Купив подписку на платформе MOTICH IT PRO Вы сохранили свой самый ценный ресурс</p>
        <p>Теперь Все в наших руках - готовы сделать прорыв в своей жизни и получить самую топовую профессию в 2022 году?</p>
        <p><b>Тогда вперед к Успеху вместе с MOTICH IT PRO!</b></p>
    `,
    about3: 'Нажимая на кнопку <span style="font-weight: 500; font-style: italic">“Подписаться”</span>, Вы соглашаетесь с условиями пользователя и политикой конфиденциальности, далее Вам предложат <a href="/ru/auth/register" style="text-decoration: underline; font-weight: 500; cursor: pointer">закончить регистрацию</a> на сайте и <a href="" style="text-decoration: underline; cursor: pointer; font-weight: 500">оплатить</a> выбранный тариф. после этого Вам будут доступны <span style="font-weight: 600">абсолютно все</span> материалы нашей образовательной платформы. ',
    respect: 'С уважением, команда MOTICH IT PRO.',
    teachers: [
        {
            name: 'АВ'
        },
    ],
    prices: {
        standard: {
            name: lang === 'ru' ? 'Подписка на платформу' : 'Підписка на платформу',
            periods: [
                {
                    sale: price,
                    price: Math.floor(price * 2.2),
                    mounth: 1
                },
                {
                    sale: Math.floor(price * 3 * 0.935),
                    price: Math.floor(price * 3 * 0.935 * 2.2),
                    mounth: 3
                },
                {
                    sale: Math.floor(price * 6 * 0.891),
                    price: Math.floor(price * 6 * 0.891 * 2.2),
                    mounth: 6
                },
                {
                    sale: Math.floor(price * 12 * 0.841),
                    price: Math.floor(price * 12 * 0.841 * 2.2),
                    mounth: 12
                },
            ]
        },
        premium: {
            name: 'Premium',
            periods: [{
                sale: 999,
                price: 2240,
                mounth: 12
            },]
        }
    },
    price1: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI5OSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQn9C+0LTQv9C40YHQutCwINC90LAgMSDQvNC10YHRj9GGIiwicHVibGljX2tleSI6InNhbmRib3hfaTI1NTIwNjcyMDY1IiwibGFuZ3VhZ2UiOiJydSJ9&signature=zNhmBZmQnVP8V1gp7DJhTegDYB8=',
    contact: {
        title: 'Василенко Матвей Анатольевич',
        fop: 'ФОП №регистрации: 22740000000048148',
        phoneReal: '+38(097) 91 51 281',
        phone: '+38(097) 91 51 281',
        email: 'mion.courses@gmail.com'
    }
}
