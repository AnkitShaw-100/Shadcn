# Shadcn Dashboard

A modern, responsive dashboard built with Next.js, React, and shadcn/ui components featuring interactive data visualizations with Nivo charts.

## Features

- **Interactive Charts** - Multiple chart types including bump charts, calendars, line charts, and data tables
- **Modern UI** - Built with shadcn/ui and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16.0.6
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS 4
- **Charts**: Nivo Charts (@nivo/bump, @nivo/calendar, @nivo/line)
- **Icons**: lucide-react
- **Language**: TypeScript
- **React**: 19.2.0

## Getting Started

### Installation

```bash
git clone https://github.com/AnkitShaw-100/Shadcn.git
cd Shadcn/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Build & Deploy

```bash
npm run build
npm start
```

### Vercel Deployment

```bash
vercel deploy
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Dashboard grid
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Navigation
│   ├── Header.tsx          # Header
│   ├── Cards/
│   │   ├── General.tsx     # Bump chart
│   │   ├── Calendar.tsx    # Activity heatmap
│   │   ├── Line.tsx        # Sales trend
│   │   └── Table.tsx       # Transactions
│   └── ui/                 # shadcn components
└── lib/
    └── utils.ts            # Utilities
```

## Dashboard Components

1. **General (Bump Chart)** - Ranking trends visualization
2. **Activity Calendar** - 2024 daily activity heatmap
3. **Sales Trend** - Monthly sales by region
4. **Recent Transactions** - Transaction history table

## Configuration Files

- `vercel.json` - Vercel deployment configuration with npm retry settings
- `.npmrc` - npm configuration for reliable dependency installation
- `.vercelignore` - Files to ignore during Vercel builds
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## License

MIT License - Open source and free to use.

## Author

[AnkitShaw-100](https://github.com/AnkitShaw-100)

## Support

For issues and questions, please open an issue on the GitHub repository.
