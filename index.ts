import express from "express";

const app = express();
const port = 5050;

app.all('/', (_req, res) => {
  const status = 200;

  return res.status(status).send('Try adding /teapot :)');
});

app.all("/teapot", (_req, res) => {
  const status = 418;

  return res.status(status).json({
    message: "I'm a teapot",
    status,
  });
});

app.listen(port);
