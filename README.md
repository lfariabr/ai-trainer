# AI Trainer

An intelligent voice-based AI training application built with Next.js, providing personalized workout coaching and training programs.

## 🚀 Features

- **User Authentication**: Secure login and registration using Clerk
- **Voice Assistant**: Interactive voice agent powered by Vapi
- **Database Management**: Real-time data syncing with Convex
- **Modern UI**: Responsive design using Shadcn components
- **Custom Training Programs**: Create and manage personalized workout plans

## 🛠️ Tech Stack

- **Frontend**: Next.js, Shadcn UI
- **Authentication**: Clerk
- **Voice Interaction**: Vapi
- **Database**: Convex
- **Deployment**: Vercel (planned)

## 📋 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone [your-repository-url]
cd ai-trainer
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:
```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Vapi Configuration
VAPI_API_KEY=your_vapi_api_key

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Webhooks Setup

1. Configure Clerk webhooks to sync with your application
2. Set up Vapi webhooks for voice assistant integration

## 🌐 Deployment

This application is designed to be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy the application

## 📊 Project Status

Current progress based on our backlog:

- ✅ Project setup with Next.js
- ✅ Authentication with Clerk
- ✅ Voice Agent setup using Vapi
- ✅ Database setup with Convex
- ✅ Webhook configuration
- ✅ Building homescreen UI with Shadcn 
- ✅ New program page
- ✅ AI workflow implementation
- 🔄 Profile page development (in progress)
- 📝 Final optimizations (planned)
- 📝 Vapi workflow configuration to trigget webhook (planned)
- 📝 Deployment (planned)

## 🧪 Testing

Run tests using the following command:

```bash
npm run test
# or
yarn test
```

## 📖 Documentation

Additional documentation:
- [Design System](link-to-design-system)
- [API Documentation](link-to-api-docs)
- [User Guide](link-to-user-guide)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Tutorial Reference](https://www.youtube.com/watch?v=BCufdom7xgY)
- Next.js Documentation
- Clerk Documentation
- Vapi Documentation
- Convex Documentation
- Shadcn UI Components