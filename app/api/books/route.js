"use client";
import express from "express";
import { createBrowserClient } from "@supabase/ssr";
import bodyParser from "body-parser";

const app = express();

// using morgan for logs

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

app.get("/books", async (req, res) => {
  const { data, error } = await supabase.from("products").select();
  res.send(data);
});

app.get("/books/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select()
    .is("id", req.params.id);
  res.send(data);
});

app.post("/books", async (req, res) => {
  const { error } = await supabase.from("products").insert({
    title: req.body.title,
    img_url: req.body.img_url,
    author: req.body.author,
    currently_reading: req.body.currently_reading,
    num_stars: req.body.num_stars,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});

app.delete("/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("deleted!!");
});

app.get("/", (req, res) => {
  res.send("Hello I am working my friend Supabase <3");
});

app.listen(8000, () => {
  console.log(`> Ready on http://localhost:8000`);
});
