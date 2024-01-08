import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link, useHref } from "react-router-dom";
import classNames from "classnames";

export default function Header() {
  const href = useHref();

  return (
    <SignedIn>
      <div
        className={classNames("flex items-center space-x-4 mb-4", {
          "justify-between": href !== "/",
          "justify-end": href === "/",
        })}
      >
        {href !== "/" && (
          <Link
            to="/"
            className="hover:scale-105 hover:bg-white/25 transition-all flex items-center space-x-2 rounded px-4 py-2 bg-white/10 border border-white/50"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z" />
            </svg>
            <span>Geri Dön</span>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" showName={true} />
        {/*<SignOutButton className="hover:bg-red-700 hover:text-white transition-all shadow-xl p-4 rounded bg-red-200 text-red-700 h-9 px-4 flex items-center justify-center" />*/}
      </div>
    </SignedIn>
  );
}
