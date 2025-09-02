{page === 'connect' && (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-semibold mb-4">Connect with Veera</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
          <input type="tel" placeholder="Phone Number (optional)" className="w-full border p-2 rounded" />

          <input type="text" placeholder="Organization / Institution" className="w-full border p-2 rounded" required />

          <select className="w-full border p-2 rounded">
            <option>Individual</option>
            <option>Educator / College / School</option>
            <option>Corporate Partner</option>
            <option>Non-profit / Community Organization</option>
            <option>Media / Storyteller/ Influencer</option>
            <option>Funder / Supporter</option>
            <option>Other</option>
          </select>

          <div className="grid sm:grid-cols-2 gap-2">
            {['Partner on Programs and Campaigns','Collaborate on Research','Volunteer','Fund / Support','Media / Storytelling Collaboration','General Inquiry','Work at Veera/ Career opportunity'].map(o=> (
              <label key={o} className="flex items-center gap-2 border rounded p-2 text-sm">
                <input type="checkbox" /> {o}
              </label>
            ))}
          </div>

          <textarea placeholder="Tell us a little about what you have in mind…" rows={4} className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="w-full py-2 rounded" style={{background:COLORS.darkGreen,color:'#fff'}}>Send message</button>
        </form>

        <div className="mt-4 text-sm text-neutral-600">You can also write to us at <strong>Info.veera@xx</strong></div>
      </div>
    </div>
  </section>
)}

{page === 'faqs' && (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        {q:'What does the Veera Foundation do?', a:'We create spaces and experiences for men to reflect, grow, and practice allyship.'},
        {q:'Why focus on men?', a:'Men make up half the population — engaging them unlocks meaningful change for everyone.'},
        {q:'Who does Veera work with?', a:'We engage boys and men in schools, colleges, workplaces, and communities.'},
        {q:'How can organisations partner with Veera?', a:'Reach out through our contact form to start a conversation.'}
      ].map(it=> (
        <details key={it.q} className="rounded border p-3">
          <summary className="font-medium cursor-pointer">{it.q}</summary>
          <p className="mt-2 text-neutral-700">{it.a}</p>
        </details>
      ))}
    </div>
  </section>
)}
