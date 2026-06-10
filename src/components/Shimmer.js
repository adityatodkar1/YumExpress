import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>

            <div className="shimmer-content">
              <div className="shimmer-line title"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line short"></div>

              <div className="shimmer-footer">
                <div className="shimmer-small"></div>
                <div className="shimmer-small"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;