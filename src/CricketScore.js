import { useState } from "react";

function CricketScore() {
  const [scores, setScores] = useState([]);
  const [runs, setRuns] = useState("");

  const addScore = () => {
    setScores([...scores, { ball: scores.length + 1, runs: Number(runs) }]);
    setRuns("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">ক্রিকেট স্কোর ট্র্যাকার</h1>
      <table className="table-auto border-collapse border border-gray-400 w-full max-w-md mb-4">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-400 px-4 py-2">বল নম্বর</th>
            <th className="border border-gray-400 px-4 py-2">রান</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index} className="bg-white text-center">
              <td className="border border-gray-400 px-4 py-2">{score.ball}</td>
              <td className="border border-gray-400 px-4 py-2">{score.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4">
        <input
          type="number"
          value={runs}
          onChange={(e) => setRuns(e.target.value)}
          placeholder="রান লিখুন"
          className="border border-gray-400 px-4 py-2 rounded"
        />
        <button
          onClick={addScore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          স্কোর আপডেট করুন
        </button>
      </div>
    </div>
  );
}

export default CricketScore;
