export function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

export const foodItems = [
    
    {
        name: 'Pork Egg Rolls 5pc',
        img: '/img/Eggroll.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5
    },
    {
        name: 'Rangoons 8pc',
        img: '/img/Rangoon.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5
    },
    {
        name: 'Steamed Dumplings (Pork & Shrimp) 5pc',
        img: '/img/Shumai.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5
    },
    {
        name: 'Sticky Rice',
        img: '/img/Stickyrice.jpg',
        section: 'APPETIZERS & SIDES',
        price: 2
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
        name: 'Chicken Laab w/Sticky Rice',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD',
        price: 10,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Pork Laab w/Sticky Rice',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD',
        price: 10,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Grilled Thai Steak Salad w/Sticky Rice',
        img: '/img/Namtok.jpg',
        section: 'THAI MEAT SALAD',
        price: 12,
        spices: ['Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Grilled Thai Pork Ribs w/Sticky Rice',
        img: '/img/Ribs.png',
        section: 'GRILLED',
        price: 12
    },
    {
        name: 'Thai Coconut Soup w/Chicken',
        img: '/img/Tomkha.jpg',
        section: 'SOUP',
        price: 9,
        spices: ['Mild', 'Medium', 'Hot', 'Thai Hot']
    },
    {
        name: 'Thai Beef Noodle Soup w/Meatballs',
        img: '/img/Beefsoup.jpg',
        section: 'SOUP',
        price: 9
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