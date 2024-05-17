import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div id="hero">
        <img src="/images/relax.jpg" alt="left arm extended" />
      </div>
      <div id="intro">
        <p>
          Welcome to Fitness Spirit Club. Our mission is to help our clients
          meet their fitness and nutrition goals.
        </p>

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
