import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-8 text-semibold text-lg px-4 py-4 bg-blue-200 text-center">
      <Link to="/" className="w-32">
        <p>Home</p>
      </Link>
      <Link to="Compare" className="w-32">
        <p>Compare</p>
      </Link>
      <Link to="leaderboard" className="w-32">
        <p>Leaderboard</p>
      </Link>
    </div>
  );
}
