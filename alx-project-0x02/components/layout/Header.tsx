import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-center space-x-8">
      <nav>
        <Link href="/home" className="text-blue-600 hover:underline">Home</Link>
      </nav>
      <nav>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>
      <nav>
        <Link href="/posts" className="text-blue-600 hover:underline">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
