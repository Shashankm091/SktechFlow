"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("jsx");

  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCode("");
    try {
      const res = await fetch("/api/generate-ui", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, type }),
      });
      const data = await res.json();
      setCode(data.code);
    } catch (err) {
      setError("Failed to generate code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // For live preview, use eval in a sandboxed iframe for safety (here, just a placeholder)
  function LivePreview({ code }) {
    if (!code) return (
      <div className="text-slate-400 text-center">Your UI preview will appear here.</div>
    );

    // Try to extract the JSX from the code string
    let jsx = '';
    // Remove import/export and type lines
    let cleaned = code.replace(/import[^;]+;|export[^;]+;/g, '');
    // Try to extract the return block
    const match = cleaned.match(/return \(([^]*)\);/);
    if (match) {
      jsx = match[1];
    } else {
      // fallback: try to find the first JSX-like block
      const jsxMatch = cleaned.match(/<([\s\S]*)>/);
      if (jsxMatch) jsx = jsxMatch[0];
    }
    if (!jsx) return <div className="text-red-500">Unable to render preview.</div>;

    // Replace className with class, remove JS/TS expressions
    let html = jsx
      .replace(/className=/g, 'class=')
      .replace(/\{[^}]+\}/g, '') // remove curly braces and their content
      .replace(/\<\s*\w+\s*\>/g, m => m.replace(/\s+/, ' '));

    return (
      <div className="preview-area bg-black rounded-lg p-6 min-h-[200px] flex items-center justify-center border border-[var(--neon-blue)] shadow-inner w-full" dangerouslySetInnerHTML={{ __html: html }} />
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-10 font-sans">
      <header className="mb-10 text-center">
        <h1
          className="text-7xl font-extrabold mb-2"
          style={{
            color: 'var(--neon-blue)',
            textShadow: '0 0 16px var(--neon-blue), 0 0 32px var(--neon-blue)',
            letterSpacing: '0.03em',
            fontFamily: 'Pacifico, "Dancing Script", "Comic Sans MS", cursive, sans-serif',
            animation: 'neon-flicker 2.5s infinite alternate',
          }}
        >
          Sketchflow
        </h1>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes neon-flicker {
            0%, 100% { opacity: 1; text-shadow: 0 0 16px var(--neon-blue), 0 0 32px var(--neon-blue); }
            45% { opacity: 0.85; text-shadow: 0 0 8px var(--neon-blue), 0 0 16px var(--neon-blue); }
            50% { opacity: 0.7; text-shadow: 0 0 2px var(--neon-blue); }
            55% { opacity: 0.85; text-shadow: 0 0 8px var(--neon-blue), 0 0 16px var(--neon-blue); }
          }
        `}</style>
        <p className="text-lg pt-4" style={{ color: 'var(--neon-blue)' }}>
          Instantly generate beautiful UI code from your prompt.
        </p>
      </header>
      <form onSubmit={handleGenerate} className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mb-8">
        <input
          className="flex-1 rounded-lg border px-4 py-3 text-lg shadow focus:outline-none focus:ring-2"
          style={{ background: '#18181b', color: 'var(--neon-blue)', borderColor: 'var(--neon-blue)', boxShadow: '0 0 8px var(--neon-blue)' }}
          type="text"
          placeholder="Describe your UI..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          required
        />
        <select
          className="rounded-lg border px-4 py-3 text-lg shadow focus:outline-none focus:ring-2 pr-8"
          style={{ background: '#18181b', color: 'var(--neon-blue)', borderColor: 'var(--neon-blue)', boxShadow: '0 0 8px var(--neon-blue)' }}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="jsx">JSX</option>
          <option value="tsx">TSX</option>
        </select>
        <button
          type="submit"
          className="font-semibold px-8 py-3 rounded-lg shadow transition disabled:opacity-50"
          style={{ background: 'var(--neon-blue)', color: '#000', boxShadow: '0 0 12px var(--neon-blue), 0 0 24px var(--neon-blue)' }}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg p-6 relative" style={{ background: '#18181b', border: '1px solid var(--neon-blue)', boxShadow: '0 0 16px var(--neon-blue)' }}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold" style={{ color: 'var(--neon-blue)' }}>Generated Code</span>
            {code && (
              <button
                className="text-xs px-3 py-1 rounded"
                style={{ background: 'var(--neon-blue)', color: '#000', boxShadow: '0 0 8px var(--neon-blue)' }}
                onClick={() => { navigator.clipboard.writeText(code) }}
              >Copy</button>
            )}
          </div>
          <pre className="overflow-x-auto text-sm leading-relaxed" style={{ color: 'var(--neon-blue)' }}><code>{code || "// Your code will appear here."}</code></pre>
        </div>
        <div className="rounded-lg p-6 flex flex-col" style={{ background: '#18181b', border: '1px solid var(--neon-blue)', boxShadow: '0 0 16px var(--neon-blue)' }}>
          <span className="font-semibold mb-2" style={{ color: 'var(--neon-blue)' }}>Live Preview</span>
          <div className="flex-1 flex items-center justify-center">
            <LivePreview code={code} />
          </div>
        </div>
      </div>
      <footer className="mt-16 text-sm" style={{ color: 'var(--neon-blue)', textShadow: '0 0 8px var(--neon-blue)' }}>Made with <span style={{ color: 'var(--neon-blue)' }}>♥</span> by Sketchflow</footer>
    </div>
  );
}
