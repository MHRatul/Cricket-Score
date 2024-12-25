import { useState } from "react";

function CricketScore() {
  const [scores, setScores] = useState([]);
  const [runs, setRuns] = useState("");

  const addScore = () => {
    setScores([...scores, { ball: scores.length + 1, runs: Number(runs) }]);
    setRuns("");
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>বল নম্বর</th>
            <th>রান</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.ball}</td>
              <td>{score.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="number"
        value={runs}
        onChange={(e) => setRuns(e.target.value)}
        placeholder="রান লিখুন"
      />
      <button onClick={addScore}>স্কোর আপডেট করুন</button>
    </div>
  );
}

export default CricketScore;
