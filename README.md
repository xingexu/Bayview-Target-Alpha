# Bayview - Richmond Hill Target Alpha Website

A modern, responsive website for the Bayview - Richmond Hill chapter of Target Alpha Canada - Canada's largest student-led financial literacy organization.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**: Engaging user experience with hover effects and transitions
- **Contact Form**: Functional contact form for inquiries and partnerships
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Modern CSS with CSS Variables and Flexbox/Grid
- **Build Tool**: Create React App
- **Fonts**: Inter (Google Fonts)
- **Icons**: Emoji-based icons for simplicity

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Events.tsx      # Events and competitions
│   ├── Team.tsx        # Team members
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer with links
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bayview-richmond-hill-target-alpha
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## 🎨 Customization

### Colors
The website uses CSS variables for easy color customization. Edit the `:root` section in `src/index.css`:

```css
:root {
  --primary-color: #1e40af;    /* Main brand color */
  --secondary-color: #3b82f6;  /* Secondary brand color */
  --accent-color: #f59e0b;     /* Accent/highlight color */
  /* ... other variables */
}
```

### Content
- Update team member information in `src/components/Team.tsx`
- Modify events in `src/components/Events.tsx`
- Edit contact information in `src/components/Contact.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔗 External Links

The website integrates with the main Target Alpha Canada website:
- Main site: [https://targetalpha.ca](https://targetalpha.ca)
- Chapter registration and resources
- National competitions and events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Target Alpha Canada network and follows their organizational guidelines.

## 📞 Contact

- **Bayview - Richmond Hill Chapter**: bayview.richmondhill@targetalpha.ca
- **National Website**: [https://targetalpha.ca](https://targetalpha.ca)
- **Location**: Richmond Hill, Ontario, Canada

---

Built with ❤️ for Richmond Hill's youth financial literacy community.
