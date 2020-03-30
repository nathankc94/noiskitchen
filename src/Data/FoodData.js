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
    {
        name: 'Green Curry',
        img: '/img/Greencurry.jpg',
        section: 'CURRY'
    },
    {
        name: 'Panang',
        img: '/img/Panang.jpg',
        section: 'CURRY'
    },
    {
        name: 'Laab',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD'
    },
    {
        name: 'Grilled Thai Steak Salad',
        img: '/img/Namtok.jpg',
        section: 'THAI MEAT SALAD'
    },
    {
        name: 'Grilled Thai Pork Ribs with Sticky Rice',
        img: '/img/Ribs.png',
        section: 'GRILLED'
    },
    {
        name: 'Thai Coconut Soup with Chicken',
        img: '/img/Tomkha.jpg',
        section: 'SOUP'
    },
    {
        name: 'Thai Beef Noodle Soup with Meatballs',
        img: '/img/Beefsoup.jpg',
        section: 'SOUP'
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