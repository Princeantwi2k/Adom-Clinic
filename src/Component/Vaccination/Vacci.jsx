import React from "react";
import pic9 from "../../image/nurse 7.jpeg";
import "./Vacci.css";
const Vacci = () => {
  return (
    <div>
      <h1 className="vacci">Adom Vaccination</h1>
      <div className="row">
        <div className="col-xm-12 col-sm-12 col-md-6">
          <p className="page1">
            Vaccinations for the following diseases are available at Adom
            Clinic:
          </p>
          <ul className="page1">
            <li>Chicken Pox (Varilrix)</li>
            <li>Diptheria, Tetanus & Pertussis (DTaP)</li>
            <li>Hepatitis A</li>
            <li>Hepatitis B</li>
            <li>Human Papilloma Virus (HPV)</li>
            <li>Meningitis (Mencevax)</li>
            <li>MMR (Measles Mumps & Rubella)</li>
            <li>Pneumococal Conjugate Vaccine (PCV13 and PPV23)</li>
            <li>Polio (Oral Polio Vaccine)</li>
            <li>PPD (for Tuberculin Skin Testing/Mantoux)</li>
            <li>Rabies (ARV)</li>
            <li>Rotavirus (Rotarix)</li>
            <li>Tetanus Diptheria (Td)</li>
            <li>Tetanus Toxoid</li>
            <li>Typhoid</li>
            <li>
              Pentavalent Vaccine (Haemophilus influenzae type B, whooping
              cough, tetanus, hepatitis B and diphtheria)
            </li>
          </ul>
        </div>
        <div className="col-xm-12 col-sm-12 col-md-6 nurse thumbnail">
          <img src={pic9} alt="nurse" />
        </div>
      </div>
    </div>
  );
};

export default Vacci;
