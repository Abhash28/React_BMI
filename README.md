# BMI Calculator App (React + Bootstrap)

This is a simple **BMI (Body Mass Index)** calculator built with **React** and styled using **Bootstrap 5**. It allows users to input their height and weight, calculate their BMI, and view a category-based health remark.

---

## 🛠️ Tech Stack

- ⚛️ React
- 🎨 Bootstrap 5
- 💡 JavaScript
- 🧠 useState & useRef hooks

---

## 🚀 Features

- Input height in centimeters and weight in kilograms
- BMI is calculated using the standard formula:  
  \[
  \text{BMI} = \frac{\text{weight (kg)}}{(\text{height (m)})^2}
  \]
- Displays BMI value and category:
  - **Underweight**: BMI < 18.5
  - **Normal weight**: 18.5 ≤ BMI < 24.9
  - **Overweight**: 25 ≤ BMI < 29.9
  - **Obese**: BMI ≥ 30
- Bootstrap-based responsive UI

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/react-bmi-app.git
cd react-bmi-app

# Install dependencies
npm install

# Start the development server
npm start

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
