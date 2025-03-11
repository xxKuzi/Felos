import React from "react";
import { useNavigate } from "react-router";
import Generator from "@/parts/Generator";
import Ai from "@/components/Ai";
import AiQuick from "@/components/AiQuick";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-10 text-7xl">Home</p>

      <Generator />

      <button className="mt-32" onClick={() => navigate("/leaderboard")}>
        leaderboard
      </button>
      <Ai />
      <AiQuick />
    </div>
  );
}
