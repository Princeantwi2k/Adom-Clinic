import React from "react";
import doc from "../../image/health.jpg";
import "./Health.css";

const Health = () => {
  return (
    <div>
      <h1 className="health">Health & Wellness</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <p className="health-para">
              Our Specialist Nutrition and Dietetic service provides world-class
              comprehensive diet therapy interventions and programmes for
              individuals, groups, corporate organisations and health
              facilities. We are dedicated to providing high quality and
              evidence-based nutrition and dietetic services to promote health,
              diagnose and treat diet-related conditions. Our diet therapy
              interventions and programmes are structured and outcomes-focused
              to ensure the best possible results for clients and patients
            </p>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <img src={doc} alt="doctor" className="doc" />
          </div>
        </div>
      </div>
      <h2 className="health-parah">
        WHY SEE A REGISTERED SPECIALIST DIETITIAN?
      </h2>
      <p className="health-paras">
        Recent increased awareness of the role of diet and nutrition in optimal
        health and disease prevention has led to more people seeking help and
        advice to improve their personal health and wellbeing. Choosing the
        right person to seek credible nutrition advice and support from can be
        daunting. Many people claim to be experts in nutrition yet have very
        limited knowledge and offer no protection to the public. Registered
        specialist dietitians have both the advanced professional knowledge,
        clinical experience and skills to translate evidence-based research into
        practical guidance, to enable you to make positive diet and lifestyle
        choices to help improve your health and wellbeing and support the
        treatment of a range of medical conditions. Here are some examples where
        a registered dietitian can be of help.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <ul>
              <li className="lists">Pre-diabetes and Diabetes</li>
              <li className="lists">High blood Cholesterol</li>
              <li className="lists">Hypertension (high blood pressure)</li>
              <li className="lists">Overweight and Obesity</li>
              <li className="lists">Digestive problems</li>
              <li className="lists">Poor appetite</li>
              <li className="lists">
                Underweight or Unintentional weight loss
              </li>
              <li className="lists">Eating disorders</li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <ul>
              <li className="lists">Enteral Tube feeding</li>
              <li className="lists">Cancer</li>
              <li className="lists">Kidney disease</li>
              <li className="lists">Food intolerance or allergy</li>
              <li className="lists">Pregnancy Nutrition</li>
              <li className="lists">Breastfeeding and weaning</li>
              <li className="lists">Sports Nutrition and General fitness</li>
              <li className="lists">Group education and events</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
