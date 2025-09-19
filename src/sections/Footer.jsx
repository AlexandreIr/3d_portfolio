export const Footer = () => {
  return (
    <section
      className="c-space pt-7 pb-3 border-t border-black-300 
    flex justify-between items-center flex-wrap gap-5"
    >
      <div className="text-white-500 flex gap-2">
        <p>Termos & Condições</p>
        <p>|</p>
        <p>Política de privacidade</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon hover:border-2 hover:border-white transition-colors duration-500">
          <a
            href="https://github.com/AlexandreIr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon hover:border-2 hover:border-white transition-colors duration-500">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className="social-icon hover:border-2 hover:border-white transition-colors duration-500">
          <a
            href="https://www.linkedin.com/in/alexandre-fernandes-da-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/linkedin.svg" alt="linkedin" />
          </a>
        </div>
      </div>
      <p className="text-white-500">
        &copy; {new Date().getFullYear()} Alexandre Silva. All rights reserved.
      </p>
    </section>
  );
};
