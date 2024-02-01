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
  const currentlyReadingBooks = data.filter((book) => book.currently_reading);
  const readBooks = data.filter((book) => !book.currently_reading);

  return (
    <div className="flex flex-col w-full items-center py-12 space-y-12">
      <h1 className="p-3 text-5xl">Books</h1>
      <div className="flex flex-col items-center">
        <div className="p-3 mb-3 text-3xl">Currently Reading</div>
        {currentlyReadingBooks.map((book) => (
          <Book book={book} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="p-3 mb-3 text-3xl">Books I've read</div>
        <div className="flex flex-row space-x-28">
          {readBooks.map((book) => (
            <Book book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Book = ({ book }: { book: Book }) => {
  return (
    <div className="flex flex-col" key={book.id}>
      {book.currently_reading ? (
        <div>
          <Image
            src={book.img_url}
            alt="image of book cover"
            height={300}
            width={230}
          />
          <div className="text-lg font-bold mt-1">{book.title}</div>
          <div className="text-md">by {book.author}</div>
          <Stars rating={book.num_stars} current={book.currently_reading} />
        </div>
      ) : (
        <div>
          <Image
            src={book.img_url}
            alt="image of book cover"
            height={150}
            width={80}
          />
          <div className="text-md font-bold mt-1">{book.title}</div>
          <div className="text-sm">by {book.author}</div>
          <Stars rating={book.num_stars} current={book.currently_reading} />
        </div>
      )}
    </div>
  );
};

type StarProp = {
  rating: number;
  current: boolean;
};

const Stars = (prop: StarProp) => {
  const starsArray = Array.from(
    { length: prop.rating },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-row">
      {starsArray.map((starNumber) => (
        <div>
          {prop.current ? (
            <div key={starNumber} className="text-2xl">
              ⭐️
            </div>
          ) : (
            <div key={starNumber} className="text-lg">
              ⭐️
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
