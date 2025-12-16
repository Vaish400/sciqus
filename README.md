# Responsive Website - Desktop & Mobile Layout

A fully responsive static website that seamlessly adapts to both desktop and mobile screen sizes, featuring a modern design with interactive elements.

## 🎯 Project Overview

This project demonstrates responsive web design principles, showcasing a layout that transforms from a desktop grid layout to a mobile-friendly stacked layout. The design includes a collapsible sidebar, interactive carousels, sliders, and tab buttons.

## ✨ Features

### Desktop Layout
- **Header**: Fixed header at the top with green border
- **Sidebar**: Fixed sidebar on the left side with navigation links
- **Grid Layout**: 2x3 grid arrangement of 6 containers
- **Interactive Elements**: Carousels, sliders, and tab buttons

### Mobile Layout
- **Responsive Header**: Header with hamburger menu icon
- **Collapsible Sidebar**: Sidebar hidden by default, accessible via hamburger menu
- **Stacked Layout**: All containers arranged vertically in a single column
- **Touch-Friendly**: All interactive elements optimized for touch interaction

### Containers

1. **Container 1** (Red Border): Auto-playing image carousel with dot navigation
2. **Container 2** (Purple Border): Text block with inner rectangle
3. **Container 3** (Blue Border): Interactive slider with arrow navigation
4. **Container 4** (Orange Border): Static content area
5. **Container 5** (Orange Border): Tab buttons (A & B) with content switching
6. **Container 6** (Orange Border): Interactive slider with arrow navigation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox, Grid, and Media Queries
- **JavaScript (Vanilla)**: Interactive functionality without frameworks
- **Responsive Design**: Mobile-first approach with breakpoints

## 📁 Project Structure

```
task1/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. For best results, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
4. Navigate to `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full grid layout with sidebar
- **Tablet**: 769px - 1024px - 2-column grid layout
- **Mobile**: ≤ 768px - Single column stacked layout

## 🎨 Design Features

### Color Scheme
- **Header/Sidebar Border**: Green (#4CAF50)
- **Container 1**: Red (#f44336)
- **Container 2**: Purple (#9c27b0)
- **Container 3**: Blue (#2196F3)
- **Container 4, 5, 6**: Orange (#ff9800)

### Interactive Elements
- **Hamburger Menu**: Animated 3-line icon that transforms to X when active
- **Carousel**: Auto-playing with manual dot navigation
- **Sliders**: Arrow navigation for interactive content
- **Tab Buttons**: Toggle between different content views

## 🔧 Key Functionality

### Hamburger Menu
- Toggles sidebar visibility on mobile devices
- Includes overlay for better UX
- Smooth animations and transitions

### Carousel (Container 1)
- Auto-advances every 3 seconds
- Manual navigation via dots
- Smooth fade transitions

### Sliders (Container 3 & 6)
- Arrow-based navigation
- Circular navigation (loops back to start)
- Smooth transitions

### Tab Buttons (Container 5)
- Toggle between Button A and Button B
- Active state styling
- Dynamic content switching

## 📐 Layout Specifications

### Desktop View
```
┌─────────────────────────────────────┐
│           Header                     │
├──────┬──────────────────────────────┤
│      │  Container 1 │ Container 2   │
│ Side │              │ Container 3   │
│ bar  ├──────────────┼───────────────┤
│      │  Container 4 │ Container 5   │
│      │              │ Container 6   │
└──────┴──────────────────────────────┘
```

### Mobile View
```
┌─────────────────────┐
│ ☰ Header            │
├─────────────────────┤
│ Container 1         │
├─────────────────────┤
│ Container 2         │
├─────────────────────┤
│ Container 3         │
├─────────────────────┤
│ Container 4         │
├─────────────────────┤
│ Container 5         │
├─────────────────────┤
│ Container 6         │
└─────────────────────┘
```

## 🧪 Testing

Test the website on various screen sizes:
- Desktop monitors (1920x1080, 1366x768, etc.)
- Tablets (iPad, Android tablets)
- Mobile devices (iPhone, Android phones)

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Best Practices Implemented

- ✅ Semantic HTML5 elements
- ✅ Mobile-first responsive design
- ✅ Accessible navigation (ARIA labels)
- ✅ Smooth animations and transitions
- ✅ Touch-friendly interactive elements
- ✅ Optimized for performance
- ✅ Clean, maintainable code structure

## 📝 Customization

### Changing Colors
Edit the color values in `styles.css`:
```css
.container-1 { border: 3px solid #your-color; }
```

### Adjusting Breakpoints
Modify media queries in `styles.css`:
```css
@media (max-width: 768px) { /* Your styles */ }
```

### Adding More Slides
Update the HTML structure and JavaScript arrays in `script.js`

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a responsive web design demonstration project.

---

**Note**: This is a static website. For production use, consider adding:
- Image optimization
- Lazy loading
- Progressive Web App (PWA) features
- Additional accessibility features
- Performance optimizations

