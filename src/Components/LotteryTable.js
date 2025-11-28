import lotteryData from "../data/lottery.json";

export default function LotteryTable() {
  // Sort by date descending (latest first)
  const sorted = [...lotteryData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Take the latest 3
  const lastThree = sorted.slice(0, 3);

  return (
    <section id="table" className="table-section">
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>F/R</th>
            <th>S/R</th>
          </tr>
        </thead>
        <tbody>
          {lastThree.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.first}</td>
              <td>{row.second}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
