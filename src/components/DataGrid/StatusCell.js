export default function StatusCell({ progress, status }) {
  return (
    <div className="StatusCell">
      {" "}
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "7px",
          backgroundColor:
            progress < 50
              ? "red"
              : progress >= 50 && progress < 90
              ? "orange"
              : "yellowgreen",
          display: "inline-block",
          marginRight: "1.5rem",
        }}
      ></span>
      {status}
    </div>
  );
}
