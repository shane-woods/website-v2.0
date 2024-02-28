"use client";
import React, { useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";
import BookList from "./booklist";
import type { Book } from "@/shared/lib/types";

const Books = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
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

    if (books.length === 0) return <div></div>;

    return (
      <div ref={ref} className="w-full pt-16">
        <BookList data={books} />
      </div>
    );
  }
);

export default Books;
