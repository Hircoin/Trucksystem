import React from 'react'




import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import './home.css'

import { Link } from 'react-router-dom';

const CompanyHome = (props) => {
  return (
    <div className="home-container">
      
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
            <Link to="#solutions" className="Link">Solutions</Link>
            <Link to="#how-it-works" className="Link">How it works</Link>
            <Link to="/prices" className="Link">Prices</Link>

            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src="/pastedimage-no9b-1500h.png"
                  className="home-logo1"
                />
                <div className="home-links1">
                <Link to="#solutions" className="Link">Solutions</Link>
                <Link to="#how-it-works" className="Link">How it works</Link>
                <Link to="/prices" className="Link">Prices</Link>
                </div>
              </div>
              <div className="home-right">
                <Link to="/login" className="Link">
                <span className="home-sign-in Link">Sign in</span>
                </Link>
                <div className="home-get-started">
                <Link to="/login" className="Link">
                  <span className="home-text006">Get started</span>
                </Link>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
              
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text007">Take Control of Your Investments</h1>
          <p className="home-text008">
          Leverage our AI-driven insights to make informed trading decisions.
          </p>
          <div className="home-get-started1">
          
            <span className="home-text009" >Get started</span>
          
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/pastedimage-cdo-1000h.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text010">
            <span>
            Let's elevate your investment strategies
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            {/* <span>with AI-driven predictions.</span> */}
            <br></br>
            <span>presence</span>
          </span>
          <span className="home-text014">
            <span>
            Achieve better results with our cutting-edge analytics and tools.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Optimize your portfolio today.</span>
          </span>
        </div>
        <div className="home-cards">
          <div className="home-container03">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text017">Predict</span>
              <span className="home-text018">
              Utilize advanced algorithms for accurate predictions.
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon03"
              />
              <span className="home-text019">Optimize</span>
              <span className="home-text020">
              Tailor your strategies for maximum profitability.
              </span>
            </div>
          </div>
          <div className="home-container04">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon04"
              />
              <span className="home-text021">Analyze</span>
              <span className="home-text022">
              Deep dive into market trends and stock performances.
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className="home-icon05"
              />
              <span className="home-text023">Educate</span>
              <span className="home-text024">
              Learn essential trading strategies and risk management.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
          “Harness the power of AI to enhance your investment strategies and make informed decisions that drive success.”
          </span>
          <div className="home-author">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-avatar"
            />
            <span className="home-quote1">
              <span className="home-text025">—  Sarah Thompson</span>
              <span>, Head of Analytics, InvestSmart</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container05">
          <ActiveUsers caption="— Active users" statistic="3.5M"></ActiveUsers>
          <ActiveUsers caption="— Brands" statistic="50k"></ActiveUsers>
          <ActiveUsers
            caption="— Accounts Managed"
            statistic="250K"
          ></ActiveUsers>
          <ActiveUsers caption="— Active leads" statistic="30M"></ActiveUsers>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container06">
            <div className="home-left1">
              <span className="sub-title">Portfolio Management</span>
              <span className="home-text028 title">
              Optimize your investments all in one platform.
              </span>
              <span className="home-text029">
              AI-driven insights to make informed decisions and maximize your returns.
              </span>
              <div className="home-get-started2 template-button">
              <Link to="/login" >
                <span className="home-text030">Get started</span>
              </Link >
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <span className="sub-title">
              Data Insights
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="home-text032 title">
              Comprehensive analytics made simple.
              </h2>
              <div className="home-category">
                <span className="home-text033">Predictive Models</span>
                <span className="home-text034">
                Utilize cutting-edge AI to forecast market trends and stock movements.
                </span>
                <span className="home-text035">Learn more -&gt;</span>
              </div>
              <div className="home-category1">
                <span className="home-text036">Performance Tracking</span>
                <span className="home-text037">
                Monitor your investments and adjust strategies based on real-time data.
                </span>
                <span className="home-text038">Learn more -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container07">
            <div className="home-left2">
              <span className="home-text039">Enhance Your Strategy</span>
              <h2 className="home-text040 title">
              Intelligent scheduling that maximizes your time
              </h2>
              <span className="home-text041">
              Use our powerful tools to plan your trades and optimize your portfolio.
              </span>
              <div className="home-get-started3 template-button">
              <Link to="/login" >
                <span className="home-text042">Get started</span>
              </Link >
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
            Seamlessly integrated with the platforms you rely on
            </span>
            <span className="home-text045">
            Connect effortlessly with popular financial tools and services to enhance your trading experience.
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container08">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
              </div>
              <div className="home-container09">
                <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text046">How it works</span>
            <span className="home-text047 title">
            Predicting stock trends has never been easier
            </span>
          </div>
          <div className="home-category2">
            <div className="home-headng">
              <span className="home-text048">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text049">
              Create your account to start get pridiction on stock our AI-powered stock prediction tools.
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text050">Get started</span>
              </div>
            </div>
            <div className="home-container10">
              <img
                alt="pastedImage"
                src="/pastedimage-k5xi%201-1200w.png"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category3">
              <div className="home-headng1">
                <span className="home-text051">2 — Analyze</span>
                <span className="home-text052">
                Utilize our advanced algorithms to analyze market trends and make informed decisions.
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-ibg-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category4">
              <div className="home-headng2">
                <span className="home-text053">3 — Act</span>
                <span className="home-text054">
                Execute your trades with confidence based on predictive insights and analytics.
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text055 title">
            Pricing for All Types of Investors.
            </span>
            <span className="home-text056">
            Choose from flexible pricing plans designed for both new and experienced investors.
            </span>
            <div className="home-selection">
              <span className="home-text057">Monthly</span>
              <span className="home-text058">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text059">Free</span>
              <span className="home-text060">
              Access basic features to start your stock prediction journey.
              </span>
              <div className="home-get-started5 template-button">
                <span className="home-text061">Start for free</span>
              </div>
              <span className="home-text062">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text063">
                  Basic stock analysis tools
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text064">
                    Community support
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text065">Pro Plan</span>
              <span className="home-text066">
                <span>Unlock advanced features for $9/mo
                Get in-depth analysis and predictions.</span>
                <br></br>
                <span>Access advanced features to start your stock AI journey.</span>
              </span>
              <div className="home-get-started6 template-button">
                <span className="home-text070">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text073">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text074">
                  Comprehensive market insights
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text075">
                  Priority customer support
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text076">
                  AI-driven stock predictions
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text077">
                  Advance stock analysis tools
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text078">Enterprise</span>
              <span className="home-text079">
                <span>
                Custom solutions tailored for your business.
                </span>
                <br></br>
              </span>
              <div className="home-get-started7 template-button">
                <span className="home-text082">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text085">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text086">
                  Tailored market insights
                  </span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text087">
                  Dedicated account manager
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text088">
                  Advanced reporting features
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text089">
                  Priority support and consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left3">
          <span className="home-text090">Testimonals</span>
          <span className="home-text091 title">
          What Our Users Say About Active
          </span>
        </div>
        <div className="home-right2">
          <div className="home-column">
            <Testimonal
              from="Vista Social"
              name="Andy Smith"
              quote='"Active has revolutionized the way I invest. The insights are invaluable!”'
              avatarSrc="/image552912-e3yq-200h.png"
            ></Testimonal>
            <Testimonal
              from="Social Club"
              name="Jessica Smith"
              quote="“Thanks to Active's AI predictions, I've discovered stocks I never considered before.”"
              avatarSrc="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              from="BeMe"
              name="Logan Boy"
              quote="“The accuracy of Active's predictions has greatly improved my investment strategy.”"
              avatarSrc="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              from="Hello W."
              name="Laraine Summers"
              quote="“I've seen a remarkable boost in my portfolio performance since using Active.”"
              avatarSrc="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              from="Handsly"
              name="William McPau"
              quote='"Active’s data-driven insights have made trading so much easier and more effective!"'
              avatarSrc="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              from="Share"
              name="Mariah Mae"
              quote="“The platform's user-friendly design combined with powerful analytics is a winning combination.”"
              avatarSrc="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              from="Gather"
              name="John Finati"
              quote='"I love how Active simplifies complex data into actionable insights!"'
              avatarSrc="/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              from="Zigo"
              name="Mary Pau"
              quote='"Active has given me the confidence to navigate the stock market like a pro!"'
              avatarSrc="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text092">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text095 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className="home-text099">
              Unlock your potential and grow your business with our innovative solutions.
            </span>
            <div className="home-get-started8 template-button">
              <span className="home-text100">
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      
      <footer className="home-footer">
        <div className="home-top">
          
          <div className="home-right3">
            <div className="home-category5">
              <span className="home-text119">Solutions</span>
              <div className="home-links2">
                <span className="home-text120">AI Stock Predictions</span>
                <span className="home-text121">Market Analysis Tools</span>
                <span className="home-text122">Data Visualization</span>
                <span className="home-text123">Investment Insights</span>
                <span className="home-text124">Portfolio Management</span>
              </div>
            </div>
            <div className="home-category6">
              <span className="home-text125">About Us</span>
              <div className="home-links3">
                <span className="home-text126">The Team</span>
                <span className="home-text127">Our Mission</span>
                <span className="home-text128">Latest News</span>
                <span className="home-text129">Partners</span>
                <span className="home-text130">Careers</span>
                <span className="home-text131">Media Inquiries</span>
              </div>
            </div>
            <div className="home-category7">
              <span className="home-text132">Follow Us</span>
              <div className="home-links4">
                <span className="home-text133">Twitter</span>
                <span className="home-text134">Linkedin</span>
                <span className="home-text135">Crunchbase</span>
                <span className="home-text136">Instagram</span>
                <span className="home-text137">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          {/* <img
            alt="pastedImage"
            src="/pastedimage-no9b-1500h.png"
            className="home-branding"
          /> */}
          <span className="home-text138">Copyright © Stockkimia Kuberyantr - 2024</span>
        </div>
      </footer>
    </div>
  )
}

export default CompanyHome
