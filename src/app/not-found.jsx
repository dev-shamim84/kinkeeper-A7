"use client";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className=" container mx-auto text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-[#244D3F]">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>

        <p className="text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-[#244D3F] text-white rounded-lg shadow hover:bg-[#1b3a30] transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
