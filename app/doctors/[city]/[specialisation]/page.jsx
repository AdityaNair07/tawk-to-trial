import React from "react";

const Page = async ({ params }) => {
  const { specialisation } = await params;

  return (
    <div className="text-3xl p-5">
      <h1>Specialisation Page</h1>
      <h2>{specialisation}</h2>
    </div>
  );
};

export const metadata = {
  title: "Specialisation page",
  description: "Implementing Tawk.to in Next.js",
};

export default Page;
