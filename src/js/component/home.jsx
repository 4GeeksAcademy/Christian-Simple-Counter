import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");

	return (
		<div className="semaforo">
			<div className="tubito-de-arriba"></div>
            <div className="contenedor-de-luces">
            <div onClick={() => setSelectedColor("rojo")} className = {"luz rojo" + (selectedColor === "rojo" ? "r" : "" )}></div>
            <div onClick={() => setSelectedColor("amarillo")} className = {"luz amarillo" + (selectedColor === "amarillo" ? "a" : "" )}></div>
            <div onClick={() => setSelectedColor("verde")} className = {"luz verde" + (selectedColor === "verde" ? "v" : "")}></div>
           </div>
		</div>
	);
};

export default Home;
