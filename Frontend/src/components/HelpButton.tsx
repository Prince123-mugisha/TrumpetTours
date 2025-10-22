import { Link } from "react-router-dom";

const HelpButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/250793766308?text=Hello!%20I%20need%20help%20with%20my%20travel%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20bd5c] transition-all flex items-center justify-center"
      >
        {/* WhatsApp icon */}
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current transition-transform group-hover:scale-110" aria-hidden="true">
          <path d="M19.11 17.34c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.96 1.13-.18.2-.36.22-.65.08-.29-.15-1.23-.45-2.35-1.43-.87-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.81.38-.27.29-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.21 4.6.73.32 1.29.51 1.73.65.73.23 1.39.2 1.91.12.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.36z"/>
          <path d="M16.02 3.05C9.41 3.05 4.07 8.39 4.07 15c0 2.11.55 4.08 1.51 5.79L4 28l7.38-1.53c1.65.9 3.54 1.41 5.64 1.41 6.61 0 11.95-5.34 11.95-11.95S22.63 3.05 16.02 3.05zm0 21.74c-1.9 0-3.66-.56-5.14-1.53l-.37-.24-4.37.91.93-4.26-.24-.4c-.92-1.52-1.45-3.3-1.45-5.18 0-5.47 4.45-9.92 9.92-9.92s9.92 4.45 9.92 9.92-4.45 9.92-9.92 9.92z"/>
        </svg>
      </a>
    </div>
  );
};

export default HelpButton;


