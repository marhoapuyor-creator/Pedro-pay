# Pedro Pay - Ad Watching Platform

A web application where users watch ads and earn money.

## Features
- User authentication & accounts
- Ad player with video/display ads
- Earnings tracking dashboard
- Real-time balance updates
- Admin panel for ad management
- Multiple ad network integration support

## Tech Stack
- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Quick Start

### Prerequisites
- Node.js 16+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/marhoapuyor-creator/Pedro-pay.git
cd Pedro-pay
```

2. Install dependencies
```bash
npm run install-all
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Start the application
```bash
npm run dev
```

## Project Structure
```
Pedro-pay/
├── client/              # Frontend (React)
├── server/              # Backend (Node.js/Express)
├── docs/                # Documentation
└── package.json
```

## Environment Variables
Create a `.env` file in the root:
```
MONGO_URI=mongodb://localhost:27017/pedro-pay
JWT_SECRET=your_jwt_secret_key
ADSENSE_CLIENT_ID=your_adsense_id
PORT=5000
REACT_APP_API_URL=http://localhost:5000
```

## How It Works

1. Users sign up and create an account
2. Browse and watch ads
3. Earn money for each ad watched
4. Track earnings in their dashboard
5. Withdraw or reinvest earnings

## Monetization

### Supported Ad Networks
- Google AdSense
- Custom advertisers
- Video ad networks

## License
MIT
