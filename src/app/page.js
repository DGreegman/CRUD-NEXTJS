import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex items-center justify-items-center min-h-screen p-8 bg-gradient-to-r from-purple-700 to-blue-700">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-4">Browse Our blog Collection</h2>
        <Link href={'/blogs'} className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded">Expolore Blogs</Link>
      </div>
    </div>
  );
}
