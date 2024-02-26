import React from "react";

function Header() {
  return (
    <div className="p-5 bg-primary flex justify-between">
      <h1
        className="text-tertiary text-4xl font-semibold"
        title="Marvel Cinematic Universe"
      >
        <a
          href="https://www.marvel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MCU
        </a>
      </h1>
      <h1
        className="text-white text-4xl font-semibold"
        title="My favourite football club"
      >
        <a
          href="https://www.manutd.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manchester United
        </a>
      </h1>
      <h1 className="text-secondary text-4xl font-semibold" title="My home">
        <a
          href="https://en.wikipedia.org/wiki/Kashmir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kashmir
        </a>
      </h1>
    </div>
  );
}

export default Header;
