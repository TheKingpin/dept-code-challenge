import { hot } from "react-hot-loader/root";
import React from "react";
import Menu from "./components/Menu";
import HeroImage from "./components/HeroImage";
import CasesList from "./components/CasesList";
import ClientsList from "./components/ClientsList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./styles/styles.css";

const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <div className="container max-w-full w-full">
      <Menu />
      <HeroImage />
      <CasesList />
      <ClientsList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
