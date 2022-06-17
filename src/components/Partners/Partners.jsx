import './Partners.css'

const Partners = (props) => {

  return (
    <li className="list-item footer__partner-list-item">
      <a href={props.link} className="footer__partner-link link">
        <img src={props.img} className="footer__partner-img" alt={props.alt} />
       <p className="footer__partner-text"> {props.text}</p>
      </a>
    </li>
  )

}

export default Partners







