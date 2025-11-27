# ImmFit - Fitness Apparel App 🏋️‍♀️

A modern fitness and apparel application built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion). Features include onboarding screens, authentication flows, 3D body scanning, product browsing, and a complete checkout experience.

## ✨ Features

- 🎨 **Modern UI/UX** - Sleek design with smooth animations and transitions
- 🔐 **Authentication** - Complete sign-in, sign-up, and password recovery flows
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎯 **3D Body Scanning** - Virtual try-on functionality for personalized fit
- 🛍️ **E-commerce** - Browse products, add to wishlist, and checkout
- 💯 **Fit Percentage** - Shows how well items fit based on your body scan (80-100%)
- ⚡ **Fast Performance** - Optimized build with code splitting and lazy loading
- 🌈 **Smooth Animations** - Motion-powered transitions throughout the app

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion** - Animation library (formerly Framer Motion)
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git installed

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/innFit_application.git
cd innFit_application
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your app will be live at: `https://your-app-name.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## 📱 App Structure

```
/
├── App.tsx                    # Main app component with routing
├── main.tsx                   # App entry point
├── index.html                 # HTML template
├── components/
│   ├── AppLoading.tsx        # Loading screen
│   ├── GetStarted.tsx        # Get started screen
│   ├── IntroductionScreen1-3.tsx # Onboarding screens
│   ├── SignIn.tsx            # Sign in page
│   ├── SignUp.tsx            # Sign up page
│   ├── ForgotPassword.tsx    # Password recovery
│   ├── ScanningPage.tsx      # 3D body scanning
│   ├── HomePage.tsx          # Main home page
│   ├── TrendingProductsPage.tsx # Product search/trending
│   ├── ShopPage.tsx          # Favorites/wishlist
│   ├── PlaceOrderPage.tsx    # Cart and checkout
│   ├── ShippingPage.tsx      # Shipping details
│   ├── SuccessfullyPage.tsx  # Order confirmation
│   ├── ProfilePage.tsx       # User profile
│   └── ui/                   # Reusable UI components
├── styles/
│   └── globals.css           # Global styles and Tailwind config
└── imports/                  # Figma imported assets
```

## 🎯 Navigation Flow

1. **Loading Screen** → **Onboarding (3 screens)** → **Sign In**
2. **Sign In** → **Get Started** → **Body Scanning** → **Home**
3. **Bottom Navigation**:
   - 🏠 Home → Get Started Page
   - 💗 Wishlist → ShopPage (Favorites)
   - 🔍 Search → TrendingProductsPage
   - 🛍️ Shop → PlaceOrderPage
   - ⚙️ Settings → ProfilePage

## 🎨 Key Features

### Fit Percentage System
- Displayed on all product cards (green badge)
- Always shows 80-100% range
- Based on user's 3D body scan data
- Helps users find the perfect fit

### Smooth Animations
- Page transitions: 300-500ms
- Button states: Default, Hover, Pressed
- Input states: Idle, Focused, Filled
- Ripple effects on interactions

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interactions
- Optimized for both portrait and landscape

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint code
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email your-email@example.com or open an issue.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
