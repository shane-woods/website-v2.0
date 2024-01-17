"use client";
import { useState, useEffect } from "react";
// Initialize the JS client
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

interface Book {
  id: number;
  title: string;
  img_url: string;
  author: string;
  currently_reading: boolean;
  num_stars: number;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<[]>([]);

  useEffect(() => {
    // Fetch the list of books when the component mounts
    const fetchData = async () => {
      const { data, error } = await supabase.from("books").select();
      if (error) {
        console.log("REQUEST FAILED");
      } else {
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {/* {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Books;
