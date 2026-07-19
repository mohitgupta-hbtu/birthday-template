# 🎈 Premium Birthday Greeting Template

A gorgeous, dreamy, and highly interactive birthday celebration website built with **React**, **TypeScript**, **Tailwind CSS**, & **Framer Motion (Motion)**. 

This repository is structured as a fully customizable template. You can fork this project, change the texts and photos in a single file, and deploy it to **Vercel** or **Netlify** in under 5 minutes!

---

## 🚀 How to Customize (Quick Start)

You do **not** need to search through coding files to customize the website. Everything is centralized in **one single file**:

👉 Open and edit: **`src/config/birthdayData.ts`**

### ✍️ 1. Updating Texts & Names
In `src/config/birthdayData.ts`, you can configure:
- **`meta`**: Page titles & SEO description metadata.
- **`hero`**: Main page title, target person's name, intro welcome lines, and CTA buttons.
- **`journey`**: Story titles and paragraphs for each segment.
- **`gallery`**: Custom grid headings, YouTube background sound loop IDs, and details.
- **`finale`**: Main wishing messages, custom poems, and creator credits.

### 📸 2. Adding Custom Images
By default, the template triggers beautiful, modern animated **cards with placeholder text** indicating exactly what slide and location they represent. 

To replace placeholders with actual images:
1. Save your custom images (JPEG/PNG) in the **`src/assets/`** directory.
2. Import them at the top of code files or set the image URL path inside the configurations:
   
   **For the Journey Timeline (`src/routes/journey.tsx`):**
   ```typescript
   import yourPic from "@/assets/your-pic.jpg";
   // Set block.image to your imported photo inside birthdayData.journey
   ```

   **For the Polaroid Gallery (`src/routes/gallery.tsx`):**
   ```typescript
   import memoryPic from "@/assets/memory-1.jpg";
   // Link memoryPic to the src property of the target image inside the images array mapping.
   ```

### 🎵 3. Swapping Background Music
The background audio is powered by a quiet YouTube background player:
1. Go to YouTube and copy the video ID of your favorite track (e.g. for `https://www.youtube.com/watch?v=g1uEqR5eFMo`, the ID is `g1uEqR5eFMo`).
2. Update the `youtubeMusicId` in `src/config/birthdayData.ts` with your custom ID!

---

## 🛠️ Local Development

To run this project locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the local server:**
   ```bash
   npm run dev
   ```
3. **Build optimized production version:**
   ```bash
   npm run build
   ```

---

## 🌐 Free 1-Click Deployment

Once you have pushed your customized template to GitHub:
1. Go to **[Vercel](https://vercel.com/)** or **[Netlify](https://www.netlify.com/)**.
2. Connect your GitHub repository.
3. Keep default settings (`npm run build` build command, `dist` output directory).
4. Click **Deploy**! Share the live link with your special someone. ❤️
