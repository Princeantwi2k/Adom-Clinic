import React from "react";
import pic9 from "../../image/nurse 7.jpeg";
import "./Vacci.css";
const Vacci = () => {
  return (
    <div>
      <h1 className="vacci">Adom Vaccination</h1>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6">
          <p className="page1">
            Vaccinations for the following diseases are available at Adom
            Clinic:
          </p>
          <ul className="page1">
            <li className="list">Chicken Pox (Varilrix)</li>
            <li className="list">Diptheria, Tetanus & Pertussis (DTaP)</li>
            <li className="list">Hepatitis A</li>
            <li className="list">Hepatitis B</li>
            <li className="list">Human Papilloma Virus (HPV)</li>
            <li className="list">Meningitis (Mencevax)</li>
            <li className="list">MMR (Measles Mumps & Rubella)</li>
            <li className="list">
              Pneumococal Conjugate Vaccine (PCV13 and PPV23)
            </li>
            <li className="list">Polio (Oral Polio Vaccine)</li>
            <li className="list">PPD (for Tuberculin Skin Testing/Mantoux)</li>
            <li className="list">Rabies (ARV)</li>
            <li className="list">Rotavirus (Rotarix)</li>
            <li className="list">Tetanus Diptheria (Td)</li>
            <li className="list">Tetanus Toxoid</li>
            <li className="list">Typhoid</li>
            <li>
              Pentavalent Vaccine (Haemophilus influenzae type B, whooping
              cough, tetanus, hepatitis B and diphtheria)
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 nurse thumbnail">
          <img src={pic9} alt="nurse" />
        </div>
      </div>
    </div>
  );
};

export default Vacci;
