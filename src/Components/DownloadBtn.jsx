import { useState, useEffect } from "react";

export default function DownloadBtn({ fileUrl }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  const handleDownloadClick = async () => {
    const response = await fetch(window.location.href);
    const htmlCode = await response.text();
    const a = document.createElement("a");
    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = "Klar-react-template.html";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <>
      <button onClick={handleDownloadClick}>
        <a
          className={`border border-outline hover:bg-white hover:text-black  px-4 rounded-full cursor-pointer transtion ease-in-out duration-500 ${
            scrolled ? "py-1" : "py-2"
          }`}
        >
          Download Template
        </a>
      </button>
    </>
  );
}
