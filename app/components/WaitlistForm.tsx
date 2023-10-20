"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={sendEmail} className="flex items-center gap-5">
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={handleEmailChange}
        className="block outline-0 border border-olive p-1 text-sm text-clip"
      />
      <button
        type="submit"
        className="block bg-olive px-5 py-2.5 rounded-full hover:scale-105 text-white font-bold"
      >
        Join Waitlist
      </button>
    </form>
  );
}
