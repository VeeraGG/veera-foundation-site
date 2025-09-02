import React, { useState } from "react";

export default function App() {
  const [pollResponses, setPollResponses] = useState({});

  const handlePollChange = (question, value) => {
    setPollResponses({ ...pollResponses, [question]: value });
  };

  return (
    <div className="font-sans text-neutral-900 bg-white">
      {/* HEADER */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Veera Foundation</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#dna" className="hover:text-blue-600">Our DNA</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
          <p className="mb-4">
            Veera Foundation is a Mumbai-based non-profit organisation. It aims to perpetuate healthier masculinity for men and allow them to build allyship towards a more equal society. We believe men can nurture meaningful relationships, challenge limiting norms, and walk alongside women and other marginalized communities for a just world. Our work unlocks this potential, making men active partners in building safer, and compassionate spaces for all.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Idea</h3>
          <p className="mb-4">At Veera Foundation, we believe masculinity is not to be defended or feared, but to be reimagined. Our work rests on four interconnected ideas:</p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="p-4 bg-gray-50 rounded-lg shadow">Positive Masculinity – Strength with empathy. Courage with care.</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">Allyship – Standing with the marginalized, not above them.</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">Shared Responsibility – Gender equality is in everyone's interest.</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">Community – Connection and support help men and society thrive.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Why Masculinity? Why Now?</h3>
          <p className="mb-2">Masculinity shapes societies. When men adhere to rigidity, it weighs on them and their relationships. But when men are given room to grow with empathy and self-awareness, they unlock their true potential: to nurture, connect, and inspire.</p>
          <p>Because the moment is ripe for change. Gender conversations are more vibrant than ever. But many men find themselves uncertain, unheard, or disconnected. Now is the time to welcome them.</p>
        </section>

        {/* POLLS */}
        <section className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">Quick Poll</h3>
          {[
            {
              q: "What makes someone a true ally?",
              name: "ally",
              options: ["Listening deeply","Speaking up against bias","Sharing responsibilities equally","Respecting boundaries","Supporting without judgement","Other"]
            },
            {
              q: "Which stereotype about men do you wish would change?",
              name: "stereotype",
              options: ["Men shouldn’t cry","Men must always provide","Men must be tough and strong","Men don’t need help","Men can’t be nurturing","Other"]
            },
            {
              q: "What motivates you to stand up for others?",
              name: "motivation",
              options: ["Fairness and justice","Empathy","Personal experience","Community values","Inspiration from role models","Other"]
            }
          ].map(({ q, name, options }) => (
            <div key={name} className="mb-6">
              <p className="font-medium mb-2">{q}</p>
              {options.map((opt) => (
                <label key={opt} className="block">
                  <input
                    type="radio"
                    name={name}
                    value={opt}
                    checked={pollResponses[name] === opt}
                    onChange={(e) => handlePollChange(name, e.target.value)}
                  /> {opt}
                </label>
              ))}
            </div>
          ))}
        </section>

        {/* ABOUT US */}
        <section id="about" className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <h3 className="text-2xl font-semibold mb-2">Our Story</h3>
          <h4 className="font-bold mt-4">Origin</h4>
          <p>Veera’s journey began with a quiet but powerful insight: the story of gender change has often left men waiting in the wings...</p>

          <h4 className="font-bold mt-4">Problem</h4>
          <p>The blueprint of masculinity handed down to many men is rigid and heavy...</p>

          <h4 className="font-bold mt-4">Solution</h4>
          <p>At Veera, we see men as part of the solution. We light a path forward...</p>

          <h4 className="font-bold mt-4">Why It Matters</h4>
          <p>Men are more than half of India’s population, yet only 0.3% of gender equality efforts engage them meaningfully...</p>

          <h4 className="font-bold mt-4">Vision</h4>
          <p>We envision a generation of men redefining masculinity through empathy and allyship...</p>

          <h4 className="font-bold mt-4">Mission</h4>
          <p>Veera Foundation places men at the heart of change. We create spaces, tools and experiences that spark curiosity...</p>

          <h4 className="font-bold mt-4">The Veera Approach</h4>
          <ul className="list-disc ml-6">
            <li><strong>Human-centred:</strong> We begin with men’s real lives, experiences, and emotions...</li>
            <li><strong>Behaviour-based:</strong> Lasting change comes from practice, not just intention...</li>
            <li><strong>Community-driven:</strong> No one changes alone...</li>
          </ul>
        </section>

        {/* DNA */}
        <section id="dna" className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Our DNA</h2>
          <h3 className="text-2xl font-semibold mb-4">Positive Masculinity</h3>
          <p>At Veera, we see masculinity as something alive: a way of being that can grow...</p>

          <h3 className="text-2xl font-semibold mt-4">Allyship</h3>
          <p>Allyship is about showing up where it matters...</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Four Pillars</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="p-4 bg-gray-50 rounded-lg shadow">Courage – The choice to be vulnerable...</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">Care – Care is strength. It shows up in listening deeply...</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">Community – We grow stronger together, not alone...</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">Curiosity – The willingness to learn, unlearn, explore...</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input className="border p-2 w-full" placeholder="Full Name" required />
            <input className="border p-2 w-full" placeholder="Email Address" required />
            <input className="border p-2 w-full" placeholder="Phone Number (Optional)" />
            <textarea className="border p-2 w-full" placeholder="Tell us a little about what you have in mind…"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </section>
      </main>

      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-neutral-600">
          Veera Foundation — Reimagining masculinity through empathy and allyship
        </div>
      </footer>
    </div>
  );
}
