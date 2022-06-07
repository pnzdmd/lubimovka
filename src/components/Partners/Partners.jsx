import './Partners.css'

const Partners = (props) => {

  return (
    <li className="list-item">
      <a href={props.link} className="footer__partner-link">
        <img src={props.img} className="footer__partner-img" alt={props.alt} />
      </a>
    </li>
  )

}

export default Partners







