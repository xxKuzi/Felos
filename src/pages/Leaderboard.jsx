import React from "react";
import { useNavigate } from "react-router";

export default function Leaderboard() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/leaderboard")}>leaderboard</button>
    </div>
  );
}
