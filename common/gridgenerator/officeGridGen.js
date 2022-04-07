export const getGridOfficeModules = () => {
    const thead = [
        {
            title: 'ID',
            alias: 'id',
            width: 50
        },
        {
            title: 'Позиция',
            alias: 'position',
            width: 70
        },
        {
            title: 'Модуль курса',
            alias: 'title',
            width: 350
        },
        {
            title: "Задание",
            alias: 'hometask_id',
            width: 100
        },
        {
            title: "Статус",
            alias: 'open',
            width: 100
        },
        // {
        //     title: 'Картинка',
        //     alias: 'img',
        //     width: 180
        // },
        {
            title: 'Действия',
            alias: 'buttons',
            width: 200
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
            name: 'position',
            type: 'text',
            value: 'value',
            width: 70
        },
        {
            name: 'title',
            type: 'text',
            value: 'value',
            width: 350
        },
        {
            name: 'hometask_id',
            type: 'text',
            value: 'value',
            width: 100
        },
        {
            name: 'open',
            type: 'text',
            value: 'value',
            width: 100
        },
        {
            name: 'buttons',
            type: 'buttons',
            value: ['watch', 'update', 'delete'],
            width: 200
        }   
    ]

    return ({
        thead,
        elems
    })
}