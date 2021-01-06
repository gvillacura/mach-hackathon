import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import bot1 from "../../media/bot1.png";
import { Link } from "react-router-dom";
import "./bot1.css";

const Bot1 = () => {
  return (
    <div className="container-bot1">
      <Icon icon={closeIcon} />
      <div>
        <h1>¡Comencémos!</h1>
        <p>
          MACHI te enseñará a usar tus Machpoint, una forma más fácil para
          disfrutar de tus beneficios
        </p>
      </div>
      <img src={bot1} alt="img-bot1" />
      <Link to="/bot2">
        <button>Continuar</button>{" "}
      </Link>
      <hr />
    </div>
  );
};

export default Bot1;