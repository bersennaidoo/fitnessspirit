import React from "react";

function AboutPage() {
  return (
    <main>
      <div id="weights">
        <h1>Weights</h1>
        <img
          src="/images/femaleweight.jpg"
          alt="people working out"
          className="round"
        />

        <p>
          Our facility includes a weight training area with several weight
          options. Build lean muscle with weights and improve your core with
          weight training.
        </p>

        <ul className="tablet-desktop">
          <li>Dumbbells</li>
          <li>Kettle bells</li>
          <li>Barbells</li>
        </ul>
      </div>

      <div id="cardio">
        <h1>Cardio</h1>
        <img
          className="round"
          src="/images/running.jpg"
          alt="Running"
        />
        <p>
          Burn fat through cardio workouts. Expert recommend 150 minutes of
          cardio each week. We have several equipment choices for your workout.
        </p>
        <ul className="tablet-desktop">
          <li>Treadmills</li>
          <li>Elliptical Machines</li>
          <li>Exercise Bikes</li>
        </ul>
      </div>

      <div id="training">
        <h1>Personal Training</h1>
        <img
          className="round"
          src="/images/bench.jpg"
          alt="Personal Training"
        />
        <p>
          Our certified personal trainers work with you to help you obtain your
          fitness goals and track your progress Personal training has many
          benefits.
        </p>

        <ul className="tablet-desktop">
          <li>Accountability</li>
          <li>Personalized Program</li>
          <li>Consistent Support and Motivation</li>
        </ul>
      </div>

      <div id="exercises" className="tablet-desktop">
        <h1>Common Exercises</h1>
        <p>
          The following are common exercises that we encourage our clients to do
          as part of their daily exercise routine.
        </p>

        <dl>
          <dt>Burpee</dt>
          <dd>
            Burpees are a great, full body exercise to increase your strength
            and endurance. Begin in a standing position, drop into a squat and
            extend your hands forward, kick your feet back and then forward
            again quickly, and then jump up from a squatted position.
          </dd>
          <dt>Plank</dt>
          <dd>
            Planks build your core strength. To perform a plank, get in a
            push-up position and rest your forearms on the floor. Hold the
            position as long as you can.{" "}
          </dd>

          <dt>Mountain Climber</dt>
          <dd>
            Mountain climbers are a good cardio exercise. Place your hands on
            the floor in a push-up position, bring one knee up to your chest,
            and then switch as quickly as you can (as though you are climbing a
            mountain).
          </dd>
        </dl>
        <p>
          For more information about how to stay active, visit the&nbsp;
          <a href="https://www.health.gov.za/contact-us/" target="_blank" className="external-link">
           S.A Department of Health Services
          </a>
          .
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
