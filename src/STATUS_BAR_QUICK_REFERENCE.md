# iPhone Status Bar - Quick Reference Guide

## 🎯 Copy-Paste Template

Use this template for ALL pages in your ImmFit app:

---

## 1️⃣ Add Import (Top of File)

```tsx
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
```

---

## 2️⃣ Replace Status Bar Code

**Find your current status bar section and replace it with:**

```tsx
{/* Status Bar - iPhone Standard */}
<div className="bg-white relative h-[44px]">
  <BarsStatusBarDesignLight />
</div>
```

---

## 📱 Common Page Layouts

### Layout 1: Status Bar + Header (Sticky)

```tsx
{/* Status Bar - iPhone Standard */}
<div className="bg-white relative h-[44px] sticky top-0 z-30">
  <BarsStatusBarDesignLight />
</div>

{/* Header */}
<div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-[44px] z-30">
  {/* Your header content */}
</div>
```

### Layout 2: Status Bar + Scrollable Content

```tsx
<div className="bg-[#f9f9f9] min-h-screen">
  {/* Status Bar - iPhone Standard */}
  <div className="bg-white relative h-[44px]">
    <BarsStatusBarDesignLight />
  </div>

  {/* Your page content */}
  <div className="px-4 py-4">
    {/* Content here */}
  </div>
</div>
```

### Layout 3: Status Bar + Full Page Container

```tsx
<div className="bg-white h-screen overflow-y-auto">
  {/* Status Bar - iPhone Standard */}
  <div className="bg-white relative h-[44px]">
    <BarsStatusBarDesignLight />
  </div>

  {/* Rest of your page */}
</div>
```

---

## 🔍 What to Look For

When searching for your current status bar, look for:

### Pattern 1: Time "9:41" text
```tsx
<span className="text-[15px] text-black">9:41</span>
```

### Pattern 2: Custom battery/signal icons
```tsx
<div className="flex items-center gap-1">
  <div className="w-4 h-3 flex items-end gap-[1px]">
    {/* Custom bars */}
  </div>
```

### Pattern 3: SVG icons
```tsx
<svg className="w-4 h-3" fill="black" viewBox="0 0 16 12">
```

**DELETE ALL OF THESE** and replace with the template above!

---

## ✅ Verification Checklist

After updating each page:

1. **Import added?** ✓
   - Check top of file for: `import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";`

2. **Old code removed?** ✓
   - No more custom `9:41` span elements
   - No more custom bar/icon divs
   - No more inline SVGs for WiFi/battery

3. **New component added?** ✓
   - Has wrapper: `<div className="bg-white relative h-[44px]">`
   - Has component: `<BarsStatusBarDesignLight />`

4. **Visual check?** ✓
   - Time shows "9:41" on left
   - Cellular signal (4 bars) on right
   - WiFi icon next to cellular
   - Battery icon on far right
   - All icons properly aligned

---

## 📋 Page Update Tracker

Check off each page as you update it:

### Authentication Flow
- [ ] `/components/SignIn.tsx`
- [ ] `/components/SignUp.tsx`
- [ ] `/components/ForgotPassword.tsx`
- [ ] `/components/VerificationPage.tsx`
- [ ] `/components/SuccessfullyPage.tsx`

### Onboarding Flow
- [x] `/components/IntroductionScreen1.tsx`
- [x] `/components/IntroductionScreen2.tsx` ← Reference (already correct)
- [ ] `/components/IntroductionScreen3.tsx`

### Main App Pages
- [ ] `/components/GetStartedPage.tsx`
- [ ] `/components/HomePage.tsx`
- [ ] `/components/TrendingProductsPage.tsx`
- [ ] `/components/ShopPage.tsx`
- [ ] `/components/PlaceOrderPage.tsx`
- [ ] `/components/ProfilePage.tsx`

### Other Pages
- [ ] `/components/BodyScanPage.tsx`
- [ ] `/components/ProductDetailPage.tsx`
- [ ] Any other custom pages...

---

## 🚀 Quick Start - Update HomePage Example

### Current HomePage (Lines to Find)

Search for this in `/components/HomePage.tsx`:

```tsx
{/* Status Bar */}
<div className="bg-white px-4 pt-3 pb-2 sticky top-0 z-30">
  <div className="flex items-center justify-between">
    <span className="text-[15px] text-black font-medium">9:41</span>
```

### Replace With

```tsx
{/* Status Bar - iPhone Standard */}
<div className="bg-white relative h-[44px] sticky top-0 z-30">
  <BarsStatusBarDesignLight />
</div>
```

### And Add Import

At the top of `/components/HomePage.tsx`, after existing imports:

```tsx
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
```

**Done!** HomePage status bar is now identical to IntroductionScreen2! 🎉

---

## 💾 Save This Reference

Keep this file open while updating pages for quick copy-paste access!
