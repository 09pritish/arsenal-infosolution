import React from 'react';

const particles = [
  { left: '7%', top: '80%', duration: '11s', delay: '0s' },
  { left: '16%', top: '52%', duration: '14s', delay: '2s' },
  { left: '27%', top: '88%', duration: '12s', delay: '4s' },
  { left: '39%', top: '38%', duration: '15s', delay: '1s' },
  { left: '51%', top: '76%', duration: '13s', delay: '5s' },
  { left: '64%', top: '47%', duration: '16s', delay: '3s' },
  { left: '76%', top: '85%', duration: '12s', delay: '6s' },
  { left: '88%', top: '34%', duration: '14s', delay: '2s' },
];

/** Shared visual treatment for every page hero. */
export const PageBackgroundEffects: React.FC = () => (
  <div className="page-background-effects" aria-hidden="true">
    <div className="enterprise-grid" />
    <div className="bg-glow bg-glow-left" />
    <div className="bg-glow bg-glow-right" />

    <svg
      className="page-background-network"
      preserveAspectRatio="none"
      viewBox="0 0 1600 700"
    >
      <line className="network-line" x1="80" y1="160" x2="480" y2="280" />
      <line className="network-line" x1="480" y1="280" x2="890" y2="140" />
      <line className="network-line" x1="890" y1="140" x2="1390" y2="290" />
      <line className="network-line" x1="250" y1="570" x2="710" y2="430" />
      <line className="network-line" x1="710" y1="430" x2="1220" y2="570" />
      <line className="network-line" x1="480" y1="280" x2="710" y2="430" />
      <line className="network-line" x1="890" y1="140" x2="710" y2="430" />
      <circle className="network-node" cx="80" cy="160" r="5" />
      <circle className="network-node" cx="480" cy="280" r="6" />
      <circle className="network-node" cx="710" cy="430" r="7" />
      <circle className="network-node" cx="890" cy="140" r="6" />
      <circle className="network-node" cx="1220" cy="570" r="5" />
      <circle className="network-node" cx="1390" cy="290" r="5" />
    </svg>

    {particles.map((particle) => (
      <span
        key={`${particle.left}-${particle.top}`}
        className="floating-particle"
        style={{
          left: particle.left,
          top: particle.top,
          animationDuration: particle.duration,
          animationDelay: particle.delay,
        }}
      />
    ))}
  </div>
);
