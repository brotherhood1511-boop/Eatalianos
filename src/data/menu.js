// The full menu. Each item is { name, price, desc }.

const item = (name, price, desc = '') => ({ name, price, desc })

export const lunch = {
  note: 'Served daily until 3:00 PM',
  pasta: [
    item('Spaghetti Pomodoro', '$13', 'Spaghetti with tomato sauce, garlic, basil, and a touch of olive oil.'),
    item('Penne alla Vodka', '$15', 'Penne in a creamy tomato vodka sauce.'),
    item('Fettuccine Alfredo', '$15', 'Fettuccine in a rich Parmesan cream sauce.'),
    item('Rigatoni Bolognese', '$16', 'Rigatoni with slow-cooked meat sauce.'),
    item('Spaghetti Carbonara', '$16', 'Spaghetti with pancetta, egg yolk, Pecorino Romano, and black pepper.'),
  ],
  entrees: [
    item('Chicken Parmesan', '$16', 'Breaded chicken cutlet topped with marinara sauce and melted mozzarella.'),
    item('Chicken Florentine', '$17', 'Grilled chicken with mushrooms and spinach in creamy garlic sauce.'),
    item('Chicken Piccata', '$16', 'Grilled chicken in a lemon, white wine, and caper sauce.'),
    item('Eggplant Parmesan', '$16', 'Breaded eggplant layered with marinara sauce, mozzarella, and Parmesan.'),
    item('Lasagna Bolognese', '$17', 'Layers of pasta, meat sauce, ricotta, mozzarella, and Parmesan.'),
  ],
}

export const dinner = [
  {
    title: 'Antipasti',
    items: [
      item('Fried Calamari', '$17', 'Lightly breaded calamari, fried golden and served with marinara sauce.'),
      item('Tomato Bruschetta', '$13', 'Toasted Italian bread topped with fresh tomatoes, basil, garlic, olive oil, and balsamic glaze.'),
      item('Shrimp Limone', '$17', 'Sautéed shrimp with herbs in lemon white wine sauce.'),
      item('Mozzarella Fritta', '$14', 'Hand-breaded mozzarella cheese, fried and served with marinara sauce.'),
      item('Stuffed Mushrooms', '$15', 'Mushrooms stuffed with crab meat, sautéed spinach in creamy garlic sauce.'),
      item('Meatballs al Forno', '$15', 'Homemade Italian meatballs baked in marinara sauce and topped with melted mozzarella.'),
      item('Mussels Marinara', '$18', 'Fresh mussels sautéed in a garlic tomato sauce and served with bread.'),
      item('Burrata e Prosciutto', '$18', 'Creamy burrata cheese served with prosciutto, arugula, and balsamic glaze.'),
    ],
  },
  {
    title: 'Insalate',
    items: [
      item('House Salad', '$9', 'Mixed greens, tomatoes, cucumbers, red onions, and house Italian dressing.'),
      item('Caesar Salad', '$12', 'Romaine lettuce, Parmesan cheese, croutons, and traditional Caesar dressing.'),
      item('Chef’s Salad', '$16', 'Mixed greens, tomatoes, cucumbers, red onions, Kalamata olives, feta cheese, and Greek dressing.'),
    ],
  },
  {
    title: 'Pasta Tradizionale',
    items: [
      item('Spaghetti alla Carbonara', '$22', 'Spaghetti with pancetta, egg yolk, Pecorino Romano, and black pepper.'),
      item('Penne alla Vodka', '$22', 'Penne in a creamy tomato vodka sauce.'),
      item('Rigatoni Bolognese', '$23', 'Rigatoni with slow-cooked meat sauce.'),
      item('Lasagna alla Bolognese', '$24', 'Layers of pasta, meat sauce, ricotta, mozzarella, and Parmesan.'),
      item('Fettuccine Alfredo', '$24', 'Fettuccine in a rich Parmesan cream sauce.'),
      item('Rigatoni al Pesto', '$24', 'Rigatoni pasta tossed in fresh basil pesto sauce.'),
      item('Baked Ziti', '$24', 'Ziti pasta baked in marinara sauce with ricotta and melted mozzarella.'),
      item('Penne Primavera', '$24', 'Penne pasta with spinach in creamy garlic sauce.'),
      item('Penne Arrabbiata', '$24', 'Penne pasta in a spicy marinara sauce with garlic and chili flakes.'),
      item('Spaghetti al Pomodoro', '$24', 'Traditional tomato sauce with basil and Parmesan.'),
      item('Tortellini Rosa', '$24', 'Cheese tortellini in a creamy tomato-Parmesan sauce.'),
      item('Spaghetti Puttanesca', '$25', 'Spaghetti with tomato sauce, capers, olives, anchovies, and garlic.'),
    ],
  },
  {
    title: 'Chicken',
    items: [
      item('Chicken Parmesan', '$24', 'Breaded chicken cutlet topped with marinara sauce and melted mozzarella.'),
      item('Chicken Florentine', '$25', 'Grilled chicken with mushrooms and spinach in creamy garlic sauce.'),
      item('Chicken Piccata', '$25', 'Grilled chicken in a lemon, white wine, and caper sauce.'),
      item('Chicken Alfredo', '$26', 'Grilled chicken over fettuccine in a rich Parmesan cream sauce.'),
    ],
  },
  {
    title: 'Veal',
    items: [
      item('Veal Parmesan', '$28', 'Breaded veal cutlet topped with marinara sauce and melted mozzarella.'),
      item('Veal Florentine', '$29', 'Grilled veal with mushrooms and spinach in creamy garlic sauce.'),
      item('Veal Piccata', '$29', 'Grilled veal in a lemon, white wine, and caper sauce.'),
    ],
  },
  {
    title: 'Seafood',
    items: [
      item('Shrimp Scampi', '$28', 'Shrimp sautéed in garlic, lemon, white wine, and herbs over linguine.'),
      item('Shrimp Fra Diavolo', '$29', 'Shrimp sautéed in a spicy marinara sauce over linguine.'),
      item('Lobster Ravioli', '$30', 'Lobster-filled ravioli in a creamy pink sauce with a touch of brandy.'),
      item('Linguine Vongole', '$29', 'Linguine with fresh clams in a garlic white wine sauce, with a touch of red pepper.'),
      item('Linguine ai Frutti di Mare', '$32', 'Linguine with shrimp, calamari, mussels, and clams in a lemon white wine sauce.'),
      item('Seafood Ravioli', '$29', 'Ravioli stuffed with lobster meat and crab with roasted red peppers, spinach in creamy garlic sauce.'),
    ],
  },
  {
    title: 'House Specialties',
    items: [
      item('Lasagna alla Bolognese', '$24', 'Layers of pasta, meat sauce, ricotta, mozzarella, and Parmesan.'),
      item('Eggplant Parmesan', '$22', 'Breaded eggplant layered with marinara sauce, mozzarella, and Parmesan.'),
      item('Manicotti', '$23', 'Pasta tubes filled with ricotta and herbs, topped with marinara sauce and mozzarella.'),
      item('Cheese Ravioli', '$22', 'Cheese-filled ravioli topped with marinara sauce.'),
    ],
  },
]

export const addOns = [
  item('Grilled Chicken', '$8'),
  item('Shrimp', '$12'),
  item('Fresh Burrata', '$8'),
]

export const desserts = [
  item('Tiramisu', '$10'),
  item('Cannoli', '$9'),
  item('Cheesecake', '$9'),
  item('Affogato', '$10'),
  item('Key Lime Pie', '$9'),
  item('Limoncello Mascarpone Cake', '$10'),
]

export const cocktails = [
  item('Limoncello Martini', '', '360 Lemon Vodka, housemade limoncello, and fresh lemon.'),
  item('Aperol Spritz', '', 'Aperol, Cointreau, fresh lemon, and Coppola Prosecco.'),
  item('Italian Margarita', '', 'Disaronno, Casa Azul Organico Reposado, fresh lime, and Cointreau.'),
  item('Coffee Negroni', '', 'Borghetti Espresso, Boatyard Gin, sweet vermouth, and Campari.'),
  item('Espresso Martini', '', '360 Vanilla Vodka, espresso, and simple syrup. Make it creamy with Five Farms Irish Cream.'),
  item('Old Fashioned', '', 'Penelope Wheated Bourbon, bitters, and simple syrup.'),
  item('The Don', '', 'The Macallan 12 Double Cask, Disaronno, bruléed lemon, and housemade limoncello.'),
  item('Limoncello Spritz', '', 'Hendrick’s Gin, housemade limoncello, and Coppola Prosecco.'),
]

// Wine prices are glass / bottle.
export const wine = [
  {
    title: 'Red',
    items: [
      item('Boen Pinot Noir, CA', '12 / 46'),
      item('Banfi Chianti Classico, IT', '13 / 50'),
      item('Ruffino Chianti Riserva, IT', '18 / 70'),
      item('Banfi Stilnovo Sangiovese, IT', '16 / 62'),
      item('ASKA Red, IT', '22 / 86'),
      item('Belnero Red, Toscana, IT', '20 / 78'),
      item('Z. Alexander Brown Cabernet Sauvignon, CA', '11 / 42'),
      item('St. Hubert The Stag Cabernet Sauvignon, CA', '15 / 58'),
      item('Caymus “California” Cabernet Sauvignon, CA', '— / 110'),
    ],
  },
  {
    title: 'White',
    items: [
      item('Principessa Gavia Gavi, IT', '13 / 50'),
      item('La Pettegola Vermentino, IT', '13 / 50'),
      item('San Angelo Pinot Grigio, IT', '11 / 42'),
      item('Santa Margherita Pinot Grigio, IT', '16 / 62'),
      item('Mer Soleil Silver Chardonnay, CA', '11 / 42'),
      item('Decoy Chardonnay, CA', '16 / 62'),
      item('Matua Sauvignon Blanc, NZ', '11 / 42'),
      item('Threadcount Sauvignon Blanc, CA', '11 / 42'),
    ],
  },
  {
    title: 'Rosé',
    items: [item('Louis Jadot Rosé, FR', '13 / 50')],
  },
  {
    title: 'Sparkling',
    items: [
      item('Coppola Prosecco, IT', '7 / 40'),
      item('Mionetto Prosecco, IT', '9 / 52'),
      item('Banfi Brut Sparkling, IT', '10 / 38'),
      item('Piper-Heidsieck Champagne, FR', '— / 110'),
    ],
  },
]

export const beer = [
  'Abita', 'Blue Moon', 'Bud Light', 'Coors Light', 'Corona Especial', 'Dos Equis Especial',
  'Heineken', 'High Noon', 'Michelob Ultra', 'Miller Lite', 'Modelo Especial', 'Peroni',
  'Stella Artois', 'Yuengling Flight', 'Yuengling Lager',
]

export const menuFinePrint = [
  'Parties of 5 or more will have a 20% gratuity added. A 4% non-cash adjustment is added to all card transactions.',
]
