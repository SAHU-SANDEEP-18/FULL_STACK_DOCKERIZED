import express from "express";
import morgan from "morgan";
const PORT = 3000;
const app = express();
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ status: "Hello World !!" });
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "sandeep" },
    { id: 2, name: "sagar" },
    { id: 3, name: "deep" },
    { id: 4, name: "deepka" },
  ];

  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
