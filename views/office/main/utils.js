export const transformWordCount = (count, lang = 'ru') => {
    const ender = {
        first: lang === 'ru' ? '' : 'ь',
        second: lang === 'ru' ? 'а' : 'і',
        third: lang === 'ru' ? 'eв' : 'ів'
    }
    let total = count % 10

    switch (true) {
        case count >= 5 && count <= 20:
            return ender.third
        case total === 1:
            return ender.first
        case total > 1 && total < 5:
            return ender.second
        case total > 4: 
            return ender.third
        default:
            return ender.first
    }
}