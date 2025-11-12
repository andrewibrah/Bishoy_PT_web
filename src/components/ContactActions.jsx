function ContactActions({ layout = 'row', className = '' }) {
  const directionClass = layout === 'column' ? 'flex-col' : 'flex-row';
  const bookingUrl = 'https://maximizedphysicaltherapysportsrehab.square.site/';

  return (
    <div className={`flex items-center justify-center gap-4 ${directionClass} ${className}`}>
      <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-gradient w-full sm:w-auto">
        Book Now
      </a>
    </div>
  );
}

export default ContactActions;
