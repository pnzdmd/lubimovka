import "./SmallLink.css";

const SmallLink = (props) => {
  const { children, url } = props;

  return (
    <a className="small-link" href={url}>
      {children}
    </a>
  );
};

export default SmallLink;
