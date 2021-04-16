import React from "react";
import { useEffect } from "react";
import { iconMoon, iconSun } from "../visuals/desktop";
import "./Toggle.scss";
import { useJobsContext } from "../JobsContext";

const Toggle = () => {
	const { defaultTheme, setDefaultTheme } = useJobsContext();

	const htmlTag = document.body.parentElement;

	useEffect(() => {
		if (!localStorage.getItem("themes")) {
			setDefaultTheme(true);
			localStorage.setItem("themes", "defaultTheme");
			htmlTag.setAttribute("data-theme", "defaultTheme");
		} else {
			htmlTag.setAttribute("data-theme", localStorage.getItem("themes"));
		}
	}, [htmlTag, setDefaultTheme]);

	const switchTheme = () => {
		if (!defaultTheme) {
			localStorage.setItem("themes", "defaultTheme");
			htmlTag.setAttribute("data-theme", localStorage.getItem("themes"));
			setDefaultTheme(true);
		} else {
			localStorage.setItem("themes", "dark");
			htmlTag.setAttribute("data-theme", localStorage.getItem("themes"));
			setDefaultTheme(false);
		}
	};
	return (
		<div className="theme-switch">
			<span>
				<img className="theme-switch__logo" src={iconSun} alt="sun" />
			</span>
			<div className="toggle toggle__modes">
				<input type="checkbox" id="toggle__modes"
					className={`toggle__checkbox ${!defaultTheme ? "active" : ""}`}
					onClick={() => switchTheme()} />
				<label className="toggle__btn" htmlFor="toggle__modes">
					<span className="toggle__feature"></span>
				</label>
			</div>
			<span>
				<img className="theme-switch__logo" src={iconMoon} alt="moon" />
			</span>
		</div>

	)
}

export default Toggle;