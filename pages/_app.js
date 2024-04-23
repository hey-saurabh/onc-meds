import DashboardLayout from "@/components/DashboardLayout";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
  }

  return (
    <DashboardLayout isDark={isDark} setIsDark={setIsDark} toggleDark={toggleDark}>
      <Component {...pageProps} isDark={isDark} setIsDark={setIsDark} toggleDark={toggleDark} />
    </DashboardLayout>
  );
}
