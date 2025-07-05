import React, { useState } from "react";

export default function AnounceBar() {
  const [onClose, setOnClose] = useState(true);
  return (
    <>
      {onClose && (
        <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#" className="underline font-medium">
              Sign Up Now
            </a>
          </p>
          <button
            onClick={() => setOnClose(false)}
            className="absolute right-4 top-2 text-white"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
