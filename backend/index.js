const express = require('express');
const cors = require('cors');
// const userRoutes = require('./routes/user');
// const productRoutes = require('./routes/products');
const ingredientRoute=require('./routes/Ingredients')
const app = express();

app.use(cors());
app.use(express.json());

// app.use('/api/user', userRoutes);
app.use("/api/ingredients",ingredientRoute)
// app.use('/api/products', productRoutes);

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
};
// connectDB() 
module.exports = app;
