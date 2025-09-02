import React, { useState } from "react";
import { motion } from "framer-motion";

export default function VeeraWebsite() {
  const [page, setPage] = useState("home");
  const [pollVotes, setPollVotes] = useState({});

  const polls = [
    { id: 1, q: "What makes someone a true ally?", options: ["Listening deeply", "Speaking up against bias", "Sharing responsibilities equally", "Respecting boundaries", "Supporting without judgement", "Other"] },
    { id: 2, q: "Which stereotype about men do you wish would change?", options: ["Men shouldn’t cry", "Men must always provide", "Men must be tough and strong", "Men don’t need help", "Men can’t be nurturing", "Other"] },
    { id: 3, q: "What motivates you to stand up for others?", options: ["Fairness and justice", "Empathy", "Personal experience", "Community values", "Inspiration from role models", "Other"] },
    { id: 4, q: "What makes it hardest for men to break stereotypes?", options: ["Family expectations", "Peer pressure", "Cultural norms", "Media portrayals", "Fear of judgment", "Other"] }
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
      {/* Navigation */}
      <nav className="flex justify-center space-x-4 py-4 shadow-sm bg-white sticky top-0 z-10">
        <NavLink label="Home" id="home" />
        <NavLink label="About" id="about" />
        <NavLink label="Our DNA" id="dna" />
        <NavLink label="Contact" id="contact" />
        <NavLink label="FAQs" id="faqs" />
      </nav>

      {/* HOME */}
      {page === "home" && (
        <>
          <Section title="Our Idea">
            <p className="mb-4">At Veera Foundation, we believe masculinity is not to be defended or feared, but to be reimagined. Our work rests on four interconnected ideas:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border rounded-xl bg-gray-50"><strong>Positive Masculinity:</strong><br/>Strength with empathy. Courage with care. A way of being that lets men live holistic lives.</div>
              <div className="p-4 border rounded-xl bg-gray-50"><strong>Allyship:</strong><br/>Standing with the marginalized, not above them. Using privilege to open doors, not block them.</div>
              <div className="p-4 border rounded-xl bg-gray-50"><strong>Shared Responsibility:</strong><br/>Gender equality is in everyone's interest. All burdens must be shared.</div>
              <div className="p-4 border rounded-xl bg-gray-50"><strong>Community:</strong><br/>Masculinity is not isolation. Connection and support help men and society thrive.</div>
            </div>
          </Section>

          <Section title="Why Masculinity? Why Now?">
            <p className="mb-2"><strong>Why Masculinity:</strong> Masculinity shapes societies. When men adhere to rigidity, it weighs on them and their relationships. But when men are given room to grow with empathy and self-awareness, they unlock their true potential: to nurture, connect, and inspire.</p>
            <p><strong>Why Now:</strong> Because the moment is ripe for change. Gender conversations are more vibrant than ever. But many men find themselves uncertain, unheard, or disconnected. Now is the time to welcome them — to spaces where they listen, learn, and grow; in togetherness.</p>
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

      {/* ABOUT */}
      {page === "about" && (
        <Section title="About Us">
          <p className="mb-4">Veera’s journey began with a quiet but powerful insight: the story of gender change has often left men waiting in the wings. We place men at the centre — not just spectators, but builders of a more equal world.</p>
          <p className="mb-4">We light a path forward: where curiosity opens doors, empathy bridges divides, and self-awareness roots men in their true strength.</p>
          <p>Vision: We envision a generation of men redefining masculinity through empathy and allyship, transforming strength into care and care into meaningful change for everyone around them.</p>
        </Section>
      )}

      {/* OUR DNA */}
      {page === "dna" && (
        <Section title="Our DNA">
          <p className="mb-4"><strong>Positive Masculinity:</strong> Men knowing themselves better, caring for their own well-being, and bringing empathy and courage into their relationships.</p>
          <p><strong>Allyship:</strong> Showing up where it matters — listening, learning, lending strength without taking over the room.</p>
        </Section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <Section title="Contact Us">
          <form className="space-y-4 max-w-md mx-auto">
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Organization / Institution" className="w-full border p-2 rounded" required />
            <textarea placeholder="Tell us a little about what you have in mind…" className="w-full border p-2 rounded" rows={4}></textarea>
            <button type="submit" className="w-full bg-black text-white py-2 rounded">Send</button>
          </form>
        </Section>
      )}

      {/* FAQS */}
      {page === "faqs" && (
        <Section title="FAQs">
          {["What does the Veera Foundation do?", "Why focus on men?", "Who does Veera work with?", "How can organisations partner with Veera?"]
            .map((q) => (
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
