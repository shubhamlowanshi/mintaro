import React from 'react';
import newcase from '../assets/newcase.jpg';
import Aboutus from '../assets/aboutus.jpg'
import wineryshop from '../assets/winareyshop.jpg';
import logobottle from '../assets/logobottle.jpg';

import './AboutUs.css';

const AboutUs = () => {

  const brandName = "MINTARO";
  const establishedYear = 1984;
  const ownerProducer = "Peter Liguori-worth";
  const historyNote = "Located in the historic town of Mintaro, the vineyards were originally planted in 1962 and consistently produce award winning wines.";

  return (
    <>
      <div className="about-us-container">

        <div
          className="banner"
          style={{

            backgroundImage: `url(${Aboutus})`,
          }}
        >

          <div className="banner-overlay"></div>


          <h1 className="banner-heading">
            ABOUT US
          </h1>
        </div>


        <div className="content-section">


          <div className="image-column">
            <img
              src={newcase}
              alt="Woman tasting wine at Mintaro"
              className="main-image"
            />
          </div>


          <div className="text-column">

            <h2 className="mintaro-heading">
              ABOUT {brandName.toUpperCase()}
            </h2>


            <p className="body-text">
              <span className="highlight-text">{brandName.charAt(0).toUpperCase() + brandName.slice(1)}</span> wines was established in **{establishedYear}** by the current owner, wine producer, <span className="highlight-text">{ownerProducer}</span>.
            </p>

            <p className="body-text">
              {historyNote}
            </p>

            <p className="body-text">
              We also have three reserve labels. Series one is Belles Femmes Shiraz. Series two is Leckie-Window Cabernet Sauvignon. The final series is the Flying Doctor, a Shiraz. These three series come in a beautifully presented box set of 6 bottles each with its own individual label. These make an ideal gift for those people who are a little hard to buy for.
            </p>
            <p className="body-text">
              Series one Reserve Shiraz is called 'Belles Femmes' and features six grand 19th century paintings of beautiful women.
            </p>
            <p className="body-text">
              Series two Reserve Cabernet Sauvignon is called the 'Leckie Window' and features six stunning Greek Mythological stained glass and leadlight images from a window designed and created by a prominent Australian artist in 1935.
            </p>
            <p className="body-text">
              The Flying Doctor series can be purchased with the book "Just What the Doctor Ordered" A guide to the Australian idiom by renowned Broken Hill artist, Howard William Steer and Peter J Nicholson. You couldn't find a better Aussie gift.
            </p>

          </div>
        </div>
      </div>

      <div className="wine-bottles-section-container">
        <div className="wine-bottles-wrapper">
          <img
            src={newcase}
            alt="Mintaro wine bottles in a wooden box"
            className="wine-bottles-image"
          />
          <div>
            <br />

            <div>
              <h1>History of Mintaro</h1>
            </div>
            <div>
              <p style={{ height: '78px', width: '1050px', marginTop: '15px' }}>
                Mintaroâ€™s historic character was shaped by two important mining industries in nineteenth century South Australia. In the 1840s and 1850s it became an early staging point for transporting copper from the Burra mines to Port Wakefield, and from the 1860s onwards, it was South Australiaâ€™s leading producer of high quality slate.</p>
            </div>

            <h2>Mintaro State Heritage Area</h2>
            <div className='parents'>
              <div className='right'>
                <div style={{ height: '78px', width: '500px', marginTop: '15px' }}>
                  Mintaro is a remarkably well-preserved and rare example of an early colonial rural town and is a strong physical reminder of the importance of copper and slate on its sitting, layout and built form. Its cultural significance is enhanced by its picturesque setting in a valley of wheat fields and vineyards surrounded by a broadband of hills.
                </div>
                <div style={{ height: '78px', width: '500px', marginTop: '15px' }}>
                  The township of Mintaro not only forms an enclave for its close community but relishes in being a South Australian State Heritage Area (1984) that actively promotes its heritage and wine tourism of Mintaro and the surrounding vineyards and wineries of Polish Hill.
                </div>
              </div>
              <div className='left'>
                <div style={{ height: '78px', width: '500px', marginTop: '15px' }}>
                  <p>Examples of this can be seen at the iconic Martindale Hall, a Georgian style mansion built in 1879, now a â€˜living museumâ€™ famous for its use as the "girls school" in the Peter Weir film â€“ â€˜Picnic at Hanging Rockâ€™. John Smithâ€™s House is another expression of binding heritage and tourism. This gorgeous timber shingle roof and slate house erected in the 1860's serves as fully furnished heritage accommodation for stays of from night and beyond, and reflects the charm and allure of the true country cottage.</p>
                </div>
                <div>
                  <button style={{ marginTop: '90px', backgroundColor: '#AA3248', borderRadius: '40px', height: '43px', width: '200px', borderStyle: 'none' }}>Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '30px' }}>
        <div>
          <img src={logobottle} alt="" style={{ height: '559px', width: '570px' }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth <= 768 ? "column" : "column",
            alignItems: window.innerWidth <= 768 ? "center" : "flex-start",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "28px",
              color: "#AA3248",
              marginBottom: "10px",
            }}
          >
            Business Profile
          </h1>

          <div
            style={{
              width: window.innerWidth <= 768 ? "90%" : "432px",
              fontFamily: "poppins",
              fontSize: window.innerWidth <= 768 ? "14px" : "16px",
              marginTop: "20px",
              lineHeight: "1.6",
            }}
          >
            Mintaro Wines is a family owned and operated boutique winery situated in the
            historic town of Mintaro in the beautiful Clare Valley district of South
            Australia. The vineyards were originally planted in 1962 and subsequently
            incorporated into a functioning winery complex in 1985 by the present owner,
            winemaker and producer, Peter Houldsworth.
          </div>

          <div
            style={{
              width: window.innerWidth <= 768 ? "90%" : "432px",
              fontFamily: "poppins",
              fontSize: window.innerWidth <= 768 ? "14px" : "16px",
              marginTop: "20px",
              lineHeight: "1.6",
            }}
          >
            Over the years Mintaro Wines have won some 150 wine show awards around
            Australia. Awards include the category winner for dry white (Riesling) at
            the 1989 Sydney International Wine Show, a Gold Medal at the 1995 Royal
            Adelaide Wine Show for a Late Picked Riesling and a Gold Medal for Shiraz at
            the National Wine Show in Canberra 1n 1996. More recent awards include a
            Gold Medal and Trophy for Cabernet Sauvignon at the Brisbane Wine Festival
            in 2001, a Gold Medal for Cabernet Sauvignon at the Australian Small Wine
            Makers Show in 2005 and a Gold Medal for Riesling at the Clare Valley Wine
            Show in 2005.
          </div>
        </div>

      </div>


    </>
  );
}

export default AboutUs;