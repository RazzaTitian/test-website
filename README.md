diff --git a/README.md b/README.md
index a4c69b17ca829582f898c5a62cd564cf7106ec2a..afb3b20e02402964c04707bafd588e2f37a53df8 100644
--- a/README.md
+++ b/README.md
@@ -1,125 +1,53 @@
 # Nova Portfolio Website
 
 A cinematic, high-interaction portfolio experience built with **vanilla HTML, CSS, and JavaScript** (no framework lock-in), designed as a polished base you can customize for your personal brand.
 
 ## Highlights
 
-- Sticky glassmorphism navigation with mobile menu
-- Animated hero with counters and gradient typography
+- Sticky glassmorphism navigation with active-section highlighting
+- Theme toggle (dark/light) with persisted preference
+- Command palette (`⌘/Ctrl + K`) for quick navigation/actions
+- Animated hero with counters and a rotating typing line
 - Scroll reveal animations for all major content blocks
 - Custom cursor interactions (desktop)
 - Scroll progress indicator
-- Theme toggle (dark/light) with persisted preference
 - Animated particle background canvas with connective lines
 - Skill radar chart drawn in Canvas API
-- Searchable and filterable project gallery
+- Services section and interactive testimonials carousel
+- Search/filter/sort project gallery with impact scoring
 - Project detail modal dialog
 - Timeline/journey section
-- Contact form with validation and UX feedback
-- Fully responsive layout
+- Contact form with validation, UX feedback, and toast notifications
+- Fully responsive layout + reduced-motion support
 
 ## Project Structure
 
 ```text
 .
 ├── index.html     # semantic structure and sections
-├── styles.css     # complete visual system + responsive behavior
-├── app.js         # interactivity, animations, rendering, and state
+├── styles.css     # visual system, components, and responsive behavior
+├── app.js         # interactivity, rendering, and application state
 └── README.md      # this guide
 ```
 
 ## Quick Start
 
-### Option 1: VSCode Live Server
-
-1. Install **Live Server** extension.
-2. Right-click `index.html`.
-3. Click **Open with Live Server**.
-
-### Option 2: Python server
-
 ```bash
 python3 -m http.server 8000
 ```
 
-Then open: `http://localhost:8000`
+Open: `http://localhost:8000`
 
 ## Customization Guide
 
-### 1) Brand & Identity
-
-Edit these in `index.html`:
-
-- Brand text in header (`NOVA•`)
-- Hero headline and copy
-- Contact wording/footer copy
-
-### 2) Projects
-
-Edit `projects` array in `app.js`:
-
-- `title`
-- `category`
-- `description`
-- `tags`
-- `link`
-
-Project filtering and search are automatic.
-
-### 3) Skills Radar
-
-Edit `skillData` in `app.js` (0-100 values):
-
-- Frontend
-- Backend
-- UX
-- DevOps
-- AI
-- Leadership
-
-Canvas redraw logic updates automatically.
-
-### 4) Toolbox Chips
-
-Edit the `tools` array in `app.js`.
-
-### 5) Timeline
-
-Edit the `milestones` array in `app.js`.
-
-### 6) Colors & Theme
-
-Adjust design tokens in `styles.css`:
-
-- `:root` for dark theme
-- `:root.light` for light theme
-
-## Performance Notes
-
-- Pure client-side architecture keeps startup fast.
-- No external JS dependencies or CDNs are required.
-- Canvas background particle count is intentionally moderate; reduce count in `createParticles()` for lower-end devices.
-
-## Accessibility Notes
-
-- Semantic landmarks (`header`, `main`, `section`, `footer`)
-- Focusable controls and visible states
-- `aria-live` on contact feedback
-- Dialog uses native `<dialog>` for modal semantics
