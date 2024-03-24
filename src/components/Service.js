import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits"; 

const Service = ({ dark }) => {
  const [data, setData] = useState([]);
  const [ setPopupdata] = useState({});
  const [ setPopup] = useState(false);
  useEffect(async () => {
    setData(await fatchData("/static/service.json"));
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);
  function openLinkInNewWindow(url) {
    window.open(url, '_blank');
  }
  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
  
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span className="wow fadeInUp " data-wow-duration="1s">Services</span>
            <h3 className="wow fadeInUp " data-wow-duration="1.3s">What I Do for Clients</h3>
           
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                      
                      >
                        <div className="list_inner tilt-effect" onClick={(e) => {
                          e.preventDefault(); // Prevents the default behavior (following the link)
                          openLinkInNewWindow(data.link);
                        }}>
                          <span className="icon">
                            {parse(data.icon.svg)}
                           
                          </span>
                          <div className="title wow fadeInUp"data-wow-duration="1s">
                            <h3  className=" wow fadeInUp"data-wow-duration="1s">{data.title}</h3>
                            
                          </div>
                          <div className="text">
                            <p className=" wow fadeInUp"data-wow-duration="2s">{data.shortDec}</p>
                          </div>
                          
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        {/* <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div> */}
      </div>
    </div>
  );
};
export default Service;
