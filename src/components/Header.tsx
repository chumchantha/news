import Link from "next/link";
import { Search } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Entertainment",
    href: "/entertainment",
  },
  {
    label: "Sport",
    href: "/sport",
  },
  {
    label: "Religion",
    href: "/religion",
  },
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "Foods",
    href: "/food",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50  w-full overflow-hidden">
      <nav className="px-4 flex justify-between items-center bg-black bg-opacity-40 h-16 shadow-2xl">
        {/* Left: Logo  */}
        <div className=" flex gap-2">
          <Link
            href="/"
            className="flex items-center text-3xl font-semibold text-red-500"
          >
            News
          </Link>
        </div>
        {/* Right */}
        <div className="flex items-center gap-4">
          <ul className="text-xl flex items-center gap-2 ">
            {navLinks.map((link) => (
              <li
                className="text-base cursor-pointer bg-gray-700 bg-opacity-30 px-5 py-2 rounded-lg"
                key={link.label}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="relative">
            <button type="submit" name="search">
              <Search className="absolute top-2 left-3" />
            </button>
            <input
              className="bg-gray-800 py-2 px-11 rounded-lg"
              type="text"
              placeholder="Search..."
              name="search"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
