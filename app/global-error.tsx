"use client"

import { useEffect } from "react"

/**
 * Global error boundary — captures the full error (including digest)
 * so production failures can be diagnosed from the UI.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to server console for Render log capture
    console.error("[GlobalError]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack?.slice(0, 2000),
    })
  }, [error])

  return (
    <html>
      <body style={{ background: "#0a0a0a", color: "#fff", padding: 24, fontFamily: "monospace" }}>
        <h2>Something went wrong</h2>
        <p style={{ color: "#f87171" }}>{error.message}</p>
        {error.digest ? (
          <p style={{ color: "#fbbf24" }}>Digest: {error.digest}</p>
        ) : null}
        <details style={{ marginTop: 16, whiteSpace: "pre-wrap", fontSize: 12 }}>
          <summary>Stack trace</summary>
          {error.stack}
        </details>
        <button
          onClick={reset}
          style={{
            marginTop: 16,
            padding: "8px 16px",
            background: "#3b82f6",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
