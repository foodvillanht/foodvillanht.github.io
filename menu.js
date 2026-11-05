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

// Bengali dish names, shown when the site or the waiter page is switched to বাংলা.
// Keyed by the English name above. A dish missing here just shows its English name.
const MENU_BN = {
  // Starters
  "Chicken 65": "চিকেন ৬৫", "Chicken KFC Boneless": "চিকেন কেএফসি বোনলেস", "Chicken Lollipop": "চিকেন ললিপপ",
  "Chicken Popcorn": "চিকেন পপকর্ন", "Chicken Pakoda": "চিকেন পকোড়া", "Chicken Nuggets": "চিকেন নাগেটস",
  "Chicken Manchurian": "চিকেন মাঞ্চুরিয়ান", "Chilli Chicken": "চিলি চিকেন", "Drums of Heaven": "ড্রামস অফ হেভেন",
  "Hariali Chicken": "হরিয়ালি চিকেন", "Fish Finger (6 pcs)": "ফিশ ফিঙ্গার (৬ পিস)", "Fish Fry (2 pcs)": "ফিশ ফ্রাই (২ পিস)",
  "Pomfret Fry": "পমফ্রেট ফ্রাই", "Chilli Fish Dry": "চিলি ফিশ ড্রাই", "Garlic Prawns": "গার্লিক প্রন",
  "French Fry": "ফ্রেঞ্চ ফ্রাই", "Paneer Pakoda": "পনির পকোড়া", "Paneer 65": "পনির ৬৫", "Paneer Tikka": "পনির টিক্কা",
  "Paneer Chilli Dry": "পনির চিলি ড্রাই", "Paneer Jhal Fry": "পনির ঝাল ফ্রাই", "Veg Manchurian": "ভেজ মাঞ্চুরিয়ান",
  "Crispy Chilli Baby Corn": "ক্রিসপি চিলি বেবি কর্ন",
  // Kabab
  "Tandoori Chicken (Half)": "তন্দুরি চিকেন (হাফ)", "Tandoori Chicken (Full)": "তন্দুরি চিকেন (ফুল)",
  "Chicken Reshmi Kabab": "চিকেন রেশমি কাবাব", "Chicken Tikka": "চিকেন টিক্কা", "Chicken Hariali": "চিকেন হরিয়ালি",
  "Chicken Banjara": "চিকেন বানজারা", "Chicken Seekh Kabab": "চিকেন শিক কাবাব", "Tangri Kabab (2 pcs)": "তাংরি কাবাব (২ পিস)",
  "Fish Tikka": "ফিশ টিক্কা",
  // Main course
  "Dal Fry": "ডাল ফ্রাই", "Dal Makhani": "ডাল মাখানি", "Tarka": "তড়কা", "Chole (Kabuli Chana)": "ছোলে (কাবুলি ছোলা)",
  "Paneer Butter Masala": "পনির বাটার মশলা", "Paneer Kadhai": "পনির কড়াই", "Tawa Paneer": "তাওয়া পনির",
  "Handi Paneer": "হান্ডি পনির", "Special Paneer": "স্পেশাল পনির", "Chicken Bharta": "চিকেন ভর্তা", "Chicken Kosha": "চিকেন কষা",
  "Chicken Butter Masala (4 pcs)": "চিকেন বাটার মশলা (৪ পিস)", "Chicken Kadhai": "চিকেন কড়াই",
  "Chicken Dopyaza (4 pcs)": "চিকেন দোপেঁয়াজা (৪ পিস)", "Chicken Handi (4 pcs)": "চিকেন হান্ডি (৪ পিস)",
  "Chicken Korma": "চিকেন কোরমা", "Chicken Tawa": "চিকেন তাওয়া", "Chicken Hyderabadi": "চিকেন হায়দরাবাদি",
  "Chicken Angara": "চিকেন আঙ্গারা", "Mutton Kosha": "মটন কষা", "Mutton Dopyaza (4 pcs)": "মটন দোপেঁয়াজা (৪ পিস)",
  "Fish Tikka Masala": "ফিশ টিক্কা মশলা",
  // Biryani & rice
  "Veg Biryani (Aloo)": "ভেজ বিরিয়ানি (আলু)", "Egg Biryani": "এগ বিরিয়ানি", "Chicken Biryani": "চিকেন বিরিয়ানি",
  "Mutton Biryani": "মটন বিরিয়ানি", "Steam Rice": "স্টিম রাইস", "Jeera Rice": "জিরা রাইস", "Pulao": "পোলাও",
  "Basanti Pulao": "বাসন্তী পোলাও", "Veg Fried Rice": "ভেজ ফ্রায়েড রাইস", "Veg Schezwan Rice": "ভেজ সেজওয়ান রাইস",
  "Veg Hong Kong Rice": "ভেজ হংকং রাইস", "Egg Fried Rice": "এগ ফ্রায়েড রাইস", "Chicken Fried Rice": "চিকেন ফ্রায়েড রাইস",
  "Mixed Fried Rice": "মিক্সড ফ্রায়েড রাইস", "Chicken Schezwan Rice": "চিকেন সেজওয়ান রাইস",
  "Chicken Hong Kong Rice": "চিকেন হংকং রাইস",
  // Roti & naan
  "Hat Roti": "হাত রুটি", "Butter Roti": "বাটার রুটি", "Butter Naan": "বাটার নান", "Lachha Paratha": "লাচ্ছা পরোটা",
  "Masala Kulcha": "মশলা কুলচা", "Garlic Naan": "গার্লিক নান", "Cheese Garlic Naan": "চিজ গার্লিক নান",
  // Noodles & momo
  "Veg Noodles": "ভেজ নুডলস", "Egg Noodles": "এগ নুডলস", "Chicken Noodles": "চিকেন নুডলস", "Mix Noodles": "মিক্স নুডলস",
  "Schezwan Noodles": "সেজওয়ান নুডলস", "Hong Kong Noodles": "হংকং নুডলস", "Veg Momo": "ভেজ মোমো",
  "Veg Fry Momo": "ভেজ ফ্রাই মোমো", "Veg Pan Fry Momo": "ভেজ প্যান ফ্রাই মোমো", "Veg White Sauce Momo": "ভেজ হোয়াইট সস মোমো",
  "Chicken Momo": "চিকেন মোমো", "Chicken Fry Momo": "চিকেন ফ্রাই মোমো", "Chicken Pan Fry Momo": "চিকেন প্যান ফ্রাই মোমো",
  // Pizza & burger
  "Margherita Pizza": "মার্গারিটা পিৎজা", "Margherita Pizza (Special)": "মার্গারিটা পিৎজা (স্পেশাল)",
  "Paneer Corn Pizza": "পনির কর্ন পিৎজা", "Veg Pizza": "ভেজ পিৎজা", "Paneer Tikka Pizza": "পনির টিক্কা পিৎজা",
  "Chicken BBQ Pizza": "চিকেন বিবিকিউ পিৎজা", "Chicken Tikka Pizza": "চিকেন টিক্কা পিৎজা",
  "Food Villa Special": "ফুড ভিলা স্পেশাল", "Bhoot Bangla Special": "ভূত বাংলা স্পেশাল",
  "Veg Burger": "ভেজ বার্গার", "Paneer Burger": "পনির বার্গার", "Chicken Burger": "চিকেন বার্গার", "KFC Burger": "কেএফসি বার্গার",
  // Pasta & sizzler
  "Red Sauce Pasta (Veg)": "রেড সস পাস্তা (ভেজ)", "White Sauce Pasta (Veg)": "হোয়াইট সস পাস্তা (ভেজ)",
  "Mix Sauce Pasta (Veg)": "মিক্স সস পাস্তা (ভেজ)", "Red Sauce Pasta (Non-veg)": "রেড সস পাস্তা (নন-ভেজ)",
  "White Sauce Pasta (Non-veg)": "হোয়াইট সস পাস্তা (নন-ভেজ)", "Mix Sauce Pasta (Non-veg)": "মিক্স সস পাস্তা (নন-ভেজ)",
  "Veg Sizzler": "ভেজ সিজলার", "Chicken Sizzler": "চিকেন সিজলার", "Food Villa Special Sizzler": "ফুড ভিলা স্পেশাল সিজলার",
  // Soup & salad
  "Veg Hot & Sour": "ভেজ হট অ্যান্ড সাওয়ার", "Veg Manchow": "ভেজ মানচাও", "Veg Sweet Corn": "ভেজ সুইট কর্ন",
  "Cream of Tomato": "ক্রিম অফ টমেটো", "Cream of Mushroom": "ক্রিম অফ মাশরুম", "Chicken Manchow Soup": "চিকেন মানচাও স্যুপ",
  "Chicken Hot & Sour Soup": "চিকেন হট অ্যান্ড সাওয়ার স্যুপ", "Chicken Sweet Corn Soup": "চিকেন সুইট কর্ন স্যুপ",
  "Green Salad": "গ্রিন স্যালাড", "Onion Salad": "পেঁয়াজ স্যালাড", "Cucumber Salad": "শসা স্যালাড",
  "Carrot Salad": "গাজর স্যালাড", "Tomato Salad": "টমেটো স্যালাড",
  // Rolls & dosa
  "Egg Roll": "এগ রোল", "Chicken Roll": "চিকেন রোল", "Mutton Roll": "মটন রোল", "Special Roll": "স্পেশাল রোল",
  "Masala Dosa": "মশলা দোসা", "Cheese Dosa": "চিজ দোসা", "Butter Dosa": "বাটার দোসা", "Ghee Dosa": "ঘি দোসা",
  // Beverages
  "Hot Coffee": "হট কফি", "Lassi": "লস্যি", "Dry Fruit & Butterscotch Lassi": "ড্রাই ফ্রুট ও বাটারস্কচ লস্যি",
  "Fresh Lime Soda": "ফ্রেশ লাইম সোডা", "Masala Cold Drink": "মশলা কোল্ড ড্রিংক", "Mojito": "মোহিতো",
  "3 in 1 Mojito": "থ্রি-ইন-ওয়ান মোহিতো", "Blue Lagoon": "ব্লু লেগুন", "Couple Dance": "কাপল ড্যান্স",
  "Buttermilk": "বাটারমিল্ক (ঘোল)", "Cold Coffee": "কোল্ড কফি", "Chocolate Shake": "চকোলেট শেক",
  "Chocolate Shake (Special)": "চকোলেট শেক (স্পেশাল)", "Oreo Milkshake": "ওরিও মিল্কশেক", "Strawberry Shake": "স্ট্রবেরি শেক",
  "Vanilla Shake": "ভ্যানিলা শেক", "Vanilla Milk Shake": "ভ্যানিলা মিল্ক শেক",
  // Pure veg
  "Pure Veg Starter": "পিওর ভেজ স্টার্টার", "Pure Veg (Veg)": "পিওর ভেজ (ভেজ)", "Pure Veg (Paneer)": "পিওর ভেজ (পনির)"
};