# 🎨 Painter Palette

A modern web application for creating, customizing, and managing color palettes. Perfect for designers, developers, and anyone who needs to build cohesive color schemes for their projects.

**Live Demo:** [zack09holland.github.io/painter-palette](https://zack09holland.github.io/painter-palette/)

---

## Features

- 🎯 **Create Custom Palettes** - Design your own color schemes from scratch
- 🔄 **Dynamic Color Scaling** - Generate 10 shades (50-900) for each base color using advanced color science
- 📋 **Multiple Color Formats** - View and copy colors in HEX, RGB, or RGBA formats
- 🎪 **Pre-built Palettes** - Start with curated palettes including Material UI and Flat UI color schemes
- 💾 **Persistent Storage** - Your palettes are saved locally and persist between sessions
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Interactive UI** - Material Design interface with intuitive controls
- 🔗 **Drag & Drop** - Easily reorder colors in your palettes
- 📤 **Copy to Clipboard** - Quick one-click copying of color codes

---

## Technology Stack

- **React** (v16.13) - UI library for building interactive components
- **Material-UI** (v4) - Comprehensive component library and styling framework
- **Chroma.js** - Advanced color manipulation and scaling using the LAB color space
- **React Router** (v5) - Client-side routing for multi-page navigation
- **React Sortable HOC** - Drag-and-drop functionality for reordering colors
- **React Color** - Color picker component
- **Local Storage API** - Client-side persistence for saved palettes

---

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zack09holland/painter-palette.git
   cd painter-palette
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000/painter-palette`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` directory.

---

## Usage

### Browsing Palettes

1. Open the application and browse the palette list
2. Click on any palette to view all color variations
3. Use the slider to adjust the color shade level (50-900)
4. Change the color format dropdown to view colors in different formats

### Creating a New Palette

1. Click the **"Create New Palette"** button
2. Select a starting palette or begin with an empty one
3. Use the color picker to add colors:
   - Enter a color name
   - Select the color value (HEX, RGB, etc.)
   - Click **"Add Color"** or press Enter
4. Drag colors to reorder them
5. Remove colors using the delete button
6. Click **"Save"** and enter a palette name

### Managing Palettes

- **View Details** - Click a palette to explore all color shades
- **Delete** - Remove a palette from your collection
- **Export** - Copy individual color values in your preferred format

### Color Details

Click on any color box to view:
- All tint and shade variations (50-900)
- Color values in multiple formats
- One-click copy functionality

---

## Project Structure

```
src/
├── components/
│   ├── Palette/              # Main palette display
│   ├── NewPalette/           # Palette creation interface
│   ├── SingleColorPalette/   # Detailed color view
│   ├── ColorBox/             # Individual color display
│   ├── PaletteList/          # Palette collection view
│   ├── NavBar/               # Navigation and controls
│   └── Footer/               # Palette metadata display
├── helpers/
│   └── generatePalette.js    # Color scaling logic
├── styles/                   # Material-UI style definitions
├── seedColorPalettes.js      # Pre-built palette data
└── App.js                    # Main application component
```

### Key Files

- **generatePalette.js** - Uses Chroma.js to create 10 shades for each color by blending from dark to light
- **seedColorPalettes.js** - Contains pre-built palettes including Material Design colors
- **App.js** - Manages routing, state, and persistence

---

## Color Generation Algorithm

The application uses Chroma.js to generate color scales:

1. For each base color, a scale is created using LAB color space
2. The scale ranges from darkened color → base color → white
3. 10 discrete color stops are extracted (corresponding to levels 50-900)
4. Each color is converted to HEX, RGB, and RGBA formats

This approach ensures perceptually uniform color variations that work well for design systems and applications.

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Run development server |
| `npm build` | Create production build |
| `npm test` | Run tests |
| `npm deploy` | Deploy to GitHub Pages |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Local Storage

Palettes are automatically saved to your browser's local storage. This means:
- ✅ All custom palettes persist across browser sessions
- ✅ No account or login required
- ⚠️ Clearing browser data will remove saved palettes
- ⚠️ Data is specific to each browser and device

---

## Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

This builds the application and pushes it to the `gh-pages` branch.

---

## Future Enhancements

Potential features for future versions:
- Export palettes as JSON, CSS, or image files
- Import palettes from external sources
- Palette sharing via URL
- Advanced color harmony suggestions
- Accessibility contrast checking
- Dark mode support
- Mobile app version

---

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## Author

**Zack Holland** - [GitHub](https://github.com/zack09holland)

Created as a personal challenge to build a practical application using React and modern web technologies.

---

## Acknowledgments

- [Material-UI](https://material-ui.com/) - Excellent component library and design system
- [Chroma.js](https://gka.github.io/chroma.js/) - Powerful color manipulation library
- [Material Design Color System](https://material.io/design/color/) - Inspiration for color palettes

---

## Support

If you encounter any issues or have questions, please:
- Check existing [issues](https://github.com/zack09holland/painter-palette/issues)
- Open a new issue with a detailed description
- Include steps to reproduce if reporting a bug
