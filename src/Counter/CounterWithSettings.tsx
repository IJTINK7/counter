import React, {useState} from "react";
import './CounterWithSettings.css';

export const CounterWithSettings = () => {
	const [disableSetButtonStatus, setDisableSetButtonStatus] = useState(false)
	const resetDisplayHandler = () => {
		setDisableSetButtonStatus(true);
	}
	const setValuesToLocalStorage = () => {
		// LocalStorage

	}
	//const display = initialNumber === 10 ? "RedDisplayValue" : "";
	return (
		<div className={"Container"}>
			<div className={"Display2"}>
				<div>
					max value:
					<input type="number"/>
				</div>
				<div>
					max value:
					<input type="number"/>
				</div>
			</div>
			<div className={"ButtonsContainer"}>
				<button
					className={"SetButton"}
					onClick={setValuesToLocalStorage}
					disabled={disableSetButtonStatus}>set
				</button>
			</div>
		</div>
	);
}