export const foodItems = [
    {
        name: 'Egg Rolls',
        img: '/img/eggroll.jpg',
        section: 'APPETIZERS & SIDES'
    },
    {
        name: 'Rangoons',
        img: '/img/rangoon.jpg',
        section: 'APPETIZERS & SIDES'
    },
    {
        name: 'Steamed Dumplings',
        img: '/img/Shumai.jpg',
        section: 'APPETIZERS & SIDES'
    },
    {
        name: 'Sticky Rice',
        img: '/img/Stickyrice.jpg',
        section: 'APPETIZERS & SIDES'
    },
    {
        name: 'Pad Thai',
        img: '/img/Padthai.jpg',
        section: 'STIR-FRY'
    },
    {
        name: 'Grapow',
        img: '/img/Grapow.jpg',
        section: 'STIR-FRY'
    },
    {
        name: 'Thai Fried Rice',
        img: '/img/Friedrice.jpg',
        section: 'STIR-FRY'
    },
    {
        name: 'Tom Yum Fried Rice',
        img: '/img/Tomyumfriedrice.jpg',
        section: 'STIR-FRY'
    },
    {
        name: 'Green Curry Fried Rice',
        img: '/img/Greenfriedrice.jpg',
        section: 'STIR-FRY'
    },
];

export const foods = foodItems.reduce((res, food) =>{
    if(!res[food.section]){
        res[food.section] =[];
}
        res[food.section].push(food);
        return res;
    },
{});