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
        spice: ' ',
        choice:' ',
        description: 'Pork egg rolls (5 pieces).'
    },
    {
        name: 'Rangoons',
        img: '/img/Rangoon.jpeg',
        section: 'APPETIZERS & SIDES',
        price: 5,
        spice: ' ',
        choice:' ',
        description: 'Rangoons (8 pieces).'
    },
    {
        name: 'Steamed Dumplings',
        img: '/img/Shumai.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5,
        spice: ' ',
        choice:' ',
        description: 'Steamed dumplings made with pork and shrimp (5 pieces).'
    },
    {
        name: 'Sticky Rice',
        img: '/img/Stickyrice.jpg',
        section: 'APPETIZERS & SIDES',
        price: 2,
        spice: ' ',
        choice:' ',
        description: 'Thai sticky rice'
    },
    {
        name: 'Pad Thai',
        img: '/img/Padthai.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['mild', 'medium', 'hot', 'thai-hot']

    },
    {
        name: 'Shrimp Pad Thai',
        img: '/img/Shrimppt.jpg',
        section: 'STIR-FRY',
        price: 10,
        choice:' ',
        spices: ['mild', 'medium', 'hot', 'thai-hot']
        
    },
    {
        name: 'Grapow',
        img: '/img/Grapow.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['mild', 'medium', 'hot', 'thai-hot']
    },
    {
        name: 'Thai Fried Rice',
        img: '/img/Friedrice.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['mild', 'medium', 'hot', 'thai-hot']
    },
    {
        name: 'Shrimp Thai Fried Rice',
        img: '/img/Sfriedrice.jpg',
        section: 'STIR-FRY',
        price: 10,
        choice:' ',
        spices: ['mild', 'medium', 'hot', 'thai-hot']
    },
    {
        name: 'Tom Yum Fried Rice',
        img: '/img/Tomyumfriedrice.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['medium', 'hot', 'thai-hot']
    },
    {
        name: 'Green Curry Fried Rice',
        img: '/img/Greenfriedrice.jpg',
        section: 'STIR-FRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['medium', 'hot', 'thai-hot']
    },
    {
        name: 'Green Curry',
        img: '/img/Greencurry.jpg',
        section: 'CURRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['medium', 'hot', 'thai-hot']
    },
    {
        name: 'Panang',
        img: '/img/Panang.jpg',
        section: 'CURRY',
        price: 9,
        choices: ['chicken', 'pork', 'beef'],
        spices: ['mild', 'medium', 'hot', 'thai-hot']
    },
    {
        name: 'Chicken Laab',
        img: '/img/Laabchicken.jpg',
        section: 'THAI MEAT SALAD',
        price: 10,
        choice:' ',
        spices: ['mild', 'medium', 'hot', 'thai-hot'],
        description: 'Chicken laab with sticky rice.'
    },
    {
        name: 'Pork Laab',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD',
        price: 10,
        choice:' ',
        spices: ['mild', 'medium', 'hot', 'thai-hot'],
        description: 'Pork laab with sticky rice.'

    },
    {
        name: 'Grilled Steak Salad',
        img: '/img/Namtok.jpg',
        section: 'THAI MEAT SALAD',
        price: 12,
        choice: ' ',
        spices: ['medium', 'hot', 'thai-hot'],
        description: 'Grilled Thai steak salad with sticky rice.'
    },
    {
        name: 'Grilled Thai Pork Ribs',
        img: '/img/Ribs.png',
        section: 'GRILLED',
        price: 12,
        spice: ' ',
        choice:' ',
        description: 'Grilled Thai pork ribs with sticky rice (hot sauce on the side).'
    },
    {
        name: 'Coconut Soup w/Chicken',
        img: '/img/Tomkha.png',
        section: 'SOUP',
        price: 9,
        choice:' ',
        spices: ['mild', 'medium', 'hot', 'thai-hot'],
        description: 'Thai coconut soup with chicken.'
    },
    {
        name: 'Beef Noodle Soup',
        img: '/img/Beefsoup.jpg',
        section: 'SOUP',
        price: 9,
        spice: ' ',
        choice:' ',
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