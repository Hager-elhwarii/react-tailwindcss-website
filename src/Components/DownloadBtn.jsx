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
    const htmlCode = document.documentElement.outerHTML;
    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Klar-react-template.html";
    a.click();
    URL.revokeObjectURL(url);

    const head = document.getElementsByTagName("head")[0];
    const tailwindLink = document.createElement("link");
    tailwindLink.rel = "stylesheet";
    tailwindLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css";
    head.appendChild(tailwindLink);
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
