export default {
	palette: {
		height: "calc(100vh - 15px)",
	},
	paletteColors: {
		height: "90%",
		display: "flex",
		overflow: "hidden",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flex: "1",
    },
    // Used for the container to go back to the previous page as well as the button
	goBack: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.5px",
		opacity: 1,
		backgroundColor: "black",
		"& button": {
            cursor: "pointer",
            width: "100px",
            height: "30px",
            position: "absolute",
			display: "inline-block",
			top: "50%",
			left: "50%",
			marginLeft: "-50px",
			marginTop: "-15px",
            background: "rgba(255, 255, 255, 0.3)",
            color: "white",
            fontSize: "1rem",
            textAlign: "center",
			lineHeight: "30px",
			textTransform: "uppercase",
            border: "none",
            outline: "none",
			textDecoration: "none",
		},
	},
};
