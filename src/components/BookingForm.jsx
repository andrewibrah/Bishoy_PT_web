import { useState } from 'react';
import { generateConfirmationNumber, submitBookingToN8n } from '../hooks/useBooking.js';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-white/80">{label}</span>
      {children}
    </label>
  );
}

function Success({ confirmationNumber }) {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-200">
      <h3 className="text-xl font-semibold">Booking Received</h3>
      <p className="mt-2 text-emerald-100/80">
        Your confirmation number is <span className="font-mono font-semibold">{confirmationNumber}</span>. A confirmation
        email and invoice will arrive shortly.
      </p>
    </div>
  );
}

function BookingForm() {
  const [values, setValues] = useState({
    customer_name: '',
    email: '',
    phone: '',
    service_date: '',
    duration_hours: '1.0',
    address: '',
    payment_method: 'online',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const confirmation_number = generateConfirmationNumber();
      const booking_date = new Date().toISOString();
      const payload = { ...values, confirmation_number, booking_date };
      await submitBookingToN8n(payload);
      setConfirmation(confirmation_number);
    } catch (err) {
      setError(err.message || 'Failed to submit booking');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-slate-950 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-2xl font-bold text-white">Request an Evaluation</h2>
        <p className="mt-2 text-white/70">Submit the form to receive confirmation and next steps.</p>

        {confirmation ? (
          <div className="mt-6">
            <Success confirmationNumber={confirmation} />
          </div>
        ) : (
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <Field label="Full name">
              <input
                name="customer_name"
                value={values.customer_name}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white placeholder-white/40 focus:border-cyan-400/60 focus:outline-none"
                placeholder="Jane Athlete"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white placeholder-white/40 focus:border-cyan-400/60 focus:outline-none"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone">
                <input
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white placeholder-white/40 focus:border-cyan-400/60 focus:outline-none"
                  placeholder="(555) 555-5555"
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Preferred date/time">
                <input
                  type="datetime-local"
                  name="service_date"
                  value={values.service_date}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white placeholder-white/40 focus:border-cyan-400/60 focus:outline-none"
                />
              </Field>
              <Field label="Duration">
                <select
                  name="duration_hours"
                  value={values.duration_hours}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white focus:border-cyan-400/60 focus:outline-none"
                >
                  <option value="1.0">60 minutes</option>
                  <option value="1.5">90 minutes</option>
                </select>
              </Field>
            </div>
            <Field label="Training location / address">
              <input
                name="address"
                value={values.address}
                onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white placeholder-white/40 focus:border-cyan-400/60 focus:outline-none"
                placeholder="Gym name or address"
              />
            </Field>
            <Field label="Payment method">
              <select
                name="payment_method"
                value={values.payment_method}
                onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white focus:border-cyan-400/60 focus:outline-none"
              >
                <option value="online">Online</option>
                <option value="card-on-file">Card on file</option>
                <option value="in-person">Pay in person</option>
              </select>
            </Field>

            {error ? (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-red-200">{error}</div>
            ) : null}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="btn-gradient disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Submit Booking'}
              </button>
              <p className="text-sm text-white/60">You’ll get a confirmation email and invoice.</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default BookingForm;

