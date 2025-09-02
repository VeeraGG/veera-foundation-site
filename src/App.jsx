import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function VeeraWebsiteV3() {
  const [page, setPage] = useState("home");
  const [pollVotes, setPollVotes] = useState(() => {
    const saved = localStorage.getItem("pollVotesV3");
    return saved ? JSON.parse(saved) : {};
  });

  const polls = [
    {
      id: 1,
      q: "What makes someone a true ally?",
      options: ["Listening deeply", "Speaking up against bias", "Sharing responsibilities equally", "Respecting boundaries", "Supporting without judgement", "Other"],
    },
    {
      id: 2,
      q: "Which stereotype about men do you wish would change?",
      options: ["Men shouldn’t cry", "Men must always provide", "Men must be tough and strong", "Men don’t need help", "Men can’t be nurturing", "Other"],
    },
    {
      id: 3,
      q: "What motivates you to stand up for others?",
      options: ["Fairness and justice", "Empathy", "Personal experience", "Community values", "Inspiration from role models", "Other"],
    },
  ];

  const vote = (pollId, option) => {
    const updated = { ...pollVotes, [pollId]: option };
    setPollVotes(updated);
    localStorage.setItem("pollVotesV3", JSON.stringify(updated));
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
        {/* HOME */}
        {page === "home" && (
          <>
            <Section title="Who are we?">
              <p>Veera Foundation is a Mumbai-based non-profit organisation. It aims to perpetuate healthier masculinity for men and allow them to build allyship towards a more equal society. We believe men can nurture meaningful relationships, challenge limiting norms, and walk alongside women and other marginalized communities for a just world. Our work unlocks this potential, making men active partners in building safer, and compassionate spaces for all.</p>
            </Section>

            <Section title="Our Idea">
              <p>At Veera Foundation, we believe masculinity is not to be defended or feared, but to be reimagined. Our work rests on four interconnected ideas:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {["Positive Masculinity", "Allyship", "Shared Responsibility", "Community"].map((idea) => (
                  <Card key={idea} className="shadow-md rounded-2xl hover:shadow-lg transition">
                    <CardContent className="p-4 font-medium">{idea}</CardContent>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Why Masculinity? Why Now?">
              <p className="mb-4"><strong>Why Masculinity:</strong> Masculinity shapes societies. When men adhere to rigidity, it weighs on them and their relationships. But when men are given room to grow with empathy and self-awareness, they unlock their true potential: to nurture, connect, and inspire.</p>
              <p><strong>Why Now:</strong> Because the moment is ripe for change. Gender conversations are more vibrant than ever. But many men find themselves uncertain, unheard, or disconnected. Now is the time to welcome them—to spaces where they listen, learn, and grow; in togetherness.</p>
            </Section>

            <Section title="Polls">
              {polls.map((poll) => (
                <div key={poll.id} className="mb-6">
                  <p className="font-medium mb-2">{poll.q}</p>
                  {poll.options.map((o) => (
                    <Button
                      key={o}
                      variant={pollVotes[poll.id] === o ? "default" : "outline"}
                      className="mr-2 mb-2"
                      onClick={() => vote(poll.id, o)}
                    >
                      {o}
                    </Button>
                  ))}
                </div>
              ))}
            </Section>
          </>
        )}

        {/* ABOUT */}
        {page === "about" && (
          <Section title="Our Story">
            <p className="mb-4">Veera’s journey began with a quiet but powerful insight: the story of gender change has often left men waiting in the wings...</p>
            <p className="mb-4">[Full copy continues here as provided, describing Problem, Solution, Why it matters, Vision, Mission, Approach]</p>
          </Section>
        )}

        {/* OUR DNA */}
        {page === "dna" && (
          <Section title="Our DNA">
            <p className="mb-4">Positive Masculinity: At Veera, we see masculinity as something alive... (full copy as provided)</p>
            <p className="mb-4">Allyship: Allyship is about showing up where it matters... (full copy as provided)</p>
            <h3 className="text-xl font-semibold mt-6">Our Four Pillars</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Courage:</strong> Courage is the choice to be vulnerable, to question old scripts...</li>
              <li><strong>Care:</strong> Care is strength. It shows up in listening deeply...</li>
              <li><strong>Community:</strong> We grow stronger together, not alone...</li>
              <li><strong>Curiosity:</strong> Curiosity is the willingness to learn and unlearn...</li>
            </ul>
          </Section>
        )}

        {/* CONTACT */}
        {page === "contact" && (
          <Section title="Contact Us">
            <form className="space-y-4 max-w-md mx-auto">
              <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
              <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
              <input type="tel" placeholder="Phone Number (optional)" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Organization / Institution" className="w-full border p-2 rounded" required />
              <textarea placeholder="Tell us a little about what you have in mind…" className="w-full border p-2 rounded" rows={4}></textarea>
              <Button type="submit" className="w-full">Send</Button>
            </form>
          </Section>
        )}

        {/* FAQS */}
        {page === "faqs" && (
          <Section title="FAQs">
            {["What does the Veera Foundation do?", "Why focus on men?", "Who does Veera Foundation work with?", "How can organisations partner with Veera?"]
              .map((q) => (
                <details key={q} className="mb-4 border rounded p-2">
                  <summary className="cursor-pointer flex justify-between items-center">{q}<ChevronDown size={16} /></summary>
                  <p className="mt-2 text-gray-700">Answer coming soon.</p>
                </details>
              ))}
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
