      <div className="flex-1">
        <motion.h1 initial={{y:6,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.05}} className="text-4xl md:text-5xl font-bold leading-tight" style={{color:COLORS.black}}>
          Veera Foundation: Reimagining masculinity together
        </motion.h1>
        <motion.p initial={{y:6,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.12}} className="mt-4 text-lg text-neutral-700 max-w-2xl">
          Veera Foundation is a Mumbai-based non-profit organisation. It aims to perpetuate healthier masculinity for men and allow them to build allyship towards a more equal society. Our work unlocks men’s potential to nurture relationships, challenge limiting norms, and walk alongside women and marginalized communities for a just world.
        </motion.p>

        <motion.div className="mt-6 flex gap-3" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
          <button onClick={onCTAClick} className="rounded-full px-5 py-2 font-semibold shadow" style={{background:COLORS.red,color:'#fff'}}>Join our work</button>
          <button className="rounded-full px-4 py-2 border font-medium" style={{borderColor:COLORS.darkBlue,color:COLORS.darkBlue}}>Learn more</button>
        </motion.div>

        <div className="mt-6 flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <IconSpark color={COLORS.yellow} />
            <div className="text-sm text-neutral-600">Programs • Research • Community</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const IdeaCard = ({ title, desc, color }) => (
  <motion.div whileHover={{y:-6,scale:1.02}} className="p-5 rounded-2xl shadow-md cursor-pointer" style={{background:color}}>
    <div className="font-semibold text-white">{title}</div>
    <div className="mt-2 text-sm text-white/90">{desc}</div>
  </motion.div>
)

const Poll = ({ poll, onVote, selected }) => (
  <div className="p-4 border rounded-lg">
    <div className="font-medium mb-3">{poll.q}</div>
    <div className="grid gap-2">
      {poll.options.map(o => (
        <button key={o} onClick={()=>onVote(poll.id,o)} className={`text-sm p-2 rounded ${selected===o? 'bg-black text-white' : 'bg-white border'}`}>{o}</button>
      ))}
    </div>
  </div>
)

export default function App() {
  const [page, setPage] = useState('home')
  const [votes, setVotes] = useState({})

  const polls = [
    { id: 1, q: 'What makes someone a true ally?', options: ['Listening deeply','Speaking up against bias','Sharing responsibilities equally','Respecting boundaries','Supporting without judgement','Other'] },
    { id: 2, q: 'Which stereotype about men do you wish would change?', options: ['Men shouldn’t cry','Men must always provide','Men must be tough and strong','Men don’t need help','Men can’t be nurturing','Other'] },
    { id: 3, q: 'What motivates you to stand up for others?', options: ['Fairness and justice','Empathy','Personal experience','Community values','Inspiration from role models','Other'] },
    { id: 4, q: 'What makes it hardest for men to break stereotypes?', options: ['Family expectations','Peer pressure','Cultural norms','Media portrayals','Fear of judgment','Other'] },
    { id: 5, q: 'What’s the biggest barrier for men in becoming allies?', options: ['Fear of being misunderstood','Lack of awareness','Social conditioning','Pressure to “fit in”','Thinking allyship is “not my role”','Other'] },
    { id: 6, q: 'Which quality best represents healthy masculinity to you?', options: ['Empathy','Responsibility','Respect for others','Emotional openness','Courage','Other'] },
    { id: 7, q: 'If masculinity was a movie genre, what would it be?', options: ['Action','Comedy','Drama','Documentary','Sci-Fi'] }
  ]

  function handleVote(id, opt) {
    setVotes(prev=>({ ...prev, [id]: opt }))
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav setPage={setPage} page={page} />
      <main>
        {page === 'home' && (
          <>
            <Banner onCTAClick={()=>setPage('about')} />

            <section className="mx-auto max-w-6xl px-4 py-12">
              <h3 className="text-xl font-semibold mb-4">Our Idea</h3>
              <p className="text-neutral-700 mb-6">At Veera Foundation, we believe masculinity is not to be defended or feared, but to be reimagined. Our work rests on four interconnected ideas:</p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <IdeaCard title="Positive Masculinity" desc="Strength with empathy. Courage with care. A way of being that lets men live holistic lives." color={COLORS.red} />
                <IdeaCard title="Allyship" desc="Standing with the marginalized, not above them. Using privilege to open doors, not block them." color={COLORS.darkGreen} />
                <IdeaCard title="Shared Responsibility" desc="Gender equality is in everyone's interest. All burdens must be shared." color={COLORS.orange} />
                <IdeaCard title="Community" desc="Masculinity is not isolation. Connection and support help men and society thrive." color={COLORS.darkBlue} />
              </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-8 bg-[linear-gradient(90deg,rgba(247,148,51,0.04),rgba(237,51,43,0.02))] rounded-b-2xl">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Why Masculinity? Why Now?</h4>
                  <p className="text-neutral-700"><strong>Why Masculinity:</strong> Masculinity shapes societies. When men adhere to rigidity, it weighs on them and their relationships. But when men grow with empathy and self-awareness, they unlock their true potential: to nurture, connect, and inspire.</p>
                  <p className="mt-3 text-neutral-700"><strong>Why Now:</strong> Because the moment is ripe for change. Gender conversations are more vibrant than ever. Many men find themselves uncertain, unheard, or disconnected. Now is the time to welcome them — to spaces where they listen, learn, and grow in togetherness.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Tell us what you think</h4>
                  <div className="grid gap-3">
                    {polls.map(p => <Poll key={p.id} poll={p} onVote={handleVote} selected={votes[p.id]} />)}
                    <div className="text-sm text-neutral-500">Your responses are local demo values. For live data, these can be hooked to Google Sheets or Airtable.</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {page === 'about' && (
          <section className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Our Story</h3>
                <p className="text-neutral-700 mt-2">
                  Veera’s journey began with a quiet but powerful insight: the story of gender change has often left men waiting in the wings. Veera was born to rewrite this story, placing men at the center as builders of a more equal world.
                </p>

                <h4 className="mt-4 font-semibold">Problem</h4>
                <p className="text-neutral-700 mt-2">
                  The blueprint of masculinity handed down is rigid and heavy: real men must hide feelings, bear burdens alone, and lead by control. Without spaces to reflect and grow, men’s natural capacities for care and partnership remain dormant.
                </p>

                <h4 className="mt-4 font-semibold">Solution</h4>
                <p className="text-neutral-700 mt-2">
                  Veera creates spaces and tools that invite men to journey beyond stereotypes, toward ways of being grounded in presence, not perfection. Here, men grow into open, connected allies.
                </p>
              </div>

              <div>
                <div className="rounded-2xl p-6" style={{background:COLORS.cream}}>
                  <h4 className="font-semibold">Why It Matters (Statistics)</h4>
                  <p className="mt-2 text-neutral-700">Men are more than half of India’s population, yet only <strong>0.3%</strong> of gender equality efforts engage them meaningfully (UNESCO, 2022). Many still carry beliefs that hold back equality.</p>
                  <p className="mt-2 text-neutral-700">Veera exists to ensure men are seen, supported, and invited to change — so that progress benefits everyone.</p>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="p-4 border rounded-lg">Vision: We envision a generation of men redefining masculinity through empathy and allyship, transforming strength into care and care into meaningful change.</div>
                  <div className="p-4 border rounded-lg">Mission: Veera creates spaces, tools, and experiences that spark curiosity, challenge limiting norms, inspire self-growth, and foster positive masculinity.</div>
                </div>
              </div>
            </div>

            <section className="mt-6">
              <h4 className="font-semibold mb-3">Our Partners</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {title:'Research', standup:'Academic institutions, research organizations, think tanks', popup:'Generate evidence-based insights, evaluate impact, and co-create knowledge.'},
                  {title:'Programs', standup:'NGOs, community groups, youth-led organizations', popup:'Co-design, pilot, and scale transformative programs.'},
                  {title:'Funding', standup:'Philanthropies, foundations, CSR
