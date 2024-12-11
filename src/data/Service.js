const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const items = [
  {
    id: 1,
    name: "Pork Sandwich",
    image: "/assets/food_menu/single_food_1.png",
    description: "Delicious pork sandwich with fresh vegetables.",
    price: 50,
    quality: 1,
    category: "Breakfast"
  },
  // Thêm mấy cái khác ... 
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000/product:${PORT}`);
});