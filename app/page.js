import TawkToChat from "@/components/TawktoChat";

export default function Home() {
  return (
    <div className="text-xl text-red-500 text-center uppercase py-4 poppins">
      hello world
      <TawkToChat pageData={["Delhi", "Motihari"]} />
    </div>
  );
}
