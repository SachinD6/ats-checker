"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {


  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 relative my-10 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden",
             
            )}
            layout
          >
            {/* {selected?.id === card.id && <SelectedCard selected={selected} />} */}
            <div className="p-4 border border-muted bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-xl rounded-lg">

            {card.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

