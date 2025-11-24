import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { mySocials } from "../constants";

function Navigation({ setIsOpen, activeSection }) {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li key={item.id} className="nav-li">
          <a 
            className={`nav-link transition-colors duration-300 ${
              activeSection === item.id 
                ? 'text-white border-b-2 border-neutral-400' 
                : 'text-neutral-400 hover:text-white'
            }`}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    
  );
  
  
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const navbarHeight = 80;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight + 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Akhila Induwara 
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex sm:items-center sm:gap-6">
            <Navigation activeSection={activeSection} />
            {/* Social Links for Desktop */}
            <div className="flex gap-3 pl-4 border-l border-neutral-600">
              {mySocials.map((social, index) => (
                <a 
                  href={social.href} 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <img src={social.icon} className="w-5 h-5" alt={social.name} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation setIsOpen={setIsOpen} activeSection={activeSection} />
            {/* Social Links for Mobile */}
            <div className="flex justify-center gap-4 pt-4 mt-4 border-t border-neutral-600">
              {mySocials.map((social, index) => (
                <a 
                  href={social.href} 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={social.icon} className="w-6 h-6" alt={social.name} />
                </a>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
