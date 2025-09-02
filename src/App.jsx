import React, { useState } from "react";
import { motion } from "framer-motion";

export default function VeeraWebsite() {
  const [page, setPage] = useState("home");
  const [pollVotes, setPollVotes] = useState({});

  const polls = [
    { id: 1, q: "What makes someone a true ally?", options: ["Listening deeply", "Speaking up against bias", "Sharing responsibilities equally"] },
    { id: 2, q: "Which stereotype about men do you wish would change?", options: ["Men shouldn’t cry", "Men must always provide", "Men must be tough"] },
    { id: 3, q: "What motivates you to stand up for others?", options: ["Fairness and justice", "Empathy", "Personal experience"] },
    { id: 4, q: "What makes it hardest for men to break stereotypes?", options: ["Family expectations", "Peer pressure", "Fear of judgment"] }
  ];

  const vote = (pollId, option) => {
    setPollVotes(prev => ({ ...prev, [pollId]: option }));
  };

  const NavLink = ({ label, id }) => (
    <button
      className={`px-4 py-2 ${page === id ? "font-bold border-b-2 border-black" : ""}`}
      onClick={() => setPage(id)}
    >
      {label}
    </button>
  );

  const Section = ({ title, children }) => (
    <motion.section className="p-6 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </motion.section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-center space-x-4 py-4 shadow-sm bg-white sticky top-0 z-10">
        <NavLink label="Home" id="home" />
        <NavLink label="About" id="about" />
        <NavLink label="Our DNA" id="dna" />
        <NavLink label="Contact" id="contact" />
        <NavLink label="FAQs" id="faqs" />
      </nav>

      {page === "home" && (
        <>
          <Section title="Who are we?">
            <p>Veera Foundation is a Mumbai-based non-profit organisation focused on reimagining masculinity and building allyship for a more equal society.</p>
          </Section>

          <Section title="Our Idea">
            <p>We believe masculinity is not to be defended or feared, but to be reimagined—so men can connect, nurture and inspire.</p>
          </Section>

          <Section title="Why Masculinity? Why Now?">
            <p>Masculinity shapes society. When given room to grow with empathy, men can unlock their potential to build better relationships and communities.</p>
          </Section>

          <Section title="Four Interconnected Ideas">
            <ul className="list-disc ml-5 space-y-2">
              <li>Positive Masculinity – Strength with empathy</li>
              <li>Allyship – Standing with the marginalized</li>
              <li>Shared Responsibility – Equality is everyone’s job</li>
              <li>Community – Men thrive through connection</li>
            </ul>
          </Section>

          <Section title="Polls">
            {polls.map((poll) => (
              <div key={poll.id} className="mb-6">
                <p className="font-medium mb-2">{poll.q}</p>
                {poll.options.map((o) => (
                  <button
                    key={o}
                    className={`px-3 py-1 mr-2 mb-2 rounded border ${pollVotes[poll.id] === o ? "bg-black text-white" : "bg-white"}`}
                    onClick={() => vote(poll.id, o)}
                  >
                    {o}
                  </button>
                ))}
              </div>
            ))}
          </Section>
        </>
      )}

      {page === "about" && (
        <Section title="About Us">
          <p>Veera’s journey began with a quiet but powerful insight: men have been left waiting in the wings of gender change. We create spaces where men can reflect, grow, and practise allyship.</p>
        </Section>
      )}

      {page === "dna" && (
        <Section title="Our DNA">
          <p>Positive Masculinity and Allyship are at the heart of Veera’s work, guiding everything we do.</p>
        </Section>
      )}

      {page === "contact" && (
        <Section title="Contact Us">
          <form className="space-y-4 max-w-md mx-auto">
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
            <textarea placeholder="Your message" className="w-full border p-2 rounded" rows={4}></textarea>
            <button type="submit" className="w-full bg-black text-white py-2 rounded">Send</button>
          </form>
        </Section>
      )}

      {page === "faqs" && (
        <Section title="FAQs">
          {["What does the Veera Foundation do?", "Why focus on men?", "How can organisations partner with Veera?"].map((q) => (
            <details key={q} className="mb-4 border rounded p-2">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-gray-700">Answer coming soon.</p>
            </details>
          ))}
        </Section>
      )}
    </div>
  );
}
