"use client";

import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [tasks, setTasks] = useState();
  const [visible, setVisible] = useState();

  const addTodo = () => {
    console.log("Click");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <header className="w-screen">
        <div className="container flex items-center justify-between">
          <h1 className="inline-block cursor-none bg-gradient-to-r from-blue-500 via-green-500 to-indigo-500 bg-clip-text text-3xl font-semibold text-transparent">
            TaskFlow
          </h1>
          <button
            onClick={addTodo}
            className="cursor-pointer text-3xl leading-none font-semibold text-green-500"
          >
            +
          </button>
        </div>
      </header>
      <section>
        <div></div>
      </section>
      {visible && (
        <div>
          <form action=""></form>
        </div>
      )}
    </div>
  );
};

export default Home;
