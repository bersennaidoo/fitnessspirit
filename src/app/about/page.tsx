import React from "react";

function AboutPage() {
  return (
    <>
    <div id="weights">
      <h1>Weights</h1>
      <img
        src="/images/weights.jpg"
        alt="people working out"
        width={400}
        height={300}
      />

      <p>
        Our facility includes a weight training area with several weight options.
        Build lean muscle with weights and improve your core with weight training.
      </p>

      <ul>
        <li>Dumbbells</li>
        <li>Kettle bells</li>
        <li>Barbells</li>
      </ul>
    </div>

    <div id="cardio">
        <h1>Cardio</h1>
        <img className="equip" src="/images/running.jpg" alt="Running" width={450} height={300} />
        <p>
            Burn fat through cardio workouts. Expert recommend 150 minutes of cardio each 
            week. We have several equipment choices for your workout.
        </p>
        <ul>
            <li>Treadmills</li>
            <li>Elliptical Machines</li>
            <li>Exercise Bikes</li>
        </ul>
    </div>

    <div id="training">
        <h1>Personal Training</h1>
        <img className="equip" src="/images/bench.jpg" alt="Personal Training" width={450} height={300} />
        <p>
            Our certified personal trainers work with you to help you obtain your 
            fitness goals and track your progress Personal training has many benefits.
        </p>

        <ul>
            <li>Accountability</li>
            <li>Personalized Program</li>
            <li>Consistent Support and Motivation</li>
        </ul>
    </div>
    </>
  );
}

export default AboutPage;
