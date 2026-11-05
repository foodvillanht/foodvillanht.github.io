// ===================== MENU (Food Villa Menu 2026) =====================
// Shared by the website (index.html) and the waiter page (waiter/). Change a price here and both update.
// [name, price, "v" veg | "n" non-veg]. A string starting with "# " is a sub-heading.
const MENU = {
  "Starters": [
    "# Non-veg",
    ["Chicken 65",229,"n"],["Chicken KFC Boneless",349,"n"],["Chicken Lollipop",219,"n"],["Chicken Popcorn",349,"n"],
    ["Chicken Pakoda",229,"n"],["Chicken Nuggets",299,"n"],["Chicken Manchurian",239,"n"],["Chilli Chicken",239,"n"],
    ["Drums of Heaven",249,"n"],["Hariali Chicken",349,"n"],["Fish Finger (6 pcs)",229,"n"],["Fish Fry (2 pcs)",229,"n"],
    ["Pomfret Fry",299,"n"],["Chilli Fish Dry",299,"n"],["Garlic Prawns",299,"n"],
    "# Veg",
    ["French Fry",139,"v"],["Paneer Pakoda",219,"v"],["Paneer 65",229,"v"],["Paneer Tikka",269,"v"],
    ["Paneer Chilli Dry",229,"v"],["Paneer Jhal Fry",239,"v"],["Veg Manchurian",199,"v"],["Crispy Chilli Baby Corn",219,"v"]
  ],
  "Kabab": [
    ["Tandoori Chicken (Half)",249,"n"],["Tandoori Chicken (Full)",479,"n"],["Chicken Reshmi Kabab",249,"n"],
    ["Chicken Tikka",249,"n"],["Chicken Hariali",249,"n"],["Chicken Banjara",249,"n"],["Chicken Seekh Kabab",399,"n"],
    ["Tangri Kabab (2 pcs)",239,"n"],["Fish Tikka",249,"n"],["Paneer Tikka",249,"v"]
  ],
  "Main Course": [
    "# Veg",
    ["Dal Fry",179,"v"],["Dal Makhani",199,"v"],["Tarka",119,"v"],["Chole (Kabuli Chana)",119,"v"],
    ["Paneer Butter Masala",229,"v"],["Paneer Kadhai",229,"v"],["Tawa Paneer",239,"v"],["Handi Paneer",239,"v"],["Special Paneer",349,"v"],
    "# Chicken, Mutton & Fish",
    ["Chicken Bharta",249,"n"],["Chicken Kosha",249,"n"],["Chicken Butter Masala (4 pcs)",399,"n"],["Chicken Kadhai",259,"n"],
    ["Chicken Dopyaza (4 pcs)",249,"n"],["Chicken Handi (4 pcs)",249,"n"],["Chicken Korma",299,"n"],["Chicken Tawa",479,"n"],
    ["Chicken Hyderabadi",479,"n"],["Chicken Angara",479,"n"],["Mutton Kosha",499,"n"],["Mutton Dopyaza (4 pcs)",549,"n"],
    ["Fish Tikka Masala",349,"n"]
  ],
  "Biryani & Rice": [
    "# Biryani",
    ["Veg Biryani (Aloo)",95,"v"],["Egg Biryani",109,"n"],["Chicken Biryani",149,"n"],["Mutton Biryani",249,"n"],
    "# Rice",
    ["Steam Rice",109,"v"],["Jeera Rice",119,"v"],["Pulao",149,"v"],["Basanti Pulao",159,"v"],
    ["Veg Fried Rice",129,"v"],["Veg Schezwan Rice",179,"v"],["Veg Hong Kong Rice",219,"v"],["Egg Fried Rice",129,"n"],
    ["Chicken Fried Rice",159,"n"],["Mixed Fried Rice",189,"n"],["Chicken Schezwan Rice",219,"n"],["Chicken Hong Kong Rice",219,"n"]
  ],
  "Roti & Naan": [
    ["Hat Roti",10,"v"],["Butter Roti",35,"v"],["Butter Naan",45,"v"],["Lachha Paratha",45,"v"],
    ["Masala Kulcha",59,"v"],["Garlic Naan",69,"v"],["Cheese Garlic Naan",89,"v"]
  ],
  "Noodles & Momo": [
    "# Noodles",
    ["Veg Noodles",129,"v"],["Egg Noodles",139,"n"],["Chicken Noodles",159,"n"],["Mix Noodles",189,"n"],
    ["Schezwan Noodles",199,"n"],["Hong Kong Noodles",219,"n"],
    "# Momo",
    ["Veg Momo",79,"v"],["Veg Fry Momo",99,"v"],["Veg Pan Fry Momo",149,"v"],["Veg White Sauce Momo",169,"v"],
    ["Chicken Momo",99,"n"],["Chicken Fry Momo",119,"n"],["Chicken Pan Fry Momo",149,"n"]
  ],
  "Pizza & Burger": [
    "# Pizza",
    ["Margherita Pizza",249,"v"],["Margherita Pizza (Special)",349,"v"],["Paneer Corn Pizza",299,"v"],["Veg Pizza",349,"v"],
    ["Paneer Tikka Pizza",349,"v"],["Chicken BBQ Pizza",349,"n"],["Chicken Tikka Pizza",349,"n"],
    ["Food Villa Special",449,"n"],["Bhoot Bangla Special",449,"n"],
    "# Burger",
    ["Veg Burger",119,"v"],["Paneer Burger",139,"v"],["Chicken Burger",139,"n"],["KFC Burger",169,"n"]
  ],
  "Pasta & Sizzler": [
    "# Pasta",
    ["Red Sauce Pasta (Veg)",229,"v"],["White Sauce Pasta (Veg)",229,"v"],["Mix Sauce Pasta (Veg)",229,"v"],
    ["Red Sauce Pasta (Non-veg)",249,"n"],["White Sauce Pasta (Non-veg)",249,"n"],["Mix Sauce Pasta (Non-veg)",249,"n"],
    "# Sizzler",
    ["Veg Sizzler",449,"v"],["Chicken Sizzler",449,"n"],["Food Villa Special Sizzler",799,"n"]
  ],
  "Soup & Salad": [
    "# Soup",
    ["Veg Hot & Sour",129,"v"],["Veg Manchow",139,"v"],["Veg Sweet Corn",139,"v"],["Cream of Tomato",139,"v"],
    ["Cream of Mushroom",139,"v"],["Chicken Manchow Soup",139,"n"],["Chicken Hot & Sour Soup",149,"n"],["Chicken Sweet Corn Soup",149,"n"],
    "# Salad",
    ["Green Salad",59,"v"],["Onion Salad",59,"v"],["Cucumber Salad",59,"v"],["Carrot Salad",59,"v"],["Tomato Salad",59,"v"]
  ],
  "Rolls & Dosa": [
    "# Rolls",
    ["Egg Roll",59,"n"],["Chicken Roll",79,"n"],["Mutton Roll",99,"n"],["Special Roll",119,"n"],
    "# South Indian",
    ["Masala Dosa",79,"v"],["Cheese Dosa",89,"v"],["Butter Dosa",89,"v"],["Ghee Dosa",99,"v"]
  ],
  "Beverages": [
    ["Hot Coffee",49,"v"],["Lassi",69,"v"],["Dry Fruit & Butterscotch Lassi",99,"v"],["Fresh Lime Soda",79,"v"],["Masala Cold Drink",79,"v"],
    ["Mojito",109,"v"],["3 in 1 Mojito",149,"v"],["Blue Lagoon",149,"v"],["Couple Dance",149,"v"],["Buttermilk",149,"v"],
    ["Cold Coffee",149,"v"],["Chocolate Shake",149,"v"],["Chocolate Shake (Special)",149,"v"],["Oreo Milkshake",149,"v"],
    ["Strawberry Shake",149,"v"],["Vanilla Shake",149,"v"],["Vanilla Milk Shake",149,"v"]
  ],
  "Pure Veg": [
    "# No onion, no garlic",
    ["Pure Veg Starter",299,"v"],["Pure Veg (Veg)",249,"v"],["Pure Veg (Paneer)",349,"v"]
  ]
};
