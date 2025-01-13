# **SwiftEdit: AI-Powered Video Editing for Creators**

SwiftEdit is a minimalist video editor designed to streamline the editing process for small YouTubers and content creators. With AI-powered subtitle addition and silence removal, SwiftEdit saves you time so you can focus on creating, not editing.

---

## **Tech Stack:**

- **Frontend Framework:** [Next.js](https://nextjs.org/)
- **Component Library:** [Shadcn UI](https://shadcn.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) (imported via Google Fonts)

---

## **Installation**

Follow these steps to get the project up and running locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/swiftedit.git
cd swiftedit
```

### **2. Install Dependencies**
Install the required dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### **3. Set Up Tailwind CSS**
Run the following command to set up Tailwind CSS in your project:

```bash
npx tailwindcss init
```

Make sure your `tailwind.config.js` is set up as follows:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        accent: '#007BFF',
        background: '#FFFFFF',
        text: '#000000',
      },
    },
  },
  plugins: [],
}
```

### **4. Set Up Fonts (Optional)**
Make sure you include the `Inter` font in your project for consistent typography. Add this in your `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
```

### **5. Run the Development Server**
Once dependencies are installed, run the development server to see the app in action:

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## **Folder Structure**

Here’s an overview of the main directories and files in this project:

```
/pages           - Contains all the page components (e.g., Home, Pricing, etc.)
/components      - Reusable UI components (e.g., buttons, cards, etc.)
/public          - Static assets like images, fonts, etc.
/styles          - Tailwind and custom styles
  globals.css    - Base styles (including Tailwind setup)
/utils           - Utility functions (if any)
/shadcn          - Custom Shadcn UI components
```

---

## **Development Guidelines**

1. **UI/UX Consistency:**
   - Follow the established design system defined in `globals.css` for typography and color palette.
   - Adhere to minimalist principles with ample whitespace and clean, readable fonts.
   - Use Shadcn UI components to maintain visual consistency across pages and sections.

2. **Component Structure:**
   - All UI components should be reusable and modular.
   - Use Tailwind utility classes for layout, spacing, and styling. Avoid custom CSS unless absolutely necessary.

3. **Responsive Design:**
   - Ensure the interface works seamlessly across different devices by using Tailwind's responsive classes.
   - Test components on various screen sizes to ensure they are fluid and mobile-friendly.

4. **Code Quality:**
   - Write clean, well-commented code.
   - Follow consistent naming conventions for variables, components, and functions.
   - Adhere to best practices in accessibility, including `aria` attributes and semantic HTML tags.

---

## **Features**

- **AI-Powered Subtitles:** Automatically add accurate subtitles to your videos.
- **Silence Removal:** Effortlessly remove unwanted silences and pauses from your content.
- **Minimalist Interface:** Clean and easy-to-use UI designed for creators who want to focus on content, not editing.
- **Fast Workflow:** Save time with quick processing and no need to manually edit timestamps or silence.

---

## **Contributing**

We welcome contributions to improve SwiftEdit! If you want to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and concise messages.
4. Push your changes to your fork.
5. Create a pull request describing your changes.

---

## **License**

SwiftEdit is open-source and licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## **Contact**

For any questions or inquiries, feel free to reach out to us at [support@swiftedit.com](mailto:support@swiftedit.com).
