export function generateConfirmationNumber() {
  const dt = new Date();
  const yyyy = dt.getFullYear().toString().slice(-2);
  const mm = String(dt.getMonth() + 1).padStart(2, '0');
  const dd = String(dt.getDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `MX-${yyyy}${mm}${dd}-${rand}`;
}

export async function submitBookingToN8n(payload) {
  const url = import.meta.env.VITE_N8N_BOOKING_WEBHOOK_URL;
  if (!url) {
    throw new Error('Missing VITE_N8N_BOOKING_WEBHOOK_URL environment variable');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Booking submission failed (${res.status}): ${text}`);
  }

  // n8n returns last node response by default; not strictly needed
  try {
    return await res.json();
  } catch {
    return { ok: true };
  }
}

