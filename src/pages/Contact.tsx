import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contact as ContactComponent } from "../components/Contact";
import { FAQSection } from "../components/FAQSection";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactComponent />
      <FAQSection 
        compact={true} 
        maxItems={6} 
        showCategories={false}
        usePageSpecific={true}
      />
      <Footer />
    </>
  );
};

export default Contact;