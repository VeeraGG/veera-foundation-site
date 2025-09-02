import React, { useState } from "react";
import { motion } from "framer-motion";

// V3 — Single-file React app (drop into src/App.jsx)
// Minimal dependencies: react + framer-motion + Tailwind (assumed present)

export default function VeeraV3() {
  const [route, setRoute] = useState("home");
  const [votes, setVotes] = useState(() => {
    try {
      const raw = localStorage.getItem("veera_v3_votes");
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  });

  const saveVote = (pollId, opt) => {
    const next = { ...votes, [pollId]: opt };
    setVotes(next);
    try { localStorage.setItem("veera_v3_votes", JSON.stringify(next)); } catch (e) {}
  };

  const POLLS = [
    {
      id: "p1",
      q: "What makes someone a true ally?",
      opts: [
        "Listening deeply",
        "Speaking up against bias",
        "Sharing responsibilities equally",
        "Respecting boundaries",
        "Supporting without judgement",
        "Other",
      ],
    },
    {
      id: "p2",
      q: "Which stereotype about men do you wish would change?",
      opts: [
        "Men shouldn’t cry",
        "Men must always provide",
        "Men must be tough and strong",
        "Men don’t need help",
        "Men can’t be nurturing",
        "Other",
      ],
    },
    {
      id: "p3",
      q: "What motivates you to stand up for others?",
      opts: [
        "Fairness and justice",
        "Empathy",
        "Personal experience",
        "Community values",
        "Inspiration from role models",
        "Other",
      ],
    },
  ];

  const Nav = () => (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold">V</div>
          <div>
            <div className="text-sm font-semibold">Veera Foundation</div>
            <div className="text-xs text-neutral-500">Positive masculinity • Allyship</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-2">
          {[
            ["home", "Home"],
            ["about", "About"],
            ["dna", "Our DNA"],
            ["contact", "Contact"],
            ["faqs", "FAQs"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setRoute(id)}
              className={`px-3 py-2 rounded ${route === id ? "font-semibold border-b-2 border-neutral-900" : "text-neutral-600"}`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <select value={route} onChange={(e) => setRoute(e.target.value)} className="border rounded p-1 text-sm">
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="dna">Our DNA</option>
            <option value="contact">Contact</option>
            <option value="faqs">FAQs</option>
          </select>
        </div>
      </div>
    </header>
  );

  const Section = ({ title, children }) => (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="text-neutral-700">{children}</div>
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      <main>
        {route === "home" && (
          <>
            <section className="bg-neutral-50">
              <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <motion.h1 initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold leading-tight">Reimagining masculinity, building allyship</motion.h1>
                  <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.06 }} className="mt-4 text-neutral-700 max-w-xl">
                    Veera Foundation is a Mumbai-based non-profit organisation. It aims to perpetuate healthier masculinity for men and allow them to build allyship towards a more equal society. We believe men can nurture meaningful relationships, challenge limiting norms, and walk alongside women and other marginalized communities for a just world. Our work unlocks this potential, making men active partners in building safer, and compassionate spaces for all.
                  </motion.p>

                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setRoute("about")} className="px-4 py-2 rounded bg-neutral-900 text-white">Explore our approach</button>
                    <button onClick={() => setRoute("contact")} className="px-4 py-2 rounded border">Partner with us</button>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl p-6 border bg-white">
                    <h3 className="text-lg font-semibold mb-2">Our Idea</h3>
                    <p className="text-neutral-700">At Veera Foundation, we believe masculinity is not to be defended or feared, but to be reimagined. Our work rests on four interconnected ideas:</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-lg"> <strong>Positive Masculinity</strong><div className="text-sm text-neutral-600">Strength with empathy. Courage with care. A way of being that lets men live holistic lives.</div></div>
                      <div className="p-3 border rounded-lg"> <strong>Allyship</strong><div className="text-sm text-neutral-600">Standing with the marginalized, not above them. Using privilege to open doors, not block them.</div></div>
                      <div className="p-3 border rounded-lg"> <strong>Shared Responsibility</strong><div className="text-sm text-neutral-600">Gender equality is in everyone's interest. All burdens must be shared.</div></div>
                      <div className="p-3 border rounded-lg"> <strong>Community</strong><div className="text-sm text-neutral-600">Masculinity is not isolation. Connection and support help men and society thrive.</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Section title="Why Masculinity? Why Now?">
              <p><strong>Why Masculinity:</strong> Masculinity shapes societies. When men adhere to rigidity, it weighs on them and their relationships. But when men are given room to grow with empathy and self-awareness, they unlock their true potential: to nurture, connect, and inspire.</p>
              <p className="mt-3"><strong>Why Now:</strong> Because the moment is ripe for change. Gender conversations are more vibrant than ever. But many men find themselves uncertain, unheard, or disconnected. Now is the time to welcome them. To spaces where they listen, learn, and grow; in togetherness.</p>
            </Section>

            <Section title="Polls — Tell us what you think">
              <div className="grid gap-4 md:grid-cols-3">
                {POLLS.map((p) => (
                  <div key={p.id} className="p-4 border rounded-lg">
                    <div className="font-medium mb-3">{p.q}</div>
                    <div className="grid gap-2">
                      {p.opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => saveVote(p.id, o)}
                          className={`text-sm p-2 rounded ${votes[p.id] === o ? "bg-neutral-900 text-white" : "bg-white border"}`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

        {route === "about" && (
          <>
            <Section title="Our Story">
              <p><strong>Origin</strong><br/>Veera’s journey began with a quiet but powerful insight: the story of gender change has often left men waiting in the wings. While women and marginalized groups carried the weight of transformation, men were boxed into roles they didn’t choose: told who they “should” be instead of invited to discover who they could become. Veera was born to rewrite this story, placing men at the center: as spectators, but as builders of a more equal world.</p>

              <div className="mt-6">
                <p><strong>Problem</strong><br/>The blueprint of masculinity handed down to many men is rigid and heavy: it says real men must hide their feelings, bear burdens alone, and lead by control. This blueprint leaves men cut off from themselves and from others, unsure how to step into the movement for equality. Without spaces to pause, reflect, and grow, men’s natural capacities for care and partnership remain dormant, and progress stalls.</p>
              </div>

              <div className="mt-6">
                <p><strong>Solution</strong><br/>At Veera, we see men as part of the solution. We light a path forward: where curiosity opens doors, empathy bridges divides, and self-awareness roots men in their true strength. We create spaces and tools that invite men to journey beyond stereotypes, toward ways of being grounded in presence, not perfection. Here, men grow into open, connected allies standing shoulder to shoulder with women and communities: building safer, more compassionate futures together.</p>
              </div>

              <div className="mt-6">
                <p><strong>Why It Matters (Statistics)</strong><br/>Men are more than half of India’s population, yet only 0.3% of gender equality efforts engage them meaningfully (UNESCO, 2022). Many still carry beliefs that hold back equality: tolerance of violence, isolation and self harm, addiction, ideas of superiority, or that emotions reveal weakness.</p>
                <p className="mt-3">These truths underscore why Veera exists: change flourishes when men are seen, supported, and invited to change.</p>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg"> <strong>Vision</strong><div className="mt-2 text-neutral-700">We envision a generation of men redefining masculinity through empathy and allyship, transforming strength into care and care into meaningful change for themselves and everyone around them.</div></div>
                <div className="p-4 border rounded-lg"> <strong>Mission</strong><div className="mt-2 text-neutral-700">Veera Foundation places men at the heart of change. We create spaces, tools and experiences that spark curiosity, challenge limiting norms, inspire self-growth and foster positive masculinity.</div></div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">The Veera Approach</h3>
                <div className="mt-3 grid md:grid-cols-3 gap-3">
                  <div className="p-3 border rounded-lg"><strong>Human-centred</strong><div className="text-sm text-neutral-600">We begin with men’s real lives, experiences, and emotions. By creating safe spaces for reflection and growth, we invite them to question old patterns and define healthier versions of themselves.</div></div>
                  <div className="p-3 border rounded-lg"><strong>Behaviour-based</strong><div className="text-sm text-neutral-600">Lasting change comes from practice, not just intention. That is why our approach is guided by evidence and behavioural insights.</div></div>
                  <div className="p-3 border rounded-lg"><strong>Community-driven</strong><div className="text-sm text-neutral-600">No one changes alone. We build circles, peer networks, and collective movements so men support one another and act as allies within their communities.</div></div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Partners</h4>
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                  <button className="p-4 border rounded-lg text-left" onClick={()=>alert('Research: Generate evidence-based insights and co-create knowledge products')}> <strong>Research</strong><div className="text-sm text-neutral-600">Academic institutions, research organizations, independent scholars, and think tanks.</div></button>
                  <button className="p-4 border rounded-lg text-left" onClick={()=>alert('Programs: Co-design, pilot and scale community programs')}> <strong>Programs</strong><div className="text-sm text-neutral-600">NGOs, community groups, think tanks and youth-led organisations.</div></button>
                  <button className="p-4 border rounded-lg text-left" onClick={()=>alert('Funding: Fuel scalable and sustainable solutions')}> <strong>Funding</strong><div className="text-sm text-neutral-600">Philanthropies, foundations, CSR arms, and individual changemakers.</div></button>
                  <button className="p-4 border rounded-lg text-left" onClick={()=>alert('Campaigns: Amplify reach through storytelling')}> <strong>Campaigns / Communications</strong><div className="text-sm text-neutral-600">Creative agencies, media houses, influencers, and storytellers.</div></button>
                </div>
              </div>
            </Section>

        {route === "dna" && (
          <Section title="Our DNA">
            <p className="mb-4"><strong>Positive Masculinity</strong><br/>At Veera, we see masculinity as something alive: a way of being that can grow, adapt, and open up over time. Positive masculinity means men knowing themselves better, caring for their own well‑being, and bringing empathy and courage into their relationships. It’s about presence: showing up with clarity, honesty, and care. When men grow in this way, they don’t just feel more connected to themselves, but to the people around them too.</p>

            <p className="mb-4"><strong>Allyship</strong><br/>Allyship is about showing up where it matters. It’s listening, learning, and lending your strength without taking over the room. Think of it as sharing the load: being the person who notices, who steps in, who makes space. At Veera, allyship means men walking beside others with curiosity and dignity: turning everyday moments into acts of care, and care into a culture of belonging.</p>

            <div className="mt-6 grid gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Courage</h4>
                <p className="text-neutral-700 mt-2">Courage is the choice to be vulnerable, to question old scripts, and to act even when it feels uncomfortable. It is speaking with honesty and standing for equity in the moments that matter most.</p>
                <p className="mt-3 text-sm text-neutral-500">Reflection: What does courage look like in your everyday choices?</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Care</h4>
                <p className="text-neutral-700 mt-2">Care is strength. It shows up in listening deeply, practicing empathy, and taking responsibility for the dignity of others. It is the foundation of trust in our relationships and communities.</p>
                <p className="mt-3 text-sm text-neutral-500">Reflection: Who in your life feels the impact of your care?</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Community</h4>
                <p className="text-neutral-700 mt-2">We grow stronger together, not alone. Community gives us connection, accountability, and shared purpose. It reminds us that transformation is a collective journey, not an individual one.</p>
                <p className="mt-3 text-sm text-neutral-500">Reflection: When have you felt the power of belonging?</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Curiosity</h4>
                <p className="text-neutral-700 mt-2">Curiosity is the willingness to learn, to unlearn, to explore, and to remain open to perspectives beyond our own. It is how we discover new ways of being and build relationships rooted in respect.</p>
                <p className="mt-3 text-sm text-neutral-500">Reflection: What is one belief you are ready to question today?</p>
              </div>
            </div>
          </Section>
        )}

        {route === "contact" && (
          <Section title="Contact Us">
            <form className="space-y-4 max-w-md mx-auto" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — we will get back to you soon.')}}>
              <input type="text" placeholder="Full Name (required)" required className="w-full border p-2 rounded" />
              <input type="email" placeholder="Email Address (required)" required className="w-full border p-2 rounded" />
              <input type="tel" placeholder="Phone Number (optional)" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Organization / Institution (required)" required className="w-full border p-2 rounded" />

              <label className="block">I’m reaching out as a…</label>
              <select required className="w-full border p-2 rounded">
                <option value="">Select one</option>
                <option>Individual</option>
                <option>Educator / College/ School</option>
                <option>Corporate Partner</option>
                <option>Non-profit / Community Organization</option>
                <option>Media / Storyteller/ Influencer</option>
                <option>Funder / Supporter</option>
                <option>Other</option>
              </select>

              <div className="grid sm:grid-cols-2 gap-2 mt-3">
                {[
                  'Partner on Programs and Campaigns',
                  'Collaborate on Research',
                  'Volunteer',
                  'Fund / Support',
                  'Media / Storytelling Collaboration',
                  'General Inquiry',
                  'Work at Veera/ Career opportunity'
                ].map(o => (
                  <label key={o} className="flex items-center gap-2 border rounded p-2 text-sm"><input type="checkbox"/>{o}</label>
                ))}
              </div>

              <textarea placeholder="Tell us a little about what you have in mind…" className="w-full border p-2 rounded" rows={4}></textarea>
              <div className="text-sm text-neutral-500">After Submit: “Thank you for reaching out! A member of our team will connect with you soon. Together, we can build a future of empathy, equity, and allyship.”</div>
              <button className="w-full py-2 rounded bg-neutral-900 text-white">Submit</button>
            </form>
            <div className="mt-4 text-sm text-neutral-600">You can write to us at <strong>Info.veera@xx</strong></div>
          </Section>
        )}

        {route === "faqs" && (
          <Section title="FAQs">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
              {[
                {q: 'What does the Veera Foundation do?', a: 'We create spaces and experiences for men to reflect, grow, and practice allyship for a more equal and empathetic society.'},
                {q: 'Why focus on men?', a: 'Because men make up half the world population and play an important role in shaping cultures and relationships. By engaging them, we can unlock meaningful change for everyone.'},
                {q: 'Who does Veera Foundation work with?', a: 'We engage boys and men in schools, colleges, workplaces, and communities, while also working with partners who share our vision.'},
                {q: 'Is Veera Foundation a non-profit?', a: 'Yes, we are a non-profit organisation registered as a Section 8 company under the Companies Act of 2013 (To be confirmed).'},
                {q: 'How can organisations partner with Veera?', a: 'We welcome partnerships with institutions, corporates, and communities. Reach out through our connect form to start a conversation.'},
                {q: 'How can I share my ideas or stories?', a: 'You can use our connect form to reach out — we’d love to hear from you.'},
              ].map(it => (
                <details key={it.q} className="border rounded p-3"><summary className="font-medium cursor-pointer">{it.q}</summary><p className="mt-2 text-neutral-700">{it.a}</p></details>
              ))}
            </div>
          </Section>
        )}
      </main>

      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sm text-neutral-600">
          <div>Veera Foundation — Reimagining masculinity through empathy and allyship</div>
          <div>© {new Date().getFullYear()} Veera Foundation</div>
        </div>
      </footer>
    </div>
  );
}
