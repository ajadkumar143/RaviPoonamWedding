RAVI POONAM WEDDING — Version 20.0
React.js + Vite + CSS | 6 animated invitation pages

RUN IN VS CODE (Windows)
1. Extract the ZIP. Open the RaviPoonamWedding folder containing package.json.
2. Install Node.js 22 LTS (22.12 or newer) if necessary.
3. Open Terminal (Ctrl + J) and run:
   npm install
   npm run dev
4. Open the Local URL shown by Vite (usually http://localhost:5173).

TEST ON YOUR MOBILE
Connect your phone and computer to the same Wi-Fi.
   npm run dev -- --host 0.0.0.0
Open the Network URL displayed by Vite in your phone browser.
Allow local network access through Windows Firewall if prompted.
The slightly inset 9:16 portrait invitation fits the available screen without scrolling.
The browser address bar remains under browser control. Swipe left/right to change pages.
The six pages automatically repeat every four seconds, with a 650ms crossfade.
When a browser tab is hidden, the timer pauses; it resumes when visible.
Reduced-motion preferences suppress decorative movement.

PRODUCTION AND HOSTING
   npm run build
   npm run preview
The build generates dist/. The preview URL is for local testing, not public hosting.
Hostinger: upload the CONTENTS of dist/ to public_html of the chosen domain.
Netlify: build command npm run build; publish directory dist; or manually upload dist/.
Vercel: import the source project, select Vite, build npm run build, output directory dist.
After deployment, open your actual HTTPS website on Android and iPhone and test the QR.
Do not upload src/ or node_modules/ instead of the compiled dist/ when using static hosting.

PAGES (src/pages)
Welcome.jsx: मंगल आमंत्रण, माँ मरुका माता, floral crest, animated lamps, couple names, gold date panel.
Haldi.jsx: हल्दी, golden turmeric theme, animated powder, floral artwork, Dress Code.
Mehndi.jsx: मेहंदी, green leaves, henna patterns and cones, Dress Code.
Wedding.jsx: शुभ विवाह, red-and-gold mandap, animated varmala and sacred fire. No Dress Code.
VidaiBhoj.jsx: विदाई एवं बहुभोज, animated doli and feast illustrations, family invitations.
Location.jsx: बारात प्रस्थान, supplied addresses, PIN 221104, 5 PM, tappable venue QR.

FEATURES AND FILES
- Fixed text, no scrolling, no page count, no timer bar, no stop/fullscreen/next/previous buttons.
- No calendar, sharing, route or स्थान देखें buttons.
- Original wedding dates, addresses and family names retained. स्वागताकांक्षी before दर्शनाभिलाषी.
- No photographs or illustrations of people. SVG decorative art, CSS animations.
- src/main.jsx: responsive fitting, crossfade, swipe, four-second slide loop.
- src/InvitationArt.jsx: V16 welcome and farewell artwork.
- src/Decor.jsx, src/CeremonyArt.jsx: common and ceremony-specific animated decorations.
- src/shared.jsx: address details and shared helper components.
- src/style.css: layout, typography, palette and animation rules.
- Google Fonts with local system fallbacks. Internet connection may be required for web fonts.
- public/venue-qr.png: standard QR for the exact supplied link https://qrfy.io/ULB6TEkWYk.
- public/location-qr-original.png: original cropped heart QR reference.
  QR is unchanged from V15. The redirect's actual Google Maps pin has not been independently verified.
  Please open the QR link and confirm the destination before sharing the website.

V17 CHANGES
Richer gradients on all six pages; turmeric gold, henna green and vermilion red.
Important names, headings, dates, times, family details and dress colors use bold typography.
All original event details, QR files, page sequence and animations remain.

UPDATE EXISTING GITHUB REPOSITORY
Copy the contents of this project into your existing Wedding folder, overwriting source files.
Keep the existing .git folder and package-lock.json. Run npm install to sync the lock file.
   npm install
   npm run build
   git add .
   git commit -m "Wedding V20 floral borders and garlands"
   git push
Vercel automatically deploys the main branch when connected and authorized.

V19 CHANGES
Only the welcome page has a new sapphire-blue silk gradient and matching navy text. The other five pages use the original V17 palettes and artwork, as in the supplied screenshot.

V20 CHANGES
All six pages retain their V19 gradients, wedding text and QR code. RoyalFrame.jsx adds a layered metallic border, floral corners, three floral toran swags, hanging mala on both sides, gold filigree and bottom floral trim. Garlands sway, gold accents shimmer and flowers drift along the edges. All decorative elements are non-interactive and respect reduced motion. The four-second crossfade and portrait layout remain unchanged.

VALIDATION
30/30 static Chromium layout checks passed; 12 JSX files and CSS syntax checked; four new decoration animation types observed in Chromium static preview. Live React production build not verified (npm registry DNS unavailable). Actual mobile device rendering not verified.
