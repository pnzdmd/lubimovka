import "./PaginationDots.css";

const PaginationDots = (props) => {
  console.log(props);

  const { data, current } = props;

  return (
    <>
      {data.length > 0 && (
        <div className="reviews__pagination-dots">
          {data.map((item) => {
            return item === current ? (
              <div className="reviews__pagination-dot reviews__pagination-dot_current"></div>
            ) : (
              <div className="reviews__pagination-dot"></div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PaginationDots;
