"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

import { useState } from "react";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);

    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    const word = await data[0];

    if (!res) return;

    router.push(`/search/web?searchTerm=${word}`);

    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="btn flex justify-center items-center disabled:opacity-80"
          onClick={randomSearch}
        >
          {randomSearchLoading ? (
            <img src="spinner.svg" alt="Loading..." className="h-6 text-center" />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};
export default HomeSearch;
