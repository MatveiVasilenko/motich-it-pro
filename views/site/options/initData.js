export const getConfigMenu = (lang) => {
    return [
        {
            title: lang === 'ru' ? 'Главная' : 'Головна',
            svg: 'Home',
            path: `/${lang}/#home`
        },
        {
            title: lang === 'ru' ? 'О нас' : 'Про нас',
            svg: 'Course',
            path: `/${lang}/#about`
        },
        {
            title: lang === 'ru' ? 'Курсы' : 'Курси',
            svg: 'Course',
            path: `/${lang}/#courses`
        },
        // {
        //     title: lang === 'ru' ? 'Платформа' : 'Платформа',
        //     svg: 'Course',
        //     path: `/${lang}/#platform`
        // },
        // {
        //     title: lang === 'ru' ? 'Контакты' : 'Контакти',
        //     svg: 'Contact',
        //     path: `/${lang}/#footer`
        // }
    ]
}