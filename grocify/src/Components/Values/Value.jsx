import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../Assets/basket-full-vegetables.png";

const value = [
  {
    id: 1,
    title: "Trust",
    para: "This is a long established fact that a reader will be distractrd by thr readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "This is a long established fact that a reader will be distractrd by thr readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "This is a long established fact that a reader will be distractrd by thr readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "This is a long established fact that a reader will be distractrd by thr readable.",
    icon: <FaSeedling />,
  },
];

const Value = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 font-bold text-3xl">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7 ">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 font-bold text-3xl">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Our" heading="Value" />
        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
