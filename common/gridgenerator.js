//Rating 

export const getGridRating = () => {
    const thead = [
        {
            title: 'Имя',
            alias: 'name',
            width: '35%'
        },
        {
            title: 'Фамилия',
            alias: 'surname',
            width: '35%'
        },
        {
            title: "Рейтинг",
            alias: 'rating',
            width: '20%'
        },
    ]

    const elems = [
        {
            name: 'name',
            type: 'text',
            value: 'value',
            width: '35%'
        },
        {
            name: 'surname',
            type: 'text',
            value: 'value',
            width: '35%'
        },
        {
            name: 'rating',
            type: 'text',
            value: 'value',
            width: '20%'
        }
    ]
    return ({
        thead,
        elems
    })
}

//ADMIN ANSWERS

export const getGridAdminAnswers = () => {
    const thead = [
        {
            title: 'ID',
            alias: 'id',
            width: 50
        },
        {
            title: 'Имя',
            alias: 'name',
            width: '200px'
        },
        {
            title: 'Фамилия',
            alias: 'surname',
            width: '200px'
        },
        {
            title: "Статус",
            alias: 'status',
            width: '100px'
        },
        {
            title: 'Действия',
            alias: 'buttons',
            width: '150px'
        }
    ]

    const elems = [
        {
            name: 'id',
            type: 'text',
            value: 'value',
            width: 50
        },
        {
            name: 'name',
            type: 'text',
            value: 'value',
            width: '200px'
        },
        {
            name: 'surname',
            type: 'text',
            value: 'value',
            width: '200px'
        },
        {
            name: 'status',
            type: 'text',
            value: 'value',
            width: '100px'
        },
        {
            name: 'buttons',
            type: 'buttons',
            value: ['update'],
            width: '150px'
        } 
    ]
    return ({
        thead,
        elems
    })
}