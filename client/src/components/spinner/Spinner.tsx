const Spinner = ({ isProd }: { isProd?: boolean }) => {
  return (
    <div className={`"active" ${isProd ? "" : "spinner-overlay"}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
