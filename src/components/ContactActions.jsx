function ContactActions({ layout = 'row', showText = true, className = '' }) {
  const directionClass = layout === 'column' ? 'flex-col' : 'flex-row';
  const bookingUrl = 'https://maximizedphysicaltherapysportsrehab.square.site/';

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${directionClass} ${className}`}>
      <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-gradient w-full sm:w-auto">
        Book Your Assessment Now
      </a>
      <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
        Call: 646-240-5299
      </a>
      {showText && (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary w-full border-cyan-300/60 text-cyan-100 sm:w-auto"
        >
          Text: 646-240-5299
        </a>
      )}
    </div>
  );
}

export default ContactActions;
