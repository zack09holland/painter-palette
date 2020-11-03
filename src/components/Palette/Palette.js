import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorLevel: 500,
			colorFormat: "hex",
		};
		this.changeColorLevel = this.changeColorLevel.bind(this);
		this.changeColorFormat = this.changeColorFormat.bind(this);
	}
	changeColorLevel(newColorLevel) {
		this.setState({ colorLevel: newColorLevel });
	}
	changeColorFormat(val) {
		this.setState({ colorFormat: val });
	}
	render() {
		let { palette } = this.props;
		let { colorLevel, colorFormat } = this.state;
		//Map over colors and create a box corresponding to that color

		const colorBoxes = palette.colors[colorLevel].map((color) => (
			
			<ColorBox
				key={color.id}
				palette={palette}
				backgroundColor={color[colorFormat]}
				colorName={color.name}
				colorID={color.id}
				showLink={true}
			/>
		));
		return (
			<div className="Palette">
				<Navbar
					changeColorLevel={this.changeColorLevel}
					changeColorFormat={this.changeColorFormat}
					colorLevel={this.state.colorLevel}
					showSlider={true}
				/>

				<div className="Palette-colors">{colorBoxes}</div>

				<Footer
					paletteName={palette.paletteName}
					paletteEmoji={palette.emoji}
				/>
			</div>
		);
	}
}

export default Palette;