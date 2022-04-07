export const changeType = (keyItem) => {
    const arrString = [
        'topText',
        'phrase',
        'giveaway',
        'bgImage',
        'title',
        'subtitle',
        'number',
        'subTitle',
        'subText',
        'name',
        'textBtn',
        'placeholderName',
        'url',
        'expertTitle'
    ]
    const arrArticle = [
        'text'
    ]
    const arrElems = [
        'info',
        'numbers',
        'activity',
        'worries',
        'warranty',
        'opportunities',
        'achievements',
        'quotes'
    ]
    const arrCheck = [
        'light',
        'video',
        'image'
    ]
    const typeString = arrString.filter(el => el === keyItem)
    if (typeString.length) {
        return 'string'
    }
    const typeArticle = arrArticle.filter(el => el === keyItem)
    if (typeArticle.length) {
        return 'article'
    }
    const typeArrElema = arrElems.filter(el => el === keyItem)
    if (typeArrElema.length) {
        return 'arr-elems'
    }
    const typeArrCheck = arrCheck.filter(el => el === keyItem)
    if (typeArrCheck.length) {
        return 'check'
    }
}

export const sectionLangFunc = (word, lang = 'ru') => {
    let wordData = [
        {
            word: 'first',
            ru: 'Главная'
        },
        {
            word: 'aboutUs',
            ru: 'О нас'
        },
        {
            word: 'Activity',
            ru: 'Целевая аудитория'
        },
        {
            word: 'Worries',
            ru: 'Что беспокоит пользователя?'
        },
        {
            word: 'Opportunities',
            ru: 'Возможности'
        },
        {
            word: 'expert',
            ru: 'Автор курса и платформы'
        },
        {
            word: 'courses',
            ru: 'Курсы'
        },
        {
            word: 'Warranty',
            ru: 'Гарантии'
        },
        {
            word: 'start',
            ru: 'Форма заявки'
        },
        {
            word: 'videoPlatform',
            ru: 'Видеобзор платформы'
        },
        {
            word: 'btns',
            ru: 'Управление кнопками'
        },
    ]
    let resWord = wordData.filter(el => el.word === word)
    if (resWord.length) {
        return resWord[0][lang]
    } else {
        return word
    }
}

export const langConsructorFunc = (word, lang = 'ru') => {
    const wordData = [
        {
            word: 'topText',
            ru: 'Верхний заголовок'
        },
        {
            word: 'phrase',
            ru: 'Главный заголовок'
        },
        {
            word: 'giveaway',
            ru: 'Второстепенный заголовок'
        },
        {
            word: 'bgImage',
            ru: 'Задний фон'
        },
        {
            word: 'title',
            ru: 'Заголовок'
        },
        {
            word: 'subtitle',
            ru: 'Подзаголовок'
        },
        {
            word: 'text',
            ru: 'Текстовый блок'
        },
        {
            word: 'light',
            ru: 'Светлый стиль'
        },
        {
            word: 'subText',
            ru: 'Пункт'
        },
        {
            word: 'name',
            ru: 'Имя автора'
        },
        {
            word: 'expertTitle',
            ru: 'Достижение автора'
        },
        {
            word: 'number',
            ru: 'Число'
        },
        {
            word: 'subTitle',
            ru: 'Подзаголовок'
        },
        {
            word: 'placeholderName',
            ru: 'placeholder'
        },
        {
            word: 'textBtn',
            ru: 'Название кнопки'
        },
    ]
    let resWord = wordData.filter(el => el.word === word)
    if (resWord.length) {
        return resWord[0][lang]
    } else {
        return word
    }
}