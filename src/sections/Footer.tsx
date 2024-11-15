const Footer = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 font-suse">
      <div className="text-white-500 flex gap-2">
        <p>Built with 🩶 by Andre Tavares</p>
      </div>

      <div className="flex gap-3">
        <div
          className="social-icon"
          onClick={() => openInNewTab("https://github.com/tavares97")}
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div
          className="social-icon"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/andretavares97/")
          }
        >
          <img
            src="/assets/linkedin.png"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Andre Tavares. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
