"use client";
import { useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";
import Name from "../components/name";
import Navbar from "../components/navbar";
import Links from "../components/links";
import BookList from "../components/booklist";

type Book = {
  id: number;
  title: string;
  author: string;
  currently_reading: boolean;
  num_stars: number;
  img_url: string;
};

const Books: React.FC = () => {
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

  console.log(books);
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Name />
        <Navbar />
        <Links />
      </div>
      <BookList data={books} />
    </div>
  );
};

export default Books;
