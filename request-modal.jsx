const { useState, useEffect } = React;

const EVENT_TYPES = [
  { id: 'birthday', label: 'Birthday', color: 'var(--peach-soft)' },
  { id: 'gender-reveal', label: 'Gender Reveal', color: 'var(--sky-soft)' },
  { id: 'baby-shower', label: 'Baby Shower', color: 'var(--cream)' },
  { id: 'corporate', label: 'Corporate', color: 'var(--cream-deep)' },
  { id: 'wedding', label: 'Wedding', color: 'var(--peach-soft)' },
  { id: 'grand-opening', label: 'Grand Opening', color: 'var(--sky-soft)' },
  { id: 'holiday', label: 'Holiday / Seasonal', color: 'var(--cream)' },
  { id: 'other', label: 'Something else', color: 'var(--cream-deep)' },
];

const BUDGETS = ['Under $250', '$250 – $500', '$500 – $1k', '$1k+'];

const COLORS = [
  { id: 'sky', label: 'Sky Blue', swatch: 'var(--sky)' },
  { id: 'peach', label: 'Peach', swatch: 'var(--peach)' },
  { id: 'cream', label: 'Cream', swatch: 'var(--cream-deep)' },
  { id: 'pink', label: 'Pink', swatch: '#F2B5C0' },
  { id: 'sage', label: 'Sage', swatch: '#B7C9A8' },
  { id: 'navy', label: 'Navy', swatch: '#2B3E5C' },
  { id: 'gold', label: 'Gold', swatch: '#D9B26A' },
  { id: 'open', label: "Chelsea's pick", swatch: 'linear-gradient(135deg, var(--peach), var(--sky))' },
];

function RequestModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    eventType: '',
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    guests: '',
    colors: [],
    budget: '',
    notes: '',
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setStep(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleColor = (id) => {
    setData(d => ({
      ...d,
      colors: d.colors.includes(id) ? d.colors.filter(c => c !== id) : [...d.colors, id],
    }));
  };

  const canAdvance = () => {
    if (step === 0) return !!data.eventType;
    if (step === 1) return data.name && data.email;
    if (step === 2) return data.eventDate && data.location;
    return true;
  };

  const next = () => {
    if (step < totalSteps - 1) setStep(s => s + 1);
    else setStep(totalSteps); // success
  };
  const back = () => setStep(s => Math.max(0, s - 1));

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-head">
          <div>
            <div className="modal-step-label">
              {step >= totalSteps ? 'All Done' : `Step ${step + 1} of ${totalSteps}`}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {step < totalSteps && (
          <div className="modal-progress">
            <div className="modal-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        <div className="modal-body">
          {step === 0 && <Step1 data={data} update={update} />}
          {step === 1 && <Step2 data={data} update={update} />}
          {step === 2 && <Step3 data={data} update={update} />}
          {step === 3 && <Step4 data={data} update={update} toggleColor={toggleColor} />}
          {step >= totalSteps && <SuccessStep data={data} onClose={onClose} />}

          {step < totalSteps && (
            <div className="modal-foot">
              <div className="modal-foot-meta">
                {step === 0 && "We'll respond within 24 hours."}
                {step === 1 && "Your details stay private."}
                {step === 2 && "Approximate is fine — we'll confirm."}
                {step === 3 && "Almost there!"}
              </div>
              <div className="modal-foot-actions">
                {step > 0 && (
                  <button className="btn btn-secondary" onClick={back}>Back</button>
                )}
                <button
                  className="btn btn-primary"
                  onClick={next}
                  disabled={!canAdvance()}
                  style={!canAdvance() ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
                >
                  {step === totalSteps - 1 ? 'Send Request' : 'Continue'}
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Step1({ data, update }) {
  return (
    <div>
      <h3>What are we <em>celebrating?</em></h3>
      <p className="modal-sub">Pick what's closest — we customize every setup, so don't worry if it's not exact.</p>
      <div className="event-options">
        {EVENT_TYPES.map(t => (
          <button
            key={t.id}
            className={`event-option ${data.eventType === t.id ? 'active' : ''}`}
            onClick={() => update('eventType', t.id)}
          >
            <span className="emoji-circ" style={{ background: t.color }}>
              {t.label.charAt(0)}
            </span>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Step2({ data, update }) {
  return (
    <div>
      <h3>Who do we get to <em>work with?</em></h3>
      <p className="modal-sub">So we know who to reach out to with the good news.</p>
      <div className="field">
        <label>Your name</label>
        <input value={data.name} onChange={e => update('name', e.target.value)} placeholder="First & last" />
      </div>
      <div className="field-row">
        <div className="field">
          <label>Email</label>
          <input type="email" value={data.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Phone (optional)</label>
          <input value={data.phone} onChange={e => update('phone', e.target.value)} placeholder="(405) 555-0100" />
        </div>
      </div>
    </div>
  );
}

function Step3({ data, update }) {
  return (
    <div>
      <h3>When and <em>where?</em></h3>
      <p className="modal-sub">We service Oklahoma City and surrounding areas — travel can be arranged for the right event.</p>
      <div className="field-row">
        <div className="field">
          <label>Event date</label>
          <input type="date" value={data.eventDate} onChange={e => update('eventDate', e.target.value)} />
        </div>
        <div className="field">
          <label>Estimated guests</label>
          <select value={data.guests} onChange={e => update('guests', e.target.value)}>
            <option value="">Select...</option>
            <option>Under 25</option>
            <option>25 – 50</option>
            <option>50 – 100</option>
            <option>100 – 250</option>
            <option>250+</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>Venue or address</label>
        <input value={data.location} onChange={e => update('location', e.target.value)} placeholder="Backyard, venue name, etc." />
      </div>
    </div>
  );
}

function Step4({ data, update, toggleColor }) {
  return (
    <div>
      <h3>The <em>vibe</em></h3>
      <p className="modal-sub">Pick any colors you love — leave it open if you want Chelsea to design freely.</p>

      <label style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, display: 'block', marginBottom: 10 }}>Color palette</label>
      <div className="color-row">
        {COLORS.map(c => (
          <button
            key={c.id}
            className={`color-chip ${data.colors.includes(c.id) ? 'active' : ''}`}
            onClick={() => toggleColor(c.id)}
          >
            <span className="swatch" style={{ background: c.swatch }}></span>
            {c.label}
          </button>
        ))}
      </div>

      <label style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, display: 'block', marginTop: 18, marginBottom: 10 }}>Budget range</label>
      <div className="budget-row">
        {BUDGETS.map(b => (
          <button
            key={b}
            className={`budget-pill ${data.budget === b ? 'active' : ''}`}
            onClick={() => update('budget', b)}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="field" style={{ marginTop: 18 }}>
        <label>Anything else we should know?</label>
        <textarea
          value={data.notes}
          onChange={e => update('notes', e.target.value)}
          placeholder="Theme inspiration, must-haves, photos you love..."
        ></textarea>
      </div>
    </div>
  );
}

function SuccessStep({ data, onClose }) {
  return (
    <div className="success-state">
      <div className="success-circ"></div>
      <h3>Request <em>received!</em></h3>
      <p>Thanks {data.name?.split(' ')[0] || 'so much'} — Chelsea will be in touch within 24 hours with a custom proposal for your event.</p>
      <button className="btn btn-primary" onClick={onClose}>Close</button>
    </div>
  );
}

window.RequestModal = RequestModal;
