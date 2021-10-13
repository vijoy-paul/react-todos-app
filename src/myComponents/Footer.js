import React from 'react'

function Footer() {
   let footerStyle = {
        
            // position : "fixed",
            top : "100vh",
            width : "100%"
    }
    return (
        <footer className="page-footer font-small Green" style ={footerStyle}>
            <div className="footer-copyright text-center bg-dark text-light py-3">© 2020 Copyright:
                <a> Todos-List.com</a>
            </div>
        </footer>
    )
}

export default Footer
