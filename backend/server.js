import express from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.use(cors);
app.use(express.json());

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
})
.catch(err => console.log(err));
