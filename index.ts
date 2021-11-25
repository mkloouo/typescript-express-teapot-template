import express from "express";

const app = express();
const port = 5050;

app.get("/hello-world", (_req, res) => {
  const status = 200;

  return res.status(status).json({
    string: "hello-world",
    status,
  });
});

app.get("/teapot", (_req, res) => {
  const status = 418;

  return res.status(status).json({
    string: "I'm a teapot",
    status,
  });
});

app.listen(port, () => {
  console.log(`App is listening on localhost:${port}.`);
});
