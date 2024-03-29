const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/database");
const PORT = 3333; //TODO: why do I need to set this here? It should be looking in the .env file
// const morgan = require('morgan')
require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Logging
//TODO: I don't think this is working. Where is it looking for NODE_ENV? Commenting it out for now.
//TODO: I'm just going to take out morgan so it works on heroku, for now
// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");
const api = require("./api");
app.use("/", homeRoutes);
app.use("/admin", adminRoutes);
app.use("/api", api);

//TODO: Here it should not need to have the "OR". It should be getting the environment variable from the .env file
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
