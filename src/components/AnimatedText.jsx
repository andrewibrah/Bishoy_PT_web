import React from 'react';

/**
 * AnimatedText
 * - Splits text into characters for specific hover effects (wave, jitter)
 * - Provides stroke-to-fill and jump-out variants without splitting
 *
 * Props:
 * - text: string
 * - variant: 'stroke-fill' | 'wave' | 'jitter' | 'jump'
 * - as: element tag to render (default: 'span')
 * - className: additional classes
 */
function AnimatedText({ text, variant = 'stroke-fill', as: Tag = 'span', className = '' }) {
  if (!text) return null;

  const baseClass =
    variant === 'stroke-fill'
      ? 'anim-stroke-fill'
      : variant === 'wave'
      ? 'anim-wave'
      : variant === 'jitter'
      ? 'anim-jitter'
      : variant === 'jump'
      ? 'anim-jump-out'
      : '';

  if (variant === 'wave' || variant === 'jitter') {
    return (
      <Tag className={`${baseClass} ${className}`} aria-label={text} role="text">
        {text.split('').map((ch, idx) => (
          <span key={`${ch}-${idx}`} className="char" data-content={ch} aria-hidden>
            {ch}
          </span>
        ))}
      </Tag>
    );
  }

  if (variant === 'jump') {
    return (
      <Tag className={`${baseClass} ${className}`} data-content={text}>
        {text}
      </Tag>
    );
  }

  // stroke-fill default
  return <Tag className={`${baseClass} ${className}`}>{text}</Tag>;
}

export default AnimatedText;

