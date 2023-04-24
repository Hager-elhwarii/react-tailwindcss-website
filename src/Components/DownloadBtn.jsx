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
    // Fetch the Tailwind CSS file
    console.log("in");
    const tailwindUrl = "https://cdn.tailwindcss.com/dist/tailwind.min.css";

    const response = await fetch(tailwindUrl);
    console.log({ response });
    const cssCode = await response.text();
    console.log({ cssCode });
    // Create a combined HTML/CSS file
    const combinedCode = `<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`;
    console.log({ combinedCode});
    const blob = new Blob([combinedCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Klar-react-template.html";
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
