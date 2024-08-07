const Spinner = ({ isProd }) => {
  return (
    <div className={`"active" ${isProd ? "" : "spinner-overlay"}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
