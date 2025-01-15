import TawkToChat from "@/components/TawktoChat";
import React from "react";

const Page = async ({ params }) => {
  const { city } = await params;

  console.log("city data: ", city);

  return (
    <div className="text-3xl text-red-600">
      <h1>City page {city}</h1>
      <TawkToChat pageData={["Delhi", "Motihari"]} />
    </div>
  );
};

export default Page;
