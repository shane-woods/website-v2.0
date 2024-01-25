"use client";
import Image from "next/image";
import React from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  currently_reading: boolean;
  num_stars: number;
  img_url: string;
};

const BookList = ({ data }: { data: Book[] }) => {
  return (
    <div className="flex flex-col w-full items-center pt-12 space-y-12">
      <h1 className="p-3 text-5xl">Books</h1>
      <div className="flex flex-row space-x-28">
        {data.map((book) => (
          <div className="flex flex-col" key={book.id}>
            <Image
              src={book.img_url}
              alt="image of book cover"
              height={300}
              width={230}
            />
            <div className="text-lg font-bold">{book.title}</div>
            <div className="text-md">by {book.author}</div>
            <Stars rating={book.num_stars} />
          </div>
        ))}
      </div>
    </div>
  );
};

type StarProp = {
  rating: number;
};

const Stars = (prop: StarProp) => {
  const starsArray = Array.from(
    { length: prop.rating },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-row">
      {starsArray.map((starNumber) => (
        <div key={starNumber} className="text-yellow-500 text-2xl">
          ⭐️
        </div>
      ))}
    </div>
  );
};

export default BookList;
