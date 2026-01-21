import "./Footer.css"
export default function Footer()
{
    return(
      
      <footer>
        
        <div className="f-apart">&copy; 2026 Kairali. All right reserved</div>
          <div className="f-nest">
            <a href="https://facebook.com">
            <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
  
      </footer>
    );
}