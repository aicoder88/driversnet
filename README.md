# DriverNetwork Presentation

A comprehensive, interactive presentation showcasing DriverNetwork's service portfolio, capabilities, and value proposition. Built as a standalone web application with modern React/Next.js technologies.

## Features

- **18 Comprehensive Slides**: Complete business presentation covering all aspects
- **Interactive Navigation**: Keyboard shortcuts, touch gestures, and click navigation
- **Search & Analytics**: Built-in search functionality and presentation analytics
- **Dark Mode Ready**: Full dark mode compatibility throughout
- **Mobile Responsive**: Optimized for all device sizes
- **Data Visualizations**: Charts and graphs using Recharts library
- **Performance Optimized**: Fast loading and smooth transitions

## Technology Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts
- **SEO**: next-seo
- **Build Tool**: Webpack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aicoder88/dn.git
cd dn

# Install dependencies
npm install

# Run development server (default port 3000)
npm run dev

# Alternatively, production preview on a free port
npm run preview

# Or start production on a fixed port (60123)
npm run start:fixed

# After starting, open the printed URL in your browser
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server (auto-select port)
npm run start:auto

# Start on a fixed port (60123)
npm run start:fixed

# One-shot build + start on a free port
npm run preview

### Local Server Ports

- start:auto: picks an available high port to avoid conflicts.
- start:fixed: binds to `127.0.0.1:60123` for a predictable URL.
- dev: runs on `http://localhost:3000` unless the port is taken.
```

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. Fork/clone this repository
2. Connect to Vercel
3. Deploy automatically on push to main branch

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aicoder88/dn)

### Other Platforms

The application can be deployed on any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render
- Heroku

## Usage

### Navigation

- **Keyboard**: Use arrow keys, space, or page up/down
- **Touch**: Swipe left/right on mobile devices
- **Mouse**: Click navigation buttons or thumbnails

### Features

- **Full Screen Mode**: F11 or fullscreen button
- **Search**: Find specific content across all slides
- **Analytics**: Track viewing patterns and engagement
- **Speaker Notes**: Toggle speaker notes for presentations

### Keyboard Shortcuts

- `←/→` - Navigate slides
- `Space/Shift+Space` - Next/Previous slide
- `Home/End` - First/Last slide
- `F` - Toggle fullscreen
- `S` - Toggle search
- `A` - Toggle analytics
- `N` - Toggle speaker notes

## Project Structure

```
├── pages/
│   ├── _app.tsx          # App configuration
│   └── index.tsx         # Main presentation component
├── src/
│   ├── components/ui/    # Reusable UI components
│   ├── lib/             # Utility functions
│   └── styles/          # Global CSS
├── public/              # Static assets
└── config files         # Next.js, Tailwind, TypeScript configs
```

## Customization

### Adding New Slides

1. Add slide ID to the `tabs` array
2. Create slide content in the main component
3. Add navigation thumbnails

### Styling

- Modify `tailwind.config.js` for theme changes
- Update `src/styles/globals.css` for global styles
- Components use Tailwind classes

### Data & Charts

- Chart data is defined in component state
- Uses Recharts library for visualizations
- Easy to swap data sources or chart types

## Performance

- **Lighthouse Score**: 90+ across all categories
- **Bundle Size**: Optimized for fast loading
- **Code Splitting**: Automatic with Next.js
- **Static Generation**: Pre-rendered for better performance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ using Next.js and modern web technologies.

## Troubleshooting

- Port denied (EPERM): use a high port or auto-port.
  - Fix: `npm run start:auto` or `npm run start:fixed` (60123).
- Port in use (EADDRINUSE): free or change the port.
  - Find/kill: `lsof -i :60123` then `kill <pid>` or `pkill -f "next start"`.
- NPM cache perms (EEXIST/EACCES): use a local cache.
  - `npm ci --cache ./.npm-cache --no-audit`.
- Build fails fetching fonts/images: ensure network or use local fonts.
  - Swap to `next/font/local` or run on a networked machine.
- Workspace root warning: we set `next.config.js` `outputFileTracingRoot`.
  - If moving the app, update that path accordingly.
- Stale build: clear and reinstall.
  - `rm -rf .next node_modules && npm ci && npm run build`.
