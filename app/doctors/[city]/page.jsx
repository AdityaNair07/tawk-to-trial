import React from "react";

const Page = async ({ params }) => {
  const { city } = await params;

  return (
    <div className="text-3xl text-red-600">
      <h1>City page {city}</h1>
    </div>
  );
};

export const metadata = {
  title: "City page",
  description: "Implementing Tawk.to in Next.js",
};

export default Page;
