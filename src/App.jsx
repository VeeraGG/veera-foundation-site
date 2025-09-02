import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function VeeraWebsiteV3() {
  const [page, setPage] = useState("home");
  const [pollVotes, setPollVotes] = useState(() => {
    const saved = localStorage.getItem("pollVotes");
    return saved ? JSON.parse(saved) : {};
  });

  const polls = [
    {
      id: 1,
      q: "What makes someone a true ally?",
      options: [
        "Listening deeply",
        "Speaking up against bias",
        "Sharing responsibilities equally",
        "Respecting boundaries",
        "Supporting without judgement",
        "Other"
      ]
    },
    {
      id: 2,
      q: "Which stereotype about men do you wish would change?",
      options: [
        "Men shouldn’t cry",
        "Men must always provide",
        "Men must be tough and strong",
        "Men don’t need help",
        "Men can’t be nurturing",
        "Other"
      ]
    },
    {
      id: 3,
      q: "What motivates you to stand up for others?",
      options: [
        "Fairness and justice",
        "Empathy",
        "Personal experience",
        "Community values",
        "Inspiration from role models",
        "Other"
      ]
    }
  ];

  const vote = (pollId, option) => {
    const updated = { ...pollVotes, [pollId]: option };
    setPollVotes(updated);
    localStorage.setItem("pollVotes", JSON.stringify(updated));
  };

  const NavLink = ({ label, id }) => (
    <button
      className={`px-4 py-2 ${
        page === id ? "font-bold border-b-2 border-black" : "text-gray-600"
      }`}
      onClick={() => setPage(id)}
    >
      {label}
    </button>
  );

  const Section = ({ title, children }) => (
    <motion.section
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </motion.section>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex justify-center space-x-4 py-4 shadow-sm bg-white sticky top-0 z-10">
        <NavLink label="Home" id="home" />
        <NavLink label="About" id="about" />
        <NavLink label="Our DNA" id="dna" />
        <NavLink label="Contact" id="contact" />
        <NavLink label="FAQs" id="faqs" />
      </nav>

      <main className="flex-1">
        {page === "home" && (
          <>
            <Section title="Who are we?">
              <p>
                Veera Foundation is a Mumbai-based non-profit organisation. It aims to perpetuate
                healthier masculinity for men and allow them to build allyship towards a more equal
                society. We believe men can nurture meaningful relationships, challenge limiting norms,
                and walk alongside women and other marginalized communities for a just world. Our work
                unlocks this potential, making men active partners in building safer, compassionate
                spaces for all.
              </p>
            </Section>

            <Section title="Our Idea">
              <p>
                At Veera Foundation, we believe masculinity is not to be defended or feared, but to be
                reimagined. Our work rests on four interconnected ideas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {["Positive Masculinity", "Allyship", "Shared Responsibility", "Community"].map(
                  (idea) => (
                    <div key={idea} className="border rounded-xl p-4 shadow-sm bg-gray-50">
                      {idea}
                    </div>
                  )
                )}
              </div>
            </Section>

            <Section title="Why Masculinity? Why Now?">
              <p className="mb-2">
                <strong>Why Masculinity:</strong> Masculinity shapes societies. When men adhere to
                rigidity, it weighs on them and their relationships. But when men are given room to
                grow with empathy and self-awareness, they unlock their true potential: to nurture,
                connect, and inspire.
              </p>
              <p>
                <strong>Why Now:</strong> Because the moment is ripe for change. Gender conversations
                are more vibrant than ever. But many men find themselves uncertain, unheard, or
                disconnected. Now is the time to welcome them into spaces where they listen, learn,
                and grow — together.
              </p>
            </Section>

            <Section title="Polls">
              {polls.map((poll) => (
                <div key={poll.id} className="mb-6">
                  <p className="font-medium mb-2">{poll.q}</p>
                  {poll.options.map((o) => (
                    <button
                      key={o}
                      className={`px-3 py-1 rounded border mr-2 mb-2 ${
                        pollVotes[poll.id] === o ? "bg-black text-white" : "bg-white"
                      }`}
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
            <p className="mb-4">
              Veera’s journey began with a quiet but powerful insight: the story of gender change has
              often left men waiting in the wings. While women and marginalized groups carried the
              weight of transformation, men were boxed into roles they didn’t choose. Veera was born
              to rewrite this story, placing men at the center as builders of a more equal world.
            </p>
            <p className="mb-4">
              The blueprint of masculinity handed down to many men is rigid and heavy: it says real
              men must hide their feelings, bear burdens alone, and lead by control. This blueprint
              leaves men cut off from themselves and from others, unsure how to step into the
              movement for equality.
            </p>
            <p>
              At Veera, we see men as part of the solution. We create spaces and tools that invite men
              to grow beyond stereotypes — toward ways of being grounded in presence, not perfection.
            </p>
          </Section>
        )}

        {page === "dna" && (
          <Section title="Our DNA">
            <p className="mb-4">
              Positive masculinity means men knowing themselves better, caring for their own
              well-being, and bringing empathy and courage into their relationships.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Courage:</strong> Choosing to be vulnerable and speak for equity.</li>
              <li><strong>Care:</strong> Listening deeply, practicing empathy, and building trust.</li>
              <li><strong>Community:</strong> Finding connection and shared purpose.</li>
              <li><strong>Curiosity:</strong> Staying open to learning and unlearning.</li>
            </ul>
          </Section>
        )}

        {page === "contact" && (
          <Section title="Contact Us">
            <form className="space-y-4 max-w-md mx-auto">
              <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
              <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
              <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows={4}></textarea>
              <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
                Send
              </button>
            </form>
          </Section>
        )}

        {page === "faqs" && (
          <Section title="FAQs">
            {["What does Veera Foundation do?", "Why focus on men?", "How can I partner with Veera?"].map(
              (q) => (
                <details key={q} className="mb-4 border rounded p-2">
                  <summary className="cursor-pointer flex justify-between items-center">
                    {q}
                    <ChevronDown size={16} />
                  </summary>
                  <p className="mt-2 text-gray-700">Answer coming soon.</p>
                </details>
              )
            )}
          </Section>
        )}
      </main>

      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sm text-neutral-600">
          <div>Veera Foundation — Reimagining masculinity through empathy and allyship</div>
        </div>
      </footer>
    </div>
  );
}
