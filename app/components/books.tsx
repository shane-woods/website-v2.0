"use client";
import { useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";
import Navbar from "./navbar";
import BookList from "./booklist";

type Book = {
  id: number;
  title: string;
  author: string;
  currently_reading: boolean;
  num_stars: number;
  img_url: string;
};

const Books: React.FC = () => {
  const handleClick = (targetId: string) => {
    console.log(`targetId: ${targetId}`);
    const targetElement = document.getElementById(targetId);
    console.log(`target: ${targetElement}`);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust the offset based on your layout
        behavior: "smooth",
      });
    }
  };

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch the list of books when the component mounts
    const fetchData = async () => {
      const { data, error } = await supabase.from("books").select();
      if (error) {
      } else {
        setBooks(data);
      }
    };

    fetchData();
  }, []);

  return <BookList data={books} />;
};

export default Books;
