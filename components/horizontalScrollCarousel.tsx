"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cards } from "@/constants/card";
import { MyCard } from "./MyCard";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <MyCard key={card.id} card={card} />
          ))}
          qtest
        </motion.div>
      </div>
    </section>
  );
}
