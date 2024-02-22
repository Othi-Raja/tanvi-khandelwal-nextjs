const CopyRight = ({ brandName }) => {
  return (
   
    <div className="dizme_tm_section" id="contact" style={{backgroundColor:'black'}}>
      <div className="dizme_tm_copyrightfooter dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                <img src="img/logo.webp" style={{height:'40px'}}/>
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="https://www.softrateglobal.com/index.html" target="blank">{`Powered By Softrate`}</a>
                </li>
                <li>
                  <a href="https://www.softrateglobal.com/index.html"target="blank">@Copyright Reserved to Softrate Technologies 2024.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
