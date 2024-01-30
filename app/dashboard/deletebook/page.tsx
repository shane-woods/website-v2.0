"use client";
import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import SignOut from "@/app/components/signout";
import DashHeader from "@/app/components/dashheader";

type Book = {
  id: number;
  title: string;
  author: string;
  currentlyReading: boolean;
  numStars: number;
};

const DeleteBook = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("books").select("*");
      if (error) {
      } else {
        setBooks(data);
      }
    };

    fetchData();
  }, []);

  const handleBookSelection = (book: Book) => {
    setSelectedBook(book);
  };

  const handleDelete = async () => {
    if (selectedBook) {
      try {
        const { data, error } = await supabase
          .from("books")
          .delete()
          .eq("title", selectedBook.title)
          .eq("author", selectedBook.author);

        if (error) {
          console.error("Error deleting book:", error);
        } else {
          console.log("Book deleted successfully:", data);

          // Update the state to reflect the deleted book
          setBooks(books.filter((book) => book !== selectedBook));
          setSelectedBook(null);
        }
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div>
      <DashHeader />
      <div className="flex flex-col min-h-screen justify-start items-center space-y-2">
        <div className="text-2xl">Delete a Book</div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            {books.map((book, index) => (
              <div
                className="cursor-pointer border border-black rounded-md p-2"
                key={index}
                onClick={() => handleBookSelection(book)}
              >
                {book.title} by {book.author}
              </div>
            ))}
          </div>
          {selectedBook && (
            <div>
              <p>
                Selected Book: {selectedBook.title} by {selectedBook.author}
              </p>
              <button
                className="p-2 border border-black bg-blue-400 rounded-md"
                onClick={handleDelete}
              >
                Delete Book
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
