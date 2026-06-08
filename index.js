import express from "express";
import { describe } from "node:test";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, World!",
    success: true,
    author: "yash",
    data: {
      title: "Yash Is the King",
      description:
        "yash is a great person , i mean so great of a being we can't describe him in words let alone in any meaningful way",
    },
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
