const mealType = ['Завтрак', 'Обед', 'Ужин', 'Десерт'];
const breakfast = [
    {
        dish: 'Рисовая каша',
        picture: 'img/porige.jpg',
        grocery: ["Рис - 1 стакан", "Молоко - 4 стакана", "Сахар - 1 ст. ложка", "Соль - щепотка"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MSKye6wbdaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        dish: 'Сырники',
        picture: 'img/syrniki.jpg',
        grocery: ["Творог - 500 гр", "Яйцо - 1 шт", "Сахар - 2 ст. ложки", "Соль - щепотка", "Мука - 5 ст. ложек"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qg4D7NFtTeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {   
        dish: 'Блины',
        picture: 'img/crips.jpg',
        grocery: ["Молоко - 500 мл", "Яйцо - 3 шт", "Сахар - 2 ст. ложки", "Соль - щепотка", "Мука - 250 гр", "Масло растительное - 1 ст. ложка"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/E_cohB81wL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
];
const lunch = [
    {
        dish: 'Шницель с пюре',
        picture: 'img/shnicel.jpg',
        grocery: ["Куриное филе - 700 г", "Яйцо - 1 шт", "Панировочне сухари - 250 г", "Соль - по вкусу", "Перец - по вкусу", "Картошка - 7 шт", "Молоко - 200 мл"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3YxnQXgw0vA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        dish: 'Гуляш',
        picture: 'img/gulash.jpeg',
        grocery: ["Мясо - 200 г", "Лук - 1 шт", "Томатная паста - 200 мл", "Соль - по вкусу", "Картошка - 5 шт", "Молоко - 50 мл"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BG75t6MKRJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {   
        dish: 'Пельмени',
        picture: 'img/pelmeni.jpg',
        grocery: ["Мука - 500 г", "Вода горячая - 250 мл", "Яйцо - 1 шт", "Соль - 1 ч. ложка", "Масло растительное - 25 мл", "Мясо - 550 г", "Лук - 200 г", "Перец - по вкусу"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EbzVosq__LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
];
const dinner = [
    {
        dish: 'Плов',
        picture: 'img/plov.jpg',
        grocery: ["Мясо - 0,5 кг", "Рис - 1 ст", "Морковь - 2 шт", "Лук - 2 шт", "Чеснок - 1 шт", "Перец - по вкусу", "Соль - по вкусу", "Масло растительное - 250 мл"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mObv4MpAMQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        dish: 'Картошка по-деревенски',
        picture: 'img/potatos.jpg',
        grocery: ["Картошка - 1 кг", "Масло растительное - 3 ст. ложки", "Соль - по вкусу", "Перец - по вкусу"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ma-015JVMkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {   
        dish: 'Рубленные куриные котлеты',
        picture: 'img/catlet.jpg',
        grocery: ["Куриное филе - 1 кг", "Лук - 1 шт", "Яйцо - 1 шт", "Сметана - 1 ст. ложка", "Мука - 2 ст.ложки", "Соль, перец - по вкусу"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/c3Ny3OkRrIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
];
const desert = [
    {
        dish: 'Шарлотка',
        picture: 'img/sharlotka.jpg',
        grocery: ["Яблоки (желательно кислые) - 500-600 г", "Сахар - 160 "г, "Мука пшеничная - 160 г", "Яйца - 4 больших или 5 маленьких", "Соль - 1 щепотка"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ewv1eRtElG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        dish: 'Панкейки',
        picture: 'img/pancake.jpg',
        grocery: ["Кефир - 350 мл", "Сахар -1 ст. ложка", "Мука - 1,5 стакана", "Яйца - 3 шт", "Соль - 1 щепотка", "Разрыхлитель - 1 ч. ложка ", "Масло сливочное растопленное - 3 ст. ложки"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C5M_FsRPqpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        dish: 'Тирамису',
        picture: 'img/tiramisu.jpg',
        grocery: ["Маскарпоне - 250 г", "Сахар - 90г", "Яйцо - 3 шт", "Печенье Савоярди - 200 г", "Кофе - 250 мл", "Какао - 10 г"],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QC9qYBG6QCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
];
