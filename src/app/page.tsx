import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="mobile">
        <p>
          Welcome to Fitness Spirit Club. Our mission is to help our clients
          meet their fitness and nutrition goals.
        </p>
        <h3>FREE One-week Trial Membership!</h3>
        <p>Call Us Today to Get Started</p>
        <p className="tel-link">
          <a href="tel:3334815888">(333)4815888</a>
        </p>
        <h4>Fitness Spirit Club Hours</h4>
        <ul className="hours">
          <li>Mon-Thu: 6:00am-6:00pm</li>
          <li>Friday: 6:00am-4:00pm</li>
          <li>Saturday: 8:00am-6:00pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div id="hero" className="tablet-desktop">
        <img src="/images/relax.jpg" alt="left arm extended" />
      </div>
      <div className="tablet-desktop">
        <p>
          If you have struggled with getting healthy and need the motivation and
          resources to make a healthy lifestyle change, contact us today. Our
          facility includes state-of-the-art equipment, convenient group
          training classes, and nutrition tips and information to keep you
          healthy.
        </p>

        <p>
          We provide a FREE one-week membership so you can experience the
          benefits of our equipment and facility. This one-week trial gives you
          complete access to our equipment, training classes, and nutrition
          planning. Contact us today to&nbsp;
          <span className="action">start your free trial!</span>
        </p>
      </div>
    </>
  );
}
