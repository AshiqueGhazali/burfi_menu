export type BadgeType = 'Popular' | 'Best Seller' | 'New' | 'Chef Special' | 'Must Try';

export interface MenuItemVariant {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  categoryId: string;
  badge?: BadgeType;
  image?: string;
  variants?: MenuItemVariant[];
  spicyLevel?: 1 | 2 | 3;
}

export interface MenuCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'shawarma',
    name: 'Shawarma',
    iconName: 'Flame',
    description: 'Middle-eastern rolls loaded with succulent filling & signature garlic sauce.',
  },
  {
    id: 'mojitos',
    name: 'Mojitos',
    iconName: 'Sparkles',
    description: 'Chilled handcrafted mocktails crushed with fresh mint, lime & sparkling soda.',
  },
  {
    id: 'juices',
    name: 'Fresh Juices',
    iconName: 'GlassWater',
    description: '100% natural, freshly cold-pressed fruit juices with zero preservatives.',
  },
  {
    id: 'coffee-tea',
    name: 'Tea & Coffee',
    iconName: 'Coffee',
    description: 'Artisanal espresso brews, icy lattes & aromatic authentic kulhad chais.',
  },
  {
    id: 'snacks',
    name: 'Snacks & Bites',
    iconName: 'Utensils',
    description: 'Crispy golden fries, loaded sandwiches, toasted garlic breads & wraps.',
  },
  {
    id: 'desserts',
    name: 'Burfi & Sweets',
    iconName: 'Cake',
    description: 'Our house-special melt-in-mouth burfis & hot decadent sweet treats.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- SHAWARMA ---
  {
    id: 'chicken-shawarma',
    categoryId: 'shawarma',
    name: 'Chicken Shawarma Roll',
    description: 'Slow-roasted chicken, crisp cucumber pickles & signature cream garlic toum in soft pita.',
    price: 120,
    isVeg: false,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80',
    spicyLevel: 1,
  },
  {
    id: 'peri-peri-shawarma',
    categoryId: 'shawarma',
    name: 'Peri Peri Chicken Shawarma',
    description: 'Spicy peri-peri marinated chicken with fiery mayo, jalapeños & crunchy cabbage.',
    price: 140,
    isVeg: false,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    spicyLevel: 3,
  },
  {
    id: 'cheese-shawarma',
    categoryId: 'shawarma',
    name: 'Cheese Overload Shawarma',
    description: 'Juicy chicken shawarma stuffed with hot melted mozzarella & cheddar cheese layer.',
    price: 160,
    isVeg: false,
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'paneer-shawarma',
    categoryId: 'shawarma',
    name: 'Grilled Paneer Shawarma',
    description: 'Spiced tandoori paneer cubes with mint sauce, fresh onions & shredded veggies.',
    price: 130,
    isVeg: true,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    spicyLevel: 2,
  },
  {
    id: 'wheat-shawarma',
    categoryId: 'shawarma',
    name: 'Whole Wheat Chicken Roll',
    description: 'Lean grilled chicken breast wrapped in 100% whole wheat roti with light garlic dip.',
    price: 150,
    isVeg: false,
    spicyLevel: 1,
  },

  // --- MOJITOS ---
  {
    id: 'classic-mojito',
    categoryId: 'mojitos',
    name: 'Classic Virgin Mojito',
    description: 'Muddled fresh garden mint, key lime juice, raw cane sugar & sparkling chilled soda.',
    price: 99,
    isVeg: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'blue-lagoon',
    categoryId: 'mojitos',
    name: 'Electric Blue Lagoon',
    description: 'Refreshing citrus blue curaçao syrup muddled with lime slice, mint & bubbly soda.',
    price: 110,
    isVeg: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'passion-fruit-mojito',
    categoryId: 'mojitos',
    name: 'Passion Fruit Sparkler',
    description: 'Tangy tropical passion fruit pulp layered with crushed ice, fresh lime & soda fizz.',
    price: 120,
    isVeg: true,
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'watermelon-mojito',
    categoryId: 'mojitos',
    name: 'Watermelon Mint Cooler',
    description: 'Fresh crushed ruby watermelon pulp infused with mint sprigs and fizzy lemonade.',
    price: 110,
    isVeg: true,
    badge: 'Must Try',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'strawberry-basil',
    categoryId: 'mojitos',
    name: 'Strawberry Basil Splash',
    description: 'Sweet strawberry reduction muddled with Italian basil leaves & crushed ice soda.',
    price: 125,
    isVeg: true,
  },

  // --- JUICES ---
  {
    id: 'fresh-orange',
    categoryId: 'juices',
    name: 'Royal Valencia Orange',
    description: 'Pure cold-pressed sweet orange juice loaded with natural Vitamin C. No added sugar.',
    price: 90,
    isVeg: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'chilled-watermelon',
    categoryId: 'juices',
    name: 'Chilled Watermelon Nectar',
    description: '100% natural cold watermelon juice crushed with a pinch of rock salt & mint.',
    price: 80,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pineapple-punch',
    categoryId: 'juices',
    name: 'Golden Pineapple Punch',
    description: 'Tangy-sweet fresh pineapple juice squeezed fresh to order with lemon hint.',
    price: 90,
    isVeg: true,
  },
  {
    id: 'green-detox',
    categoryId: 'juices',
    name: 'Green Detox Cleanse',
    description: 'Healthy blend of crisp green apple, cucumber, spinach, mint & Himalayan salt.',
    price: 100,
    isVeg: true,
    badge: 'Must Try',
  },
  {
    id: 'abc-juice',
    categoryId: 'juices',
    name: 'ABC Miracle Booster',
    description: 'Freshly extracted Apple, Beetroot & Carrot juice packed with vital antioxidants.',
    price: 110,
    isVeg: true,
    badge: 'Chef Special',
  },

  // --- TEA & COFFEE ---
  {
    id: 'cardamom-chai',
    categoryId: 'coffee-tea',
    name: 'Burfi Special Cardamom Chai',
    description: 'Slow-brewed aromatic milk tea boiled with freshly hand-crushed green cardamom.',
    price: 30,
    isVeg: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'kulhad-chai',
    categoryId: 'coffee-tea',
    name: 'Kulhad Masala Chai',
    description: 'Spiced herbal tea with ginger, clove & cinnamon served hot in an earthen clay cup.',
    price: 40,
    isVeg: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cappuccino',
    categoryId: 'coffee-tea',
    name: 'Artisan Hot Cappuccino',
    description: 'Dark roasted Arabica espresso topped with steamed velvety micro-foam milk.',
    price: 90,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hazelnut-cold-coffee',
    categoryId: 'coffee-tea',
    name: 'Hazelnut Thick Cold Coffee',
    description: 'Rich blended espresso, chilled cream & roasted hazelnut syrup topped with cocoa.',
    price: 120,
    isVeg: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'iced-caramel-latte',
    categoryId: 'coffee-tea',
    name: 'Iced Caramel Macchiato',
    description: 'Smooth cold espresso layered over whole milk, ice cubes & buttery caramel sauce.',
    price: 130,
    isVeg: true,
    badge: 'Chef Special',
  },

  // --- SNACKS & BITES ---
  {
    id: 'peri-peri-fries',
    categoryId: 'snacks',
    name: 'Peri Peri Crispy Fries',
    description: 'Golden crinkle-cut potato fries tossed in zesty peri-peri seasoning with garlic mayo.',
    price: 99,
    isVeg: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    spicyLevel: 2,
  },
  {
    id: 'loaded-nachos',
    categoryId: 'snacks',
    name: 'Cheese Overload Nachos',
    description: 'Crispy corn tortilla chips topped with liquid cheddar cheese, salsa & sliced jalapeños.',
    price: 140,
    isVeg: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'garlic-toast',
    categoryId: 'snacks',
    name: 'Cheese Garlic Toasties',
    description: 'Toasted buttered artisan baguette slices smothered in melted mozzarella & garlic herb rub.',
    price: 110,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'chicken-club-sandwich',
    categoryId: 'snacks',
    name: 'Burfi Club Chicken Sandwich',
    description: 'Triple-decker toasted bread loaded with shredded chicken, cheese slice, egg & salad.',
    price: 160,
    isVeg: false,
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'crispy-veg-burger',
    categoryId: 'snacks',
    name: 'Classic Potato Patty Burger',
    description: 'Golden potato herb patty, caramelised onion, lettuce & honey mustard mayo in sesame bun.',
    price: 110,
    isVeg: true,
  },

  // --- BURFI & DESSERTS ---
  {
    id: 'malai-burfi',
    categoryId: 'desserts',
    name: 'Burfi.in Royal Malai Burfi (2 pcs)',
    description: 'Our house specialty melt-in-mouth creamy condensed milk sweet topped with pistachio & silver varq.',
    price: 60,
    isVeg: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'mango-burfi',
    categoryId: 'desserts',
    name: 'Alphonso Mango Burfi (2 pcs)',
    description: 'Rich artisanal burfi crafted with pure ratnagiri mango pulp and crushed almonds.',
    price: 70,
    isVeg: true,
    badge: 'Chef Special',
  },
  {
    id: 'choco-lava',
    categoryId: 'desserts',
    name: 'Warm Dark Chocolate Lava',
    description: 'Moist dark chocolate cake with a molten chocolate core that cascades at first bite.',
    price: 120,
    isVeg: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sizzling-brownie',
    categoryId: 'desserts',
    name: 'Sizzling Brownie with Ice Cream',
    description: 'Hot fudgy walnut brownie served sizzling with a scoop of Madagascar vanilla bean ice cream.',
    price: 150,
    isVeg: true,
    badge: 'Must Try',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80',
  },
];
