import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-800">ALX Project</h2>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/home" className="text-blue-600 hover:underline">
          /home
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline">
          /about
        </Link>
      </nav>
    </header>
  );
};

export default Header;
