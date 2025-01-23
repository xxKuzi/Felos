import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home</p>
      <button onClick={() => navigate("/leaderboard")}>leaderboard</button>
    </div>
  );
}
