"use client";
import React, { useState } from "react";

const AddBook = () => {
  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [currentlyReading, setCurrentlyReading] = useState<boolean>(false);
  const [numStars, setNumStars] = useState<number>(0);

  const insertData = () => {};

  const handleCurrentlyReading = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    if (ev.target.value === "yes") {
      setCurrentlyReading(true);
    } else if (ev.target.value === "no") {
      setCurrentlyReading(false);
    }

    console.log(currentlyReading);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-2">
      <div className="text-2xl">Add a Book</div>
      <div className="flex flex-col space-y-3">
        <label>Title</label>
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
    </div>
  );
};

export default AddBook;
