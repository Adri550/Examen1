import App from '../App.css'
import logo from '../logo.jpg';


function Header () {

    return(
        <div>
        <header className= "App-header">
            <img src={logo} className="App-logo" alt= 'logo' />
        </header>
        </div>
    );
    
}
export default Header;



