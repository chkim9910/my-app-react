export default function Viewer({ count }) {
  return (
    <>
      <div>
        <h1 className="count">{count}</h1>
      </div>

      <style jsx>{`
        .count {
          color: hotpink;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
