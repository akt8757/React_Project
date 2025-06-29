export default function Reaction({ reaction }) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {arr.map((_, i) => (
        <span
          key={i}
          className={i < reaction ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
