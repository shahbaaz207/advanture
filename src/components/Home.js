import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_info">
          <h2>Adventure!, Make You Feel "Happy"</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            dolore.
          </p>
        </div>
      </div>
      <div className="home_container">
        <div className="home_box">
          <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F12%2F11%2Ffamily-vacation-hike-mountains-FAMADVENTURE1220.jpg"
            alt=""
            loading="lazy"
          />
          <h4>Destination</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <button>More</button>
        </div>
        <div className="home_box">
          <img
            src="https://lh3.googleusercontent.com/proxy/hmPH9Soye-tAW0u5OJh11p5JNSoerfGeYZgXPdbQnYsyLJgMRo7MSLyifalcenrFrAL-jLdZ1GGGAkrHoi4Fl5VnKQoJBPuveGXu4wMam4htqelD4mUTrwBe6Z8jszyFxZX-ZA"
            alt=""
            loading="lazy"
          />
          <h4>News & Events</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <button>More</button>
        </div>
        <div className="home_box">
          <img
            src="https://media.cntraveler.com/photos/5e260c302245530008bbdf60/master/w_4500,h_3000,c_limit/Sri-Lanka-adventure-GettyImages-570714233.jpg"
            alt=""
            loading="lazy"
          />
          <h4>Support</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <button>More</button>
        </div>
      </div>

      <div className="home_services">
        <h2>Our Services</h2>
        <div className="home_servicesContainer">
          <div className="home_servicesBox">
            <img
              src="https://i.pinimg.com/originals/6b/39/de/6b39debeaa76e79d7cb0bf91f98444c0.jpg"
              alt=""
              loading="lazy"
            />
            <h3>Hotels</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </div>
          <div className="home_servicesBox">
            <img
              src="https://www.iconpacks.net/icons/2/free-restaurant-icon-1814-thumb.png"
              alt=""
              loading="lazy"
            />
            <h3>Restaurants</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </div>
          <div className="home_servicesBox">
            <img
              src="https://static.thenounproject.com/png/61798-200.png"
              alt=""
              loading="lazy"
            />
            <h3>Bus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </div>
          <div className="home_servicesBox">
            <img
              src="https://pics.freeicons.io/uploads/icons/png/11151643681535797978-512.png"
              alt=""
              loading="lazy"
            />
            <h3>Offers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </div>
        </div>
      </div>
   
      <div className="home_adventure">
        <h2>Adventures  Places</h2>
        <div className="home_adventureContainer">
          <div className="home_adventureBox">
            <div className="home_adventureImg">
            <img
            src="https://www.theprevalentindia.com/wp-content/uploads/2020/11/goa.jpg"
            alt=""
            loading="lazy"
          />
          <div className="home_adventureInfo">
            <h2>Goa</h2>
          </div>
            </div>
          </div>
          <div className="home_adventureBox">
            <div className="home_adventureImg">
            <img
            src="https://i.ytimg.com/vi/LttpKeWNx_E/maxresdefault.jpg"
            alt=""
            loading="lazy"
          />
          <div className="home_adventureInfo">
            <h2>Andman & Nicobar</h2>
          </div>
            </div>
          </div>
          <div className="home_adventureBox">
            <div className="home_adventureImg">
            <img
            src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Auroville-Beach.jpg"
            alt=""
            loading="lazy"
          />
          <div className="home_adventureInfo">
            <h2>Podicherry</h2>
          </div>
            </div>
          </div>
                              
                              
        </div>
      </div>
    </>
  );
}

export default Home;
