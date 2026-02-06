import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => {
          console.log("Service worker registered successfully");
        })
        .catch(error => {
          console.error("Service worker registration failed:", error);
        });
    }
  }, []);

  return (
    <main>
      <h1>Offline M-Pesa PWA</h1>
      <p>
        This application is designed to work reliably in low or unstable
        network conditions.
      </p>
    </main>
  );
}
