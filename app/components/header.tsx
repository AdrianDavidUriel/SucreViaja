import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-center items-center mx-auto px-4 py-4">
        <Link href="/" className="text-2xl font-extrabold text-gray-800">
          SUCRE VIAJA
        </Link>
      </div>
    </header>
  );
}
