# FinanzApp

![FinanzApp Logo](public/logo.png)

## Project Overview

FinanzApp is a comprehensive personal finance management application built with modern web technologies. It helps users track their investments, manage expenses, and stay updated with financial markets, with a special focus on Argentine markets and international investments.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Key Features

- 📈 Interactive financial charts and market visualization
- 🌓 Dark/Light theme support
- 🔐 Secure authentication system
- 📱 Fully responsive design for all devices
- 📊 Real-time financial data tracking
- 💰 Comprehensive expense management

## Modules

### Merval Module
- Track Argentine stock market (MERVAL) in real-time
- View detailed stock information and historical data
- Interactive charts for market analysis
- Latest market news and updates

### Expenses Module
- Track daily expenses and income
- Categorize transactions
- Generate expense reports and analytics
- Set and monitor budgets
- Visualize spending patterns

### International Module
- Monitor international markets
- Track global currencies and exchange rates
- Access international financial news
- Follow major market indices

### Investments Module
- Manage investment portfolio
- Track investment performance
- Set investment goals
- Risk analysis tools
- Investment recommendations

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/finanzapp.git
cd finanzapp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_AUTH_KEY=your_auth_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Additional Commands

```bash
# Run tests
npm run test
# or
yarn test

# Build for production
npm run build
# or
yarn build

# Run production build
npm run start
# or
yarn start

# Run linting
npm run lint
# or
yarn lint
```

Don't forget! - Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
- For Auth:
GOOGLE_CLIENT_ID=your_api_key
GOOGLE_CLIENT_SECRET=your_api_key
GITHUB_ID=your_api_key
GITHUB_SECRET=your_api_key

- For international Data:
NEXT_PUBLIC_FRED_API_KEY=your_api_key
NASDAQ_API=your_api_key
TIINGO_API=your_api_key
FINNHUB_API_KEY=your_api_key
```

## Contributing

We welcome contributions to FinanzApp! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Stay in touch

- Author - [LeoAmerio](https://x.com/LeoAmerio)
- Website - [Porfolio Here.](https://personal-porfolio-leoamerios-projects.vercel.app/)
- LinkedIn - [Leonardo Amerio](https://www.linkedin.com/in/leonardo-amerio/)

