import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API: Contact / WhatsApp inquiry
app.post('/api/contact', (req, res) => {
  const { name, phone, message } = req.body;
  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }
  console.log(`New inquiry — Name: ${name}, Phone: ${phone}, Msg: ${message}`);
  res.json({
    success: true,
    message: 'Inquiry received! We will contact you soon on WhatsApp.',
    whatsappLink: `https://wa.me/919671634017?text=Hi!%20My%20name%20is%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`
  });
});

// API: Products list
app.get('/api/products', (req, res) => {
  res.json({
    categories: [
      { id: 1, name: 'iPhone', icon: '🍎' },
      { id: 2, name: 'Android Phones', icon: '🤖' },
      { id: 3, name: 'Phone Covers', icon: '🛡️' },
      { id: 4, name: 'Accessories', icon: '🎧' },
      { id: 5, name: 'Screen Guards', icon: '🔒' },
      { id: 6, name: 'Jio Services', icon: '📶' },
    ]
  });
});

// API: Shop info
app.get('/api/shop', (req, res) => {
  res.json({
    name: "Singh's Solution Mobile Shopee",
    address: "Shop No. 11, Old Court Complex, Near Khalsa Petrol Pump, Fawara Chowk, Hisar, Haryana 125001",
    phones: { shubham: "9671634017", sahil: "8684932498" },
    whatsapp: "9671634017",
    instagram: "singh_s_soultions",
  });
});

// Serve React build
app.use(express.static(join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Singh's Solution running on port ${PORT}`);
});
