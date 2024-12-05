import pasta from './pasta.jpg';
import noodles from './noodles.jpg'
import cakes from './cakes.jpg'
import sandwich from './sandwich.jpg'
import sweets from './sweets.jpg'
import nonVeg from './non-veg.jpg'
import italian from './italian.jpg'
import thai from './thai.jpg'
import korean from './korean.jpg'
import chinese from './chinese.jpg'
import japanese from './japanese.jpg'
import northIndian from './north-indian.jpg'
import southIndian from './south-indian.jpg'
import biryani from './biryani.jpg'
import burger from './burger.jpg'
import croissant from './croissant.jpg'
import dumpling from './dumpling.jpg'
import fish from './fish.jpg'
import fries from './fries.jpg'
import grill_chicken from './grill_chicken.jpg'
import lassi from './lassi.jpg'
import pad_thai from './pad_thai.jpg'
import pancake from './pancake.jpg'
import paneer from './paneer.jpg'
import pizza from './pizza.jpg'
import quisadilla from './quisadilla.jpg'
import ramen from './ramen.jpg'
import soup from './soup.jpg'
import spring_roll from './spring_roll.jpg'
import sushi from './sushi.jpg'
import taco from './taco.jpg'
import waffle from './waffle.jpg'
import salad from './salad.jpg'
import playStore from './playStore.webp'
import appStore from './appStore.webp'





const menu_list = [
  {
    menuName: "Italian",
    menuImg: pizza,
  },
  {
    menuName: "Fast Food",
    menuImg: ramen,
  },
  {
    menuName: "Indian",
    menuImg: paneer,
  },
  {
    menuName: "Salad",
    menuImg: salad,
  },
  {
    menuName: "Japanese",
    menuImg: sushi,
  },
  {
    menuName: "Thai",
    menuImg: pad_thai,
  },
  {
    menuName: "Mexican",
    menuImg: taco,
  },
  {
    menuName: "Breakfast",
    menuImg: salad,
  },
  {
    menuName: "Dessert",
    menuImg: sweets,
  },
  {
    menuName: "American",
    menuImg: burger,
  },
  {
    menuName: "Mediterranean",
    menuImg: quisadilla,
  },
  {
    menuName: "British",
    menuImg: fish,
  },
  {
    menuName: "Chinese",
    menuImg: dumpling,
  },
  {
    menuName: "Russian",
    menuImg: soup,
  },
  {
    menuName: "Bakeries",
    menuImg: pancake,
  },
  {
    menuName: "Beverages",
    menuImg: lassi,
  },
];
const foodList = [
  {
    id: 1,
    name: "Margherita Pizza",
    img: pizza,
    desc: "Classic cheese pizza with a tomato base.",
    category: "Italian",
    price: 899,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Veggie Burger",
    img: burger,
    desc: "Loaded with fresh veggies and a tangy sauce.",
    category: "Fast Food",
    price: 249,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Chicken Biryani",
    img: biryani,
    desc: "Aromatic rice dish with tender chicken pieces.",
    category: "Indian",
    price: 899,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Caesar Salad",
    img: salad,
    desc: "Crispy lettuce with creamy Caesar dressing.",
    category: "Salad",
    price: 175,
    rating: 3.9,
  },
  {
    id: 5,
    name: "Sushi Platter",
    img: sushi,
    desc: "Assorted sushi rolls with fresh fish and vegetables.",
    category: "Japanese",
    price: 599,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Pad Thai",
    img: pad_thai,
    desc: "Stir-fried noodles with shrimp and peanut toppings.",
    category: "Thai",
    price: 1049,
    rating: 4.3,
  },
  {
    id: 7,
    name: "Tacos",
    img: taco,
    desc: "Soft-shell tacos with beef, lettuce, and salsa.",
    category: "Mexican",
    price: 599,
    rating: 4.2,
  },
  {
    id: 8,
    name: "Pancakes",
    img: pancake,
    desc: "Fluffy pancakes served with syrup and butter.",
    category: "Breakfast",
    price: 399,
    rating: 4.1,
  },
  {
    id: 9,
    name: "Tom Yum Soup",
    img: soup,
    desc: "Spicy and sour Thai soup with shrimp.",
    category: "Thai",
    price: 199,
    rating: 4.0,
  },
  {
    id: 10,
    name: "Cheeseburger",
    img: burger,
    desc: "Juicy burger topped with melted cheese.",
    category: "Fast Food",
    price: 449,
    rating: 4.3,
  },
  {
    id: 11,
    name: "Pasta Alfredo",
    img: pasta,
    desc: "Creamy pasta with rich Alfredo sauce.",
    category: "Italian",
    price: 699,
    rating: 4.4,
  },
  {
    id: 12,
    name: "Chocolate Cake",
    img: pancake,
    desc: "Decadent and rich chocolate dessert.",
    category: "Dessert",
    price: 255,
    rating: 4.8,
  },
  {
    id: 13,
    name: "Grilled Chicken",
    img: grill_chicken,
    desc: "Juicy grilled chicken breast with herbs.",
    category: "American",
    price: 799,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Ramen",
    img: ramen,
    desc: "Hot and savory noodle soup with pork.",
    category: "Japanese",
    price: 295,
    rating: 4.2,
  },
  {
    id: 15,
    name: "Falafel Wrap",
    img: taco,
    desc: "Mediterranean wrap with falafel and tahini.",
    category: "Mediterranean",
    price: 499,
    rating: 4.1,
  },
  {
    id: 16,
    name: "Pepperoni Pizza",
    img: pizza,
    desc: "Cheesy pizza topped with spicy pepperoni.",
    category: "Italian",
    price: 849,
    rating: 4.6,
  },
  {
    id: 17,
    name: "Greek Salad",
    img: salad,
    desc: "Fresh veggies with feta cheese and olives.",
    category: "Salad",
    price: 599,
    rating: 4.0,
  },
  {
    id: 18,
    name: "Paneer Butter Masala",
    img: paneer,
    desc: "Cottage cheese in creamy tomato sauce.",
    category: "Indian",
    price: 1099,
    rating: 4.8,
  },
  {
    id: 19,
    name: "Fish and Chips",
    img: fish,
    desc: "Crispy fried fish with potato fries.",
    category: "British",
    price: 849,
    rating: 4.3,
  },
  {
    id: 20,
    name: "Spring Rolls",
    img: spring_roll,
    desc: "Crispy rolls filled with vegetables.",
    category: "Chinese",
    price: 499,
    rating: 3.9,
  },
  {
    id: 21,
    name: "Ice Cream Sundae",
    img: pancake,
    desc: "Vanilla ice cream with chocolate syrup.",
    category: "Dessert",
    price: 399,
    rating: 4.7,
  },
  {
    id: 22,
    name: "Chicken Stroganoff",
    img: burger,
    desc: "Creamy Chicken stew with mushrooms.",
    category: "Russian",
    price: 699,
    rating: 4.2,
  },
  {
    id: 23,
    name: "Veggie Sushi",
    img: sushi,
    desc: "Sushi rolls filled with fresh vegetables.",
    category: "Japanese",
    price: 399,
    rating: 4.0,
  },
  {
    id: 24,
    name: "Quesadilla",
    img: quisadilla,
    desc: "Grilled tortilla with cheese and chicken.",
    category: "Mexican",
    price: 799,
    rating: 4.4,
  },
  {
    id: 25,
    name: "Croissant",
    img: croissant,
    desc: "Buttery and flaky French pastry.",
    category: "Bakery",
    price: 249,
    rating: 4.5,
  },
  {
    id: 26,
    name: "Dumplings",
    img: dumpling,
    desc: "Steamed dumplings with pork filling.",
    category: "Chinese",
    price: 599,
    rating: 4.1,
  },
  {
    id: 27,
    name: "Waffles",
    img: waffle,
    desc: "Golden waffles served with fresh fruits.",
    category: "Breakfast",
    price: 549,
    rating: 4.2,
  },
  {
    id: 28,
    name: "Chicken Shawarma",
    img: spring_roll,
    desc: "Middle Eastern wrap with spiced chicken.",
    category: "Mediterranean",
    price: 699,
    rating: 4.3,
  },
  {
    id: 29,
    name: "Mango Lassi",
    img: lassi,
    desc: "Sweet and creamy mango yogurt drink.",
    category: "Beverages",
    price: 335,
    rating: 4.7,
  },
  {
    id: 30,
    name: "French Fries",
    img: fries,
    desc: "Crispy and golden potato fries.",
    category: "Fast Food",
    price: 349,
    rating: 4.1,
  },
];



export {menu_list}
export {foodList}
export {appStore, playStore}