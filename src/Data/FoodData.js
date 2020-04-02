export function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

export const foodItems = [
    
    {
        name: 'Egg Rolls',
        img: '/img/Eggroll.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5,
        description: 'Pork egg rolls (5 pieces).'
    },
    {
        name: 'Rangoons',
        img: '/img/Rangoon.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5,
        description: 'Rangoons (8 pieces).'
    },
    {
        name: 'Steamed Dumplings',
        img: '/img/Shumai.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5,
        description: 'Steamed dumplings made with pork and shrimp (5 pieces).'
    },
    {
        name: 'Sticky Rice',
        img: '/img/Stickyrice.jpg',
        section: 'APPETIZERS & SIDES',
        price: 2,
        description: 'Thai sticky rice'
    },
    {
        name: 'Pad Thai',
        img: '/img/Padthai.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']

    },
    {
        name: 'Shrimp Pad Thai',
        img: '/img/Shrimppt.jpg',
        section: 'STIR-FRY',
        price: 10,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
        
    },
    {
        name: 'Grapow',
        img: '/img/Grapow.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Thai Fried Rice',
        img: '/img/Friedrice.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Tom Yum Fried Rice',
        img: '/img/Tomyumfriedrice.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Green Curry Fried Rice',
        img: '/img/Greenfriedrice.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Green Curry',
        img: '/img/Greencurry.jpg',
        section: 'CURRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Panang',
        img: '/img/Panang.jpg',
        section: 'CURRY',
        price: 9,
        choices: ['Chicken', 'Pork', 'Beef'],
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Chicken Laab',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD',
        price: 10,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot'],
        description: 'Chicken laab with sticky rice.'
    },
    {
        name: 'Pork Laab',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD',
        price: 10,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot'],
        description: 'Pork laab with sticky rice.'

    },
    {
        name: 'Grilled Steak Salad',
        img: '/img/Namtok.jpg',
        section: 'THAI MEAT SALAD',
        price: 12,
        spices: ['Medium', 'Hot', 'Thai Hot'],
        description: 'Grilled Thai steak salad with sticky rice.'
    },
    {
        name: 'Grilled Thai Pork Ribs with Sticky Rice',
        img: '/img/Ribs.png',
        section: 'GRILLED',
        price: 12,
        description: 'Grilled Thai pork ribs with sticky rice (hot sauce on the side).'
    },
    {
        name: 'Coconut Soup w/Chicken',
        img: '/img/Tomkha.jpg',
        section: 'SOUP',
        price: 9,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot'],
        description: 'Thai coconut soup with chicken.'
    },
    {
        name: 'Beef Noodle Soup',
        img: '/img/Beefsoup.jpg',
        section: 'SOUP',
        price: 9,
        description: 'Thai beef noodle soup with meatballs (***only take this order with 5 orders or more).'
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