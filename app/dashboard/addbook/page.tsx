"use client";
import React, { useState } from "react";
import { User } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import SignOut from "@/app/components/signout";
import DashHeader from "@/app/components/dashheader";

const AddBook = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [currentlyReading, setCurrentlyReading] = useState<boolean>(false);
  const [numStars, setNumStars] = useState<number>(0);
  const [imgUrl, setImageUrl] = useState<string>("");

  const insertData = async () => {
    const { error } = await supabase.from("books").insert({
      title: title,
      author: author,
      currently_reading: currentlyReading,
      num_stars: numStars,
      img_url: imgUrl,
    });

    if (!error) {
      setTitle("");
      setAuthor("");
      setCurrentlyReading(false);
      setNumStars(0);
      setImageUrl("");
    }
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

  return (
    <div>
      <DashHeader />
      <div className="flex flex-col min-h-screen justify-start items-center space-y-8">
        <div className="text-4xl">Add a Book</div>
        <div className="flex flex-row space-x-24">
          <div className="flex flex-col">
            <label className="text-md">Title</label>
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              className="p-2 border border-black rounded-md"
            />
            <label>Author</label>
            <input
              type="text"
              value={author}
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
              defaultValue={numStars.toString()}
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
              onChange={(ev) => setImageUrl(ev.target.value)}
              className="p-2 border border-black rounded-md"
            />
          </div>
        </div>
        <div className="">
          <button
            onClick={insertData}
            className="p-2 border border-black bg-blue-400 rounded-md"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
