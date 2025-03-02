"use client";

import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [tasks, setTasks] = useState();

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="inline-block bg-gradient-to-r from-blue-500 via-green-500 to-indigo-500 bg-clip-text text-3xl font-semibold text-transparent">
            TaskFlow
          </h1>
          <button className="cursor-pointer text-3xl leading-none font-semibold text-green-500">
            +
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
