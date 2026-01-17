import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.oibnujx.mongodb.net/?appName=Cluster0`;

// Mock user
const MOCK_USER = { email: "admin@example.com", password: "123456" };

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("e-products");
    const itemsCollection = db.collection("items");

    app.post("/api/auth/login", (req, res) => {
      const { email, password } = req.body;
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        res.cookie("user", email, { signed: true, httpOnly: true });
        return res.json({ message: "Login successful" });
      }
      res.status(401).json({ message: "Invalid credentials" });
    });

    // Logout
    app.post("/api/auth/logout", (req, res) => {
      res.json({ message: "Logged out" });
    });

    // Get all items
    app.get("/api/items", async (req, res) => {
      try {
        const items = await itemsCollection.find({}).toArray();
        res.json(items);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // Get single item
    app.get("/api/items/:id", async (req, res) => {
      try {
        const item = await itemsCollection.findOne({
          _id: new ObjectId(req.params.id),
        });
        // if (!item) return res.status(404).json({ message: "Item not found" });
        res.json(item);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // Add new item (Protected)
    app.post("/api/items", async (req, res) => {
      const user = req.signedCookies.user;
      if (!user) return res.status(401).json({ message: "Unauthorized" });

      const { name, description, price, image } = req.body;
      try {
        const result = await itemsCollection.insertOne({
          name,
          description,
          price,
          image,
        });
        res.status(201).json(result);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("e-products Backend is running");
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
