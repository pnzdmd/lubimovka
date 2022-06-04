import "./PaginationDots.css";

const PaginationDots = (props) => {

  const { data, current, clickHandler } = props;

  return (
    <>
      {data.length > 0 && (
        <div className="reviews__pagination-dots">
          {data.map((item) => {
            return item === current ? (
              <div className="reviews__pagination-dot reviews__pagination-dot_current" key={item}></div>
            ) : (
              <div className="reviews__pagination-dot" id={item} onClick={(evt) => clickHandler(evt)} key={item}></div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PaginationDots;
