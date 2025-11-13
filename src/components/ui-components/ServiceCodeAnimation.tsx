"use client";
import { useEffect, useState } from "react";

type ServiceCodeAnimationProps = {
  serviceTitle: string;
};

const codeSnippets: Record<string, string[]> = {
  "MVP Development": [
    "const app = createApp();",
    "app.use(router);",
    "app.use(store);",
    "app.mount('#app');",
    "// Ship it! 🚀",
  ],
  "Process Automation": [
    "📄 PDF → extract()",
    "🤖 AI analyzing...",
    "✓ Data extracted",
    "📊 Processing docs",
    "⚡ Automated ✓",
  ],
  "Custom Software": [
    "┌─ Architecture",
    "├─ Frontend ✓",
    "├─ Backend ✓",
    "├─ Database ✓",
    "└─ Deploy ✓",
  ],
  "Content Creation": [
    "# Blog Post",
    "## Engaging Title",
    "**Bold ideas**",
    "*Creative flow*",
    "> Published ✓",
  ],
  "Marketing & Growth": [
    "📊 Analytics",
    "↗ Traffic +45%",
    "💰 Revenue +32%",
    "👥 Users +1.2k",
    "🎯 ROI: 3.5x",
  ],
  "IoT & Hardware": [
    "⚡ Power: ON",
    "📡 Signal: ████",
    "🌡️ Temp: 22°C",
    "💾 Data: synced",
    "✓ Connected",
  ],
};

const ServiceCodeAnimation = ({ serviceTitle }: ServiceCodeAnimationProps) => {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const lines = codeSnippets[serviceTitle] || ["// Code here"];

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => {
          const newCode = [...prev];
          if (newCode[currentLineIndex] === undefined) {
            newCode[currentLineIndex] = "";
          }
          newCode[currentLineIndex] += currentLine[currentCharIndex];
          return newCode;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  // Different styles for each service
  const getServiceStyle = () => {
    switch (serviceTitle) {
      case "MVP Development":
        return {
          container: "bg-blue-800 text-blue-100",
          header: true,
          textColor: "text-blue-100",
        };
      case "Process Automation":
        return {
          container: "bg-purple-800 text-purple-100",
          header: false,
          textColor: "text-purple-100",
        };
      case "Custom Software":
        return {
          container: "bg-slate-900 text-emerald-400",
          header: false,
          textColor: "text-emerald-400",
        };
      case "Content Creation":
        return {
          container: "bg-orange-100 text-gray-800",
          header: false,
          textColor: "text-gray-800",
        };
      case "Marketing & Growth":
        return {
          container: "bg-teal-800 text-green-100",
          header: false,
          textColor: "text-green-100",
        };
      case "IoT & Hardware":
        return {
          container: "bg-cyan-900 text-cyan-300",
          header: false,
          textColor: "text-cyan-300",
        };
      default:
        return {
          container: "bg-gray-900 text-green-400",
          header: true,
          textColor: "text-green-400",
        };
    }
  };

  const style = getServiceStyle();

  return (
    <div
      className={`relative w-full h-48 overflow-hidden p-4 font-mono text-sm ${style.container}`}>
      {style.header && (
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      )}
      <div className={`${style.textColor} ${style.header ? "" : "pt-2"}`}>
        {displayedCode.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line}
            {index === displayedCode.length - 1 && (
              <span className="animate-pulse">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCodeAnimation;
