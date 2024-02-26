"use client";
import Image from "next/image";
import React, { useState } from "react";
import type { Book } from "@/shared/lib/types";

const BookList = ({ data }: { data: Book[] }) => {
  const [more, setMore] = useState(false);

  const handleMore = (request: boolean) => {
    if (request) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  const currentlyReadingBooks: Book[] = data.filter(
    (book) => book.currently_reading
  );
  const currentBooks: Book[] = currentlyReadingBooks;
  const readBooks: Book[] = data.filter((book) => !book.currently_reading);

  return (
    <div className="flex flex-col w-full items-center space-y-12">
      <div className="flex flex-col items-center w-full">
        <CurrentBooks currentBooks={currentBooks} />
        <ReadBooks books={readBooks} more={more} />
        {more ? (
          <ShowLess handleMore={handleMore} />
        ) : (
          <ShowMore handleMore={handleMore} />
        )}
      </div>
    </div>
  );
};

type CurrentProps = {
  currentBooks: Book[];
};

const CurrentBooks = (props: CurrentProps) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="p-3 mb-5 text-3xl dark:text-slate-200">
        Currently Reading
      </div>
      <div className="flex flex-row items-stretch">
        {props.currentBooks.map((currentBook) => (
          <div
            key={currentBook.id}
            className="flex flex-col items-center w-1/2"
          >
            <Image
              src={currentBook.img_url}
              alt="image of book cover"
              height={300}
              width={230}
            />
            <div className="text-lg font-bold mt-2 text-center dark:text-slate-200">
              {currentBook.title}
            </div>
            <div className="text-md mb-2 dark:text-slate-200">
              by {currentBook.author}
            </div>
            <Stars rating={currentBook.num_stars} current={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

type ReadProps = {
  books: Book[];
  more: boolean;
};

const ReadBooks = (props: ReadProps) => {
  let books = [];
  if (props.more) {
    books = props.books;
  } else {
    books = props.books.slice(0, 3);
  }
  return (
    <>
      <div className="p-3 mb-5 text-3xl dark:text-slate-200">
        Books read in 2024
      </div>
      <div className="grid grid-cols-3 w-3/4 place-items-center gap-10">
        {books.map((book, index) => (
          <Book book={book} />
        ))}
      </div>
    </>
  );
};

const Book = ({ book }: { book: Book }) => {
  return (
    <div key={book.id} className="flex flex-col items-center">
      <Image
        src={book.img_url}
        alt="image of book cover"
        height={150}
        width={80}
      />
      <div className="text-md font-bold mt-1 dark:text-slate-200 text-center">
        {book.title}
      </div>
      <div className="text-sm dark:text-slate-200 text-center">
        by {book.author}
      </div>
      <Stars rating={book.num_stars} current={book.currently_reading} />
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
        <div key={starNumber}>
          {prop.current ? (
            <div className="text-2xl">⭐️</div>
          ) : (
            <div className="text-lg">⭐️</div>
          )}
        </div>
      ))}
    </div>
  );
};

type ButtonProp = {
  handleMore: (request: boolean) => void;
};

const ShowMore = (prop: ButtonProp) => {
  const handleClick = () => {
    prop.handleMore(true);
  };

  return (
    <button className="py-2 dark:text-slate-200" onClick={handleClick}>
      Show More
    </button>
  );
};

const ShowLess = (prop: ButtonProp) => {
  const handleClick = () => {
    prop.handleMore(false);
  };
  return (
    <button className="py-2 dark:text-slate-200" onClick={handleClick}>
      Show Less
    </button>
  );
};

export default BookList;
