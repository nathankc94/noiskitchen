export function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

export const foodItems = [
    
    {
        name: 'Egg Rolls',
        img: '/img/eggroll.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5
    },
    {
        name: 'Rangoons',
        img: '/img/rangoon.jpg',
        section: 'APPETIZERS & SIDES',
        price: 5
    },
    {
        name: 'Steamed Dumplings',
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
        price: 9
    },
    {
        name: 'Grapow',
        img: '/img/Grapow.jpg',
        section: 'STIR-FRY',
        price: 9
    },
    {
        name: 'Thai Fried Rice',
        img: '/img/Friedrice.jpg',
        section: 'STIR-FRY',
        price: 9
    },
    {
        name: 'Tom Yum Fried Rice',
        img: '/img/Tomyumfriedrice.jpg',
        section: 'STIR-FRY',
        price: 9
    },
    {
        name: 'Green Curry Fried Rice',
        img: '/img/Greenfriedrice.jpg',
        section: 'STIR-FRY',
        price: 9
    },
    {
        name: 'Green Curry',
        img: '/img/Greencurry.jpg',
        section: 'CURRY',
        price: 9
    },
    {
        name: 'Panang',
        img: '/img/Panang.jpg',
        section: 'CURRY',
        price: 9
    },
    {
        name: 'Laab',
        img: '/img/Laab.png',
        section: 'THAI MEAT SALAD',
        price: 10
    },
    {
        name: 'Grilled Thai Steak Salad',
        img: '/img/Namtok.jpg',
        section: 'THAI MEAT SALAD',
        price: 12
    },
    {
        name: 'Grilled Thai Pork Ribs with Sticky Rice',
        img: '/img/Ribs.png',
        section: 'GRILLED',
        price: 12
    },
    {
        name: 'Thai Coconut Soup with Chicken',
        img: '/img/Tomkha.jpg',
        section: 'SOUP',
        price: 9
    },
    {
        name: 'Thai Beef Noodle Soup with Meatballs',
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