import Entertainment from "@/app/entertainment/components/Entertainment";
import Sport from "@/app/sport/components/Sport";
import Religion from "./religion/components/Religion";

export default function Home() {
  return (
    <main className="space-y-4 h-[200vh]">
      <div className="bg-red-900 h-[10vh]"></div>
      <Entertainment />
      <Sport />
      <div className="bg-red-900 h-[10vh]"></div>
      <Religion />
    </main>
  );
}
