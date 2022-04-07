export const getConfigMenu = (lang) => {
    return [
        {
            title: lang === 'ru' ? 'Главная' : 'Головна',
            svg: 'Home',
            path: `/${lang}/office`
        },
        {
            title: lang === 'ru' ? 'Курсы' : 'Курси',
            svg: 'Course',
            path: `/${lang}/office/courses`
        },
        {
            title: lang === 'ru' ? 'Задания' : 'Завдання',
            svg: 'Hometasks',
            path: `/${lang}/office/hometask`
        },
        {
            title: lang === 'ru' ? 'Рейтинг' : 'Рейтинг',
            svg: 'Rating',
            path: `/${lang}/office/rating`
        },
        {
            title: lang === 'ru' ? 'MION' : 'MION',
            svg: 'Companies',
            path: `/${lang}/office/companies`
        },
        {
            title: lang === 'ru' ? 'Контакты' : 'Контакти',
            svg: 'Contact',
            path: `/${lang}/office/contacts`
        }
    ]
}

// export const configMenu = [
    
    // {
    //     title: 'Профиль',
    //     svg: 'Profile',
    //     path: '/ru/office/profile'
    // },
    // {
    //     title: 'Прибыль',
    //     svg: 'Money',
    //     path: '/ru/office/partners'
    // },
    // {
    //     title: 'Управление',
    //     svg: 'Settings',
    //     path: '/ru/admin'
    // },
    
// ]