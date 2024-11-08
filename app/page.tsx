import HorizontalScrollCarousel from "@/components/horizontalScrollCarousel";
export default function Home() {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center min-h-screen">
        <span className="font-semibold uppercase text-neutral-500">
          scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center min-h-screen">
        <span className="font-semibold uppercase text-neutral-500">
          scroll down
        </span>
      </div>
    </div>
  );
}
