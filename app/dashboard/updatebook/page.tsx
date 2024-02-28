"use client";
import React, { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import DashHeader from "@/app/components/dashheader";

type Book = {
  id: number;
  title: string;
  author: string;
  currently_reading: boolean;
  num_stars: number;
  img_url: string;
};

const UpdateBook = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [numStars, setNumStars] = useState<number>(0);
  const [imgUrl, setImageUrl] = useState<string>("");
  const [currentlyReading, setCurrentlyReading] = useState<boolean>(false);

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

  const handleCurrentlyReading = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    if (ev.target.value === "yes") {
      setCurrentlyReading(true);
    } else if (ev.target.value === "no") {
      setCurrentlyReading(false);
    }

    setCurrentlyReading((prevReading) => {
      return prevReading;
    });
  };

  const handleUpdate = async () => {
    if (selectedBook) {
      try {
        // Create an object with only the changed fields
        const updatedFields: Partial<Book> = selectedBook;
        if (title !== selectedBook.title && title.length !== 0)
          updatedFields.title = title;
        if (author !== selectedBook.author && author.length !== 0)
          updatedFields.author = author;
        if (currentlyReading !== selectedBook.currently_reading)
          updatedFields.currently_reading = currentlyReading;
        if (numStars !== selectedBook.num_stars)
          updatedFields.num_stars = numStars;
        if (imgUrl !== selectedBook.img_url && imgUrl.length !== 0)
          updatedFields.img_url = imgUrl;

        const { error } = await supabase
          .from("books")
          .update(updatedFields)
          .eq("id", selectedBook.id);

        if (error) {
          console.error("Error updating book:", error);
        } else {
          setTitle("");
          setAuthor("");
          setCurrentlyReading(false);
          setNumStars(0);
          setImageUrl("");
          setSelectedBook(null);
        }
      } catch (error) {
        console.error("Error updating book:", error);
      }
    }
  };

  const currentToString = (currently: boolean): string => {
    if (currently) {
      return "yes";
    } else {
      return "no";
    }
  };

  return (
    <div>
      <DashHeader />
      <div className="flex flex-col min-h-screen justify-start items-center space-y-2">
        <div className="text-2xl">Update a Book</div>
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
              <div className="flex flex-row space-x-24">
                <div className="flex flex-col">
                  <label className="text-md">Title</label>
                  <input
                    type="text"
                    value={title}
                    placeholder={selectedBook.title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    className="p-2 border border-black rounded-md"
                  />
                  <label>Author</label>
                  <input
                    type="text"
                    value={author}
                    placeholder={selectedBook.author}
                    onChange={(ev) => setAuthor(ev.target.value)}
                    className="p-2 border border-black rounded-md"
                  />
                  <label>Are you currently reading this book?</label>
                  <select
                    onChange={(ev) => handleCurrentlyReading(ev)}
                    className="p-2 border border-black rounded-md"
                    defaultValue={"no"}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Number of Stars out of 5</label>
                  <select
                    onChange={(ev) => setNumStars(parseInt(ev.target.value))}
                    className="p-2 border border-black rounded-md"
                    value={numStars}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <label>URL for image of book cover</label>
                  <input
                    type="text"
                    value={imgUrl}
                    placeholder={selectedBook.img_url}
                    onChange={(ev) => setImageUrl(ev.target.value)}
                    className="p-2 border border-black rounded-md"
                  />
                </div>
              </div>
              <button
                className="p-2 mt-2 border border-black bg-blue-400 rounded-md"
                onClick={handleUpdate}
              >
                Update Book
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
