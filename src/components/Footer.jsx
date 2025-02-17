import { pageLinks, socialLinks } from "../data"
const Footer = () => {
  return (
    <footer className="section footer">
        
      <ul className="footer-links">
      {pageLinks.map((link)=>{
        const {id,href,text} = link
        return (
            <li key={id}>
          <a href={href} className="footer-link">{text}</a>
        </li>

        )
      })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((soc)=>{
            const {id,href,icon} = soc
            return (
                <li key={id}>
          <a href={href} target="_blank" className="footer-icon"
            ><i className={icon}></i
          ></a>
        </li>

            )
        })}
      </ul>
      <p className="copyright">
        copyright &copy;kpie753 Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer