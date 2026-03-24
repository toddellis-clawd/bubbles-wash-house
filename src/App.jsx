import { useState, useEffect } from 'react'

/* ─── tiny bubble animation component ─── */
function Bubble({ style }) {
  return (
    <div
      className="absolute rounded-full bg-white/10 animate-float pointer-events-none"
      style={style}
    />
  )
}

function FloatingBubbles() {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    width: Math.random() * 40 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 10,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <Bubble
          key={i}
          style={{
            width: b.width,
            height: b.width,
            left: `${b.left}%`,
            bottom: '-10%',
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ─── nav ─── */
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    ['Services', '#services'],
    ['Locations', '#locations'],
    ['Pricing', '#pricing'],
    ['About', '#about'],
    ['Reviews', '#reviews'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bubble-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bubble-blue to-bubble-accent flex items-center justify-center">
              <span className="text-white font-black text-lg">B</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block">Bubbles</span>
              <span className="text-bubble-accent text-xs tracking-wider">WASH HOUSE</span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-white/80 hover:text-bubble-accent transition-colors text-sm font-medium">{label}</a>
            ))}
            <a href="#contact" className="bg-bubble-blue hover:bg-bubble-accent text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              Get Directions
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-white/80 hover:text-bubble-accent transition-colors text-sm font-medium">{label}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

/* ─── hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-bubble-dark via-bubble-navy to-bubble-dark overflow-hidden">
      <FloatingBubbles />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="text-bubble-accent font-semibold tracking-wider uppercase text-sm mb-4">Huntsville's Favorite Laundromat</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Clean Clothes,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bubble-blue to-bubble-accent">Happy Life.</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed">
            Two locations in Huntsville, TX. Brand-new Speed Queen machines, wash-dry-fold service at just $1/lb, and easy payment by app, card, cash, or coin.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#locations" className="bg-bubble-blue hover:bg-bubble-accent text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-bubble-blue/30 text-sm sm:text-base">
              Find a Location →
            </a>
            <a href="#services" className="border border-white/20 hover:border-bubble-accent text-white px-8 py-3.5 rounded-full font-semibold transition-all text-sm sm:text-base">
              Our Services
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-12 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-bubble-accent text-lg">✓</span> Speed Queen Machines
            </div>
            <div className="flex items-center gap-2">
              <span className="text-bubble-accent text-lg">✓</span> Pay by App, Card, or Cash
            </div>
            <div className="flex items-center gap-2">
              <span className="text-bubble-accent text-lg">✓</span> Wash-Dry-Fold $1/lb
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── services ─── */
function Services() {
  const services = [
    {
      icon: '🫧',
      title: 'Self-Service Laundry',
      desc: 'Brand-new Speed Queen commercial touch-screen washers (20–80 lb) and dryers (30–75 lb). Clean, modern, and efficient — your clothes are done faster with less soap.',
    },
    {
      icon: '👕',
      title: 'Wash, Dry & Fold',
      desc: 'Drop off your laundry and let us handle everything. Just $1 per pound for clothing. Other items priced separately. Same-day or next-day turnaround.',
    },
    {
      icon: '📱',
      title: 'Easy Payment',
      desc: 'Pay your way — Speed Queen app, credit/debit card, cash, or coin. No more scrambling for quarters. Our app even lets you start machines from your phone.',
    },
    {
      icon: '🏠',
      title: 'Clean Environment',
      desc: 'We take pride in keeping our facilities spotless. Modern equipment, bright lighting, comfortable seating, and a family-friendly atmosphere at both locations.',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bubble-blue font-semibold tracking-wider uppercase text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Our Services</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Everything you need for fresh, clean laundry — whether you do it yourself or let us handle it for you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bubble-blue transition-colors">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── locations ─── */
function Locations() {
  const locations = [
    {
      name: 'Bubbles Wash House — Hwy 75',
      address: '351 State Highway 75 North',
      city: 'Huntsville, TX 77320',
      phone: '(936) 439-4025',
      hours: 'Mon–Sun: 8:00 AM – 8:00 PM',
      lastLoad: 'Last load at 7:00 PM',
      opened: 'Grand Opened March 2025',
      mapUrl: 'https://maps.google.com/?q=351+State+Highway+75+N+Huntsville+TX+77320',
      features: ['Newest location', 'Highway visibility', 'Easy parking'],
    },
    {
      name: 'Bubbles Wash House — Lake Road',
      address: '2505 Lake Road, Suite B',
      city: 'Huntsville, TX 77340',
      phone: '(936) 295-5603',
      hours: 'Mon–Sun: 7:00 AM – 12:00 AM',
      lastLoad: 'Last load at 11:00 PM',
      opened: 'Opened March 2023',
      mapUrl: 'https://maps.google.com/?q=2505+Lake+Rd+Huntsville+TX+77340',
      features: ['Extended hours', 'Near SHSU', 'Open until midnight'],
    },
  ]

  return (
    <section id="locations" className="py-20 sm:py-28 bg-gradient-to-br from-bubble-dark to-bubble-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bubble-accent font-semibold tracking-wider uppercase text-sm mb-2">Find Us</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Two Convenient Locations</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">Both locations feature brand-new Speed Queen commercial equipment and a clean, welcoming environment.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-bubble-accent/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-1">{loc.name}</h3>
              <p className="text-bubble-accent text-sm font-medium mb-6">{loc.opened}</p>

              <div className="space-y-4 text-white/80 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-bubble-accent mt-0.5">📍</span>
                  <div>
                    <p>{loc.address}</p>
                    <p>{loc.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-bubble-accent">📞</span>
                  <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="hover:text-bubble-accent transition-colors">{loc.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-bubble-accent mt-0.5">🕐</span>
                  <div>
                    <p className="font-semibold text-white">{loc.hours}</p>
                    <p className="text-white/50">{loc.lastLoad}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {loc.features.map((f, j) => (
                  <span key={j} className="text-xs bg-bubble-blue/20 text-bubble-accent px-3 py-1 rounded-full">{f}</span>
                ))}
              </div>

              <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-bubble-blue hover:bg-bubble-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bubble-blue font-semibold tracking-wider uppercase text-sm mb-2">Simple & Affordable</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Pricing</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Transparent pricing with no hidden fees. Pay by app, card, cash, or coin.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Self Service */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-transparent hover:border-bubble-blue/20 transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Self-Service</h3>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 uppercase text-sm tracking-wider">Washers</h4>
              {[
                ['20 lb Washer', 'Small loads, everyday items'],
                ['40 lb Washer', 'Medium loads, family laundry'],
                ['60 lb Washer', 'Large loads, bedding & towels'],
                ['80 lb Washer', 'Extra-large loads, comforters & bulk items'],
              ].map(([name, desc], i) => (
                <div key={i} className="flex justify-between items-start pb-3 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">{name}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}

              <h4 className="font-semibold text-gray-700 uppercase text-sm tracking-wider pt-4">Dryers</h4>
              {[
                ['30 lb Dryer', 'Standard loads'],
                ['45 lb Dryer', 'Medium to large loads'],
                ['75 lb Dryer', 'Bulk items & comforters'],
              ].map(([name, desc], i) => (
                <div key={i} className="flex justify-between items-start pb-3 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">{name}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-gray-500 text-sm italic pt-2">Exact pricing displayed on each machine. Pay via Speed Queen app, card, cash, or coin.</p>
            </div>
          </div>

          {/* WDF */}
          <div className="bg-gradient-to-br from-bubble-dark to-bubble-navy rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-bubble-accent text-bubble-dark text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Wash, Dry & Fold</h3>
            <p className="text-white/60 mb-6">Let us do the work for you!</p>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">$1</span>
                <span className="text-white/60 text-lg">/pound</span>
              </div>
              <p className="text-white/50 text-sm mt-1">For clothing items</p>
            </div>

            <div className="space-y-3 text-white/80 text-sm">
              {[
                'Drop off your dirty laundry',
                'We wash, dry, and neatly fold everything',
                'Special items priced separately',
                'Same-day or next-day turnaround',
                'Perfect for busy students & families',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-bubble-accent">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-8 inline-block bg-bubble-accent hover:bg-white text-bubble-dark px-8 py-3 rounded-full font-semibold transition-colors text-sm">
              Drop Off Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── why us ─── */
function WhyUs() {
  const reasons = [
    { icon: '⚡', title: 'Brand-New Machines', desc: 'Speed Queen commercial touch-screen washers & dryers — the industry gold standard. Faster cycles, cleaner clothes, less soap needed.' },
    { icon: '💳', title: 'Pay Your Way', desc: 'Speed Queen app, credit/debit card, cash, or coin. No more scrambling for quarters — we accept it all.' },
    { icon: '🧺', title: 'Up to 80 lbs', desc: 'Our largest washers handle 80 lbs in a single load. Comforters, bulk bedding, and large family loads — done in one wash.' },
    { icon: '🌙', title: 'Open Late', desc: 'Lake Road location open 7 AM to midnight, 7 days a week. Late-night laundry runs welcome.' },
    { icon: '👨‍👩‍👧', title: 'Family-Owned', desc: 'We\'re a family business that treats every customer like family. Friendly service, clean spaces, and genuine care.' },
    { icon: '🙏', title: 'Community First', desc: '"For the glory of God" — we\'re committed to serving the Huntsville community with integrity and kindness.' },
  ]

  return (
    <section className="py-20 sm:py-28 bg-bubble-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bubble-blue font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">What Makes Bubbles Different</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── about ─── */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-bubble-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">About Bubbles Wash House</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Bubbles Wash House is a family-owned business with two locations right here in Huntsville, Texas.
                We started with a simple mission: provide the cleanest facilities, the friendliest service, and the
                most modern equipment in town.
              </p>
              <p>
                Our first location on Lake Road opened in March 2023, and the response from the Huntsville community
                was incredible. In March 2025, we opened our second location on Highway 75 North to serve even more
                families, students, and neighbors.
              </p>
              <p>
                Every machine in our facilities is a brand-new Speed Queen commercial washer or dryer — the same brand
                trusted by professional laundries worldwide. We invested in the best equipment because you deserve the
                best results.
              </p>
              <p className="font-medium text-gray-900 italic">
                "For the glory of God" — we believe in serving our community with integrity, kindness, and excellence
                in everything we do.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-bubble-dark to-bubble-navy rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-8">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                ['2', 'Huntsville Locations'],
                ['7', 'Days a Week'],
                ['80 lb', 'Max Washer Capacity'],
                ['$1/lb', 'Wash-Dry-Fold'],
              ].map(([num, label], i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-bubble-accent">{num}</div>
                  <div className="text-white/60 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <h4 className="font-semibold mb-3">Payment Methods</h4>
              <div className="flex flex-wrap gap-3">
                {['Speed Queen App', 'Credit Card', 'Debit Card', 'Cash', 'Coin'].map((m, i) => (
                  <span key={i} className="text-xs bg-white/10 px-3 py-1.5 rounded-full">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── reviews ─── */
function Reviews() {
  const reviews = [
    {
      name: 'Cassidy N.',
      text: 'Wonderful place to go wash your clothes. The machines are new, efficient and always clean. It only takes half of the soap I usually put in! They have an app that is easy to use and convenient if you have cash or card. They even have a machine that washes 8 in one!!',
      rating: 5,
    },
    {
      name: 'Happy Customer',
      text: 'Thank you to the guys who opened this laundromat. You are very welcoming and helpful when my family and I come to wash our clothes. Definitely recommend going here for quick and efficient laundry.',
      rating: 5,
    },
    {
      name: 'Local Resident',
      text: 'Clean, modern, and the staff is always friendly. The Speed Queen machines are so much better than the old coin-ops around town. Love that I can pay with my phone!',
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-gradient-to-br from-bubble-dark to-bubble-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bubble-accent font-semibold tracking-wider uppercase text-sm mb-2">What Our Customers Say</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Customer Reviews</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }, (_, j) => (
                  <span key={j} className="text-bubble-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed text-sm mb-6">"{r.text}"</p>
              <p className="text-white font-semibold text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.google.com/search?q=Bubbles+Wash+House+Huntsville+TX+reviews" target="_blank" rel="noopener noreferrer"
            className="text-bubble-accent hover:text-white transition-colors text-sm font-medium">
            Read more reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ (SEO rich) ─── */
function FAQ() {
  const faqs = [
    {
      q: 'What are your hours?',
      a: 'Our Hwy 75 location is open Monday–Sunday, 8:00 AM to 8:00 PM (last load at 7:00 PM). Our Lake Road location is open Monday–Sunday, 7:00 AM to 12:00 AM midnight (last load at 11:00 PM).',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept the Speed Queen app, credit cards, debit cards, cash, and coins. You can even start your machine from your phone using the Speed Queen app!',
    },
    {
      q: 'How much does wash-dry-fold cost?',
      a: 'Our wash-dry-fold service is just $1 per pound for clothing. Other items (comforters, special fabrics, etc.) are priced separately. Drop off your laundry and we\'ll take care of everything!',
    },
    {
      q: 'What size washers and dryers do you have?',
      a: 'We have Speed Queen commercial washers in 20 lb, 40 lb, 60 lb, and 80 lb capacities. Our dryers come in 30 lb, 45 lb, and 75 lb capacities. The 80 lb washer can handle even the largest comforters and bulk loads.',
    },
    {
      q: 'Do you offer wash-dry-fold for SHSU students?',
      a: 'Absolutely! Many SHSU students use our wash-dry-fold service. Just drop off your laundry at either location and we\'ll wash, dry, and fold everything for you at $1/lb. It\'s the easiest way to handle laundry during the school year.',
    },
    {
      q: 'Which location is closest to Sam Houston State University?',
      a: 'Our Lake Road location (2505 Lake Road, Suite B) is the closest to SHSU campus and is open until midnight — perfect for late-night laundry runs.',
    },
  ]

  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bubble-blue font-semibold tracking-wider uppercase text-sm mb-2">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span className={`text-bubble-blue transition-transform ${openIdx === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-bubble-blue to-bubble-accent relative overflow-hidden">
      <FloatingBubbles />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready for Fresh, Clean Laundry?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Visit either Bubbles Wash House location today. Self-service or drop off for wash-dry-fold — we've got you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://maps.google.com/?q=351+State+Highway+75+N+Huntsville+TX+77320" target="_blank" rel="noopener noreferrer"
            className="bg-white text-bubble-blue hover:bg-gray-100 px-8 py-3.5 rounded-full font-semibold transition-colors text-sm">
            📍 Hwy 75 Location
          </a>
          <a href="https://maps.google.com/?q=2505+Lake+Rd+Huntsville+TX+77340" target="_blank" rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3.5 rounded-full font-semibold transition-colors border border-white/30 text-sm">
            📍 Lake Road Location
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── contact / footer ─── */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-bubble-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bubble-blue to-bubble-accent flex items-center justify-center">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg block leading-tight">Bubbles</span>
                <span className="text-bubble-accent text-xs tracking-wider">WASH HOUSE</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Family-owned laundromat serving the Huntsville, Texas community with clean facilities,
              modern equipment, and friendly service.
            </p>
            <p className="text-white/40 text-sm italic">"For the glory of God"</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Hwy 75 Location</h3>
            <div className="space-y-3 text-white/60 text-sm">
              <p>351 State Highway 75 North</p>
              <p>Huntsville, TX 77320</p>
              <p><a href="tel:9364394025" className="hover:text-bubble-accent transition-colors">(936) 439-4025</a></p>
              <p>Mon–Sun: 8 AM – 8 PM</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Lake Road Location</h3>
            <div className="space-y-3 text-white/60 text-sm">
              <p>2505 Lake Road, Suite B</p>
              <p>Huntsville, TX 77340</p>
              <p><a href="tel:9362955603" className="hover:text-bubble-accent transition-colors">(936) 295-5603</a></p>
              <p>Mon–Sun: 7 AM – Midnight</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Bubbles Wash House. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/bubbleswashhouselaundries/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-bubble-accent transition-colors text-sm">Facebook</a>
            <a href="https://www.yelp.com/biz/bubbles-wash-house-2-huntsville" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-bubble-accent transition-colors text-sm">Yelp</a>
            <a href="https://www.google.com/maps/search/Bubbles+Wash+House+Huntsville+TX" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-bubble-accent transition-colors text-sm">Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── APP ─── */
export default function App() {
  return (
    <div className="font-sans">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
      <Nav />
      <Hero />
      <Services />
      <Locations />
      <Pricing />
      <WhyUs />
      <About />
      <Reviews />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  )
}
