import './ChatLandingPage.css';
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
const ChatLandingPage = () =>{

    const responseMessage = (response) => {
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        const embeddedservice_bootstrap = window.embeddedservice_bootstrap;
        const script = document.createElement("script")
    
        script.src =
          "https://curious-otter-fwjgx7-dev-ed.trailblaze.my.site.com/ESWMIAWDeployment1699930867661/assets/js/bootstrap.min.js"
    
        script.async = true
    
        document.body.appendChild(script);
        script.addEventListener('load', () => {
            const embeddedservice_bootstrap = window.embeddedservice_bootstrap;
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
            embeddedservice_bootstrap.settings.hideChatButtonOnLoad = false;
            window.addEventListener("onEmbeddedMessagingReady", () => {
                embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( { "Email" : userObject.email } );
                // JS API ready for calls…
              })
			embeddedservice_bootstrap.init(
				'00D8b0000030FdC',
				'MIAW_Deployment',
				'https://curious-otter-fwjgx7-dev-ed.trailblaze.my.site.com/ESWMIAWDeployment1699930867661',
				{
					scrt2URL: 'https://curious-otter-fwjgx7-dev-ed.trailblaze.my.salesforce-scrt.com'
				}
			);
        })

    
        
        
    };
    return (
        <div style={{fontFamily: 'Segoe UI'}}>
          <header className='chatHeader'>
            <div>
                <h1>ConnectTech</h1>
                <p>Your Connection to the Future</p>
            </div>
            
            <div>
                <GoogleLogin type='icon' auto_select onSuccess={responseMessage}  />
            </div>
          </header>
          <nav className="chat-nav">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#address-validation">Address Validation</a>
            <a href="#contact-us">Contact Us</a>
          </nav>
          <main style={{ padding: '40px 20px', textAlign: 'center' }}>
            <section id="home">
              <h2>Welcome to ConnectTech</h2>
              <p>Your reliable partner for cutting-edge telecommunication solutions. Stay connected with ConnectTech!</p>
            </section>
    
            <section id="features">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div >
                  <h2>Explore Our Products</h2>
                  <p>Because life is too short for slow internet. Ours is faster than your neighbor's WiFi.</p>
                  <a style={{color:'#4056F4'}} href="/shop">Explore Products</a>
                </div>
    
                <div >
                  <h2>Address Validation Services</h2>
                  <p>We find your location even if your GPS is as lost as your cat during a thunderstorm.</p>
                  <a style={{color:'#4056F4'}} href="/address-validation">Validate Address</a>
                </div>
    
                <div >
                  <h2>Contact Our Support Team</h2>
                  <p>Our support is so good; we once fixed a computer just by staring at it intensely.</p>
                  <a style={{color:'#4056F4'}} href="/contact-us">Contact Support</a>
                </div>
              </div>
            </section>
          </main>
    
          <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
            <p>&copy; 2023 ConnectTech. All rights reserved.</p>
          </footer>
        </div>
      );
}

export default ChatLandingPage;