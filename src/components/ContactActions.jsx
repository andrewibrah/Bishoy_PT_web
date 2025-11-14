import { Link } from 'react-router-dom';
import VoltageButton from './VoltageButton.jsx';

function ContactActions({
  layout = 'row',
  className = '',
  explore,
  bookingUrl = 'https://maximizedphysicaltherapysportsrehab.square.site/',
  phoneNumber = '646-240-5299',
  showBook = true,
  showCall = true,
  showText = true,
}) {
  const layoutClasses = layout === 'column' ? 'flex-col items-stretch' : 'flex-row flex-wrap';
  const actionWidth = layout === 'column' ? 'w-full' : 'w-full sm:w-auto';

  return (
    <div className={`flex gap-4 ${layoutClasses} ${className}`}>
      {explore ? (
        <Link to={explore.to} className={`btn-secondary ${actionWidth}`}>
          {explore.label}
        </Link>
      ) : null}
      {showBook ? (
        <VoltageButton href={bookingUrl} className={actionWidth}>
          Book Now
        </VoltageButton>
      ) : null}
      {showCall ? (
        <a href={`tel:${phoneNumber}`} className={`btn-outline ${actionWidth}`}>
          Call {phoneNumber}
        </a>
      ) : null}
      {showText ? (
        <a href={`sms:${phoneNumber}`} className={`btn-outline ${actionWidth}`}>
          Text {phoneNumber}
        </a>
      ) : null}
    </div>
  );
}

export default ContactActions;
