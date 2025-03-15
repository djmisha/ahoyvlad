import "./App.css";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  // Add useEffect to handle mobile navigation click events
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Close the mobile menu when a link is clicked
        document.querySelector("nav ul").classList.remove("active");
        document.querySelector(".mobile-nav-toggle").classList.remove("active");
        document
          .querySelector(".mobile-nav-overlay")
          .classList.remove("active");
      });
    });

    // Clean up event listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <header>
        <button
          className="mobile-nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => {
            document.querySelector("nav ul").classList.toggle("active");
            document
              .querySelector(".mobile-nav-toggle")
              .classList.toggle("active");
            document
              .querySelector(".mobile-nav-overlay")
              .classList.toggle("active");
          }}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          className="mobile-nav-overlay"
          onClick={() => {
            document.querySelector("nav ul").classList.remove("active");
            document
              .querySelector(".mobile-nav-toggle")
              .classList.remove("active");
            document
              .querySelector(".mobile-nav-overlay")
              .classList.remove("active");
          }}
        ></div>
        <nav>
          {/* <div className="logo">⛵ Ahoy Vlad</div> */}
          <ul>
            <li>
              <a href="#home">Dock</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#charters">Charters</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#captain-for-hire">Captain-For-Hire</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="cta">
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="tel:+18589227535">
                <strong>(858) 922-7535</strong>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>Expert Sailing & Captain Services</h1>
        <p>Charters • Training • Captain-for-Hire</p>
        <span>San Diego, California and beyond</span>
        <a href="#contact" className="btn">
          🧭 Book Your Voyage
        </a>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-image">
              <img
                src="images/service-1.jpg"
                alt="Charter & Adventure Sailing in San Diego Bay"
              />
            </div>
            <div className="service-content">
              <h3>Charter & Adventure Sailing</h3>
              <p>
                Set sail on a personalized voyage around San Diego Bay with a
                seasoned captain.
              </p>
              <a href="#contact" className="service-btn">
                ⛵ Learn More
              </a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img
                src="images/service-2.jpg"
                alt="Sailing Education & Training"
              />
            </div>
            <div className="service-content">
              <h3>Sailing Education & Training</h3>
              <p>Hands-on training for all experience levels.</p>
              <a href="#contact" className="service-btn">
                🎓 Learn More
              </a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="images/service-3.jpg" alt="Captain-for-Hire" />
            </div>
            <div className="service-content">
              <h3>Captain-for-Hire</h3>
              <p>Professional vessel deliveries and operational management.</p>
              <a href="#contact" className="service-btn">
                👨‍✈️ Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service-details">
        <h2>Our Sailing Expertise</h2>

        <div className="service-detail">
          <div className="service-detail-text">
            <h3 id="charters">Charter & Adventure Sailing</h3>
            <p>
              Experience the ultimate freedom of exploring San Diego's coastal
              waters and the beautiful Pacific Ocean with Captain Vlad's
              personalized charter services. Whether you're planning a sunset
              cruise in the harbor, a weekend getaway to Catalina Island, or a
              week-long adventure along the Southern California coast, we
              customize each voyage to match your vision.
            </p>

            <ul className="service-features">
              <li>Day sails and multi-day charters available</li>
              <li>Custom itineraries tailored to your interests</li>
              <li>All-inclusive packages with catering options</li>
              <li>Special occasions and celebrations accommodated</li>
              <li>Safety-first approach with professional equipment</li>
            </ul>

            <a href="#contact" className="detail-btn">
              📅 Schedule Your Charter
            </a>
          </div>
          <div className="service-detail-image">
            <img
              src="images/expertise-1.jpg"
              alt="Charter sailing experience"
            />
          </div>
        </div>

        <div className="service-detail image-first">
          <div className="service-detail-image">
            <img
              src="images/expertise-2.jpg"
              alt="Sailing education and training"
            />
          </div>
          <div className="service-detail-text">
            <h3 id="education">Sailing Education & Training</h3>
            <p>
              From beginners setting sail for the first time to experienced
              sailors honing advanced techniques, Captain Vlad offers
              comprehensive educational programs designed to build confidence
              and competence on the water.
            </p>

            <ul className="service-features">
              <li>One-on-one instruction for personalized learning</li>
              <li>
                Small group classNamees for collaborative skill development
              </li>
              <li>Navigation and chart reading fundamentals</li>
              <li>Weather interpretation and passage planning</li>
              <li>Certification preparation and assessments</li>
            </ul>

            <a href="#contact" className="detail-btn">
              📚 Enroll in Training
            </a>
          </div>
        </div>

        <div className="service-detail">
          <div className="service-detail-text">
            <h3 id="captain-for-hire">Captain-for-Hire Services</h3>
            <p>
              Need an experienced hand to deliver your vessel or manage
              operations for a specific journey? Captain Vlad offers
              professional captain services that ensure your boat is handled
              with expertise and care, whether for a delivery, special event, or
              regular maintenance sailing.
            </p>

            <ul className="service-features">
              <li>Vessel delivery across coastal and offshore routes</li>
              <li>Professional handling of your yacht or sailboat</li>
              <li>Thorough pre-journey inspections and preparations</li>
              <li>Regular maintenance sailing and systems checks</li>
              <li>Detailed documentation and reporting</li>
            </ul>

            <a href="#contact" className="detail-btn">
              👨‍✈️ Hire Captain Vlad
            </a>
          </div>
          <div className="service-detail-image">
            <img
              src="images/expertise-3.jpg"
              alt="Professional captain services"
            />
          </div>
        </div>
      </section>

      <section id="about">
        <h2>Meet Captain Vlad</h2>

        <div className="bio-container">
          <div className="bio-content">
            <h3>A Lifetime Love of the Sea</h3>
            <p>
              Captain Vlads journey began when he first set sail as a young
              enthusiast in the San Diego bay. What started as a hobby quickly
              evolved into a lifelong passion and professional salling.
            </p>
            <h4>Passionate Educator</h4>
            <p>
              With certification as a sailing instructor from the American
              Sailing Association and a Merchant Mariner Credential, Captain
              Vlad has dedicated his career to sharing his knowledge with
              others. "The most rewarding part of sailing," he often says, "is
              seeing the transformation in students as they gain confidence on
              the water."
            </p>
            <h4>Safety First Approach</h4>
            <p>
              Having navigated through all kinds of conditions on the Pacific
              Ocean, Captain Vlad brings unparalleled experience in maritime
              safety protocols. Every expedition is meticulously planned with
              comprehensive safety briefings and equipment checks, ensuring
              peace of mind for all aboard.
            </p>
            <h4>Creating Memorable Experiences</h4>
            <p>
              Beyond technical expertise, Captain Vlad is known for creating an
              atmosphere of joy and discovery. "Sailing should be technically
              sound but also fundamentally enjoyable," is his guiding
              philosophy. From sunset cruises to multi-day adventures, his
              priority is ensuring everyone leaves with unforgettable memories.
            </p>

            <div className="credentials">
              <span className="credential">
                <span>✅</span>
                Merchant Mariner Credential (MMC)
              </span>
              <span className="credential">
                <span>✅</span>Master of Vessels
              </span>
              <span className="credential">
                <span>✅</span>25 Gross Tons or less
              </span>
              <span className="credential">
                <span>✅</span>Sailing Endorsement
              </span>{" "}
              <span className="credential">
                <span>✅</span>Licensed Captain
              </span>
              <span className="credential">
                <span>✅</span>Certified Instructor
              </span>
              <span className="credential">
                <span>✅</span>American Sailing Association
              </span>
            </div>

            <a href="#contact" className="bio-btn">
              🌊 Sail With Vlad
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact & Booking</h2>
        <p>Ready to set sail in San Diego? Get in touch today.</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Fill out the form to inquire about our sailing services, or
              contact us directly using the information below.
            </p>

            <p className="accommodations-info">
              We can accommodate any request, including reserving the right size
              boat for your party, customizing lessons to your skill level, and
              providing captain-for-hire services tailored to your needs. No
              sailing journey is too big or too small!
            </p>

            <p className="call-to-action">
              <strong>
                Reach out today and let's plan your perfect sailing experience!
              </strong>
            </p>

            <div className="contact-details">
              <div className="contact-item"></div>
              <div className="contact-item">
                <span className="contact-icon">📞 </span>
                <span>
                  Call or Text
                  <a href="tel:+18589227535">(858) 922-7535</a>
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <p>
          👨‍✈️ Ahoy Vlad - Professional Sailing Services - San Diego, California.
          All rights reserved.
        </p>
        <a href="#home" className="footer-logo">
          ⛵ Sail to Dock ⬆
        </a>
      </footer>
    </>
  );
}

export default App;
