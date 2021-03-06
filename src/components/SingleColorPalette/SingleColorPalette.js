import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/PaletteStyles";

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = { colorFormat: "hex" };

		this._shades = this.gatherShades(this.props.palette, this.props.colorID);
		this.changeColorFormat = this.changeColorFormat.bind(this);
		console.log(this._shades);
	}
	//Get all the color levels to create a new array holding the shades for
	// the selected color
	gatherShades(palette, selectedColor) {
		let shades = [];
		let allColors = palette.colors;
		//For each color level in the palette, loop through and add it to
		// the shades array
		//      - We do not want the first color as its just white, so
		//        return a slice of the array from the first index onwards
		for (const key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === selectedColor)
			);
		}
		return shades.slice(1);
	}
	changeColorFormat(val) {
		this.setState({ colorFormat: val });
	}
	render() {
		const { colorFormat } = this.state;
		const { palette, classes } = this.props;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				backgroundColor={color[colorFormat]}
				colorName={color.name}
				showFullPalette={false}
			/>
		));
		return (
			<div className={classes.palette}>
				<Navbar
					changeColorFormat={this.changeColorFormat}
					showSlider={false}
					showColorFormatSelector={true}
				/>
				<div className={classes.paletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link
							to={`/painter-palette/palette/${palette.id}`}
							onClick={(e) => e.stopPropagation()}
						>
							<div>
								<button>Go Back</button>
							</div>
						</Link>
					</div>
				</div>
				<Footer
					paletteName={palette.paletteName}
					paletteEmoji={palette.emoji}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
