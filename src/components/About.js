import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={8} />+
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={50} />+
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a HR `}</span>
                <h3>Teamwork makes the dream work</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                <b style={{color:'#f75023'}}>  An HR Specialist, Influencer, and Content Creator </b> <br/> I'm passionate about connecting talented individuals with the perfect opportunities. With years of experience in the HR field, I've honed my skills to understand what employers are looking for and how to best position candidates for success.
                  Through my content creation journey, I've had the privilege of sharing valuable insights, tips, and resources to empower job seekers like you.  <b  style={{color:'#f75023'}}>let's make it happen!</b>
                </p>
              </div>
            
  {/* <h5 style={{  }}>Follow More</h5> */}
  <div style={{marginTop:'0',marginLeft:'20px',marginBottom:'30px' ,textDecoration:'none'}}>
    <a className=" wow fadeInUp" data-wow-duration="1s" href="https://twitter.com/Tanvi_srisri " target="blank" style={{textDecoration:'none'}}><img src="img/icons8-twitter-50.png" style={{ height: '30px',marginRight:'20px'}} /></a>
    <a className=" wow fadeInUp" data-wow-duration="1.8s" href="https://www.instagram.com/tanvi_khandelwal__?igsh=MWJsa3Y4aG5lbmFlNg==" target="blank" style={{textDecoration:'none'}}><img src="img/icons8-insta-50.png" style={{ height: '30px',marginRight:'20px' }} /></a>
    <a className=" wow fadeInUp"data-wow-duration="2s" href="https://www.linkedin.com/in/tanvi-khandelwal-57a426182/" target="blank" style={{textDecoration:'none'}}><img src="img/In-Blue.png" style={{ height: '30px',marginRight:'0' }} /></a>
  </div>
 
              <div>
                <div
                  className="dizme_tm_button wow fadeInUp"
                  data-wow-duration="1s">
                  <a className="anchor" href="https://topmate.io/tanvi_khandelwal1" target="blank">
                    <span>Join With Me</span>
                  </a>
                </div>
      

              </div>
           </div>
          </div>
        </div>
        {/* <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div> */}
        {/* <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div> */}
      </div>
    </div>
  );
};
export default About;
