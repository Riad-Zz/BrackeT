
const CatLoader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* 
        Injecting standard CSS keyframes locally so the component 
        remains completely self-contained with no extra CSS files.
      */}
      <style>
        {`
          @keyframes cat-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          @keyframes swing-forward {
            0%, 100% { transform: rotate(-25deg); }
            50% { transform: rotate(25deg); }
          }
          @keyframes swing-backward {
            0%, 100% { transform: rotate(25deg); }
            50% { transform: rotate(-25deg); }
          }
          @keyframes tail-wag {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(10deg); }
          }

          .cat-body-wrapper {
            animation: cat-bounce 0.4s infinite ease-in-out;
            transform-origin: center;
          }
          .leg-pair-1 {
            animation: swing-forward 0.4s infinite ease-in-out;
            transform-origin: 0 0;
          }
          .leg-pair-2 {
            animation: swing-backward 0.4s infinite ease-in-out;
            transform-origin: 0 0;
          }
          .cat-tail {
            animation: tail-wag 0.4s infinite ease-in-out;
            transform-origin: 25px 45px;
          }
        `}
      </style>

      <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
        <g className="cat-body-wrapper">
          {/* Tail */}
          <path 
            className="cat-tail" 
            d="M 25 45 Q 5 45 10 20" 
            fill="none" 
            stroke="#2d3748" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          
          {/* Back Legs */}
          {/* Background Back Leg */}
          <g transform="translate(30, 55)">
            <line className="leg-pair-2" x1="0" y1="0" x2="0" y2="18" stroke="#718096" strokeWidth="6" strokeLinecap="round" />
          </g>
          {/* Foreground Back Leg */}
          <g transform="translate(38, 55)">
            <line className="leg-pair-1" x1="0" y1="0" x2="0" y2="18" stroke="#2d3748" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* Front Legs */}
          {/* Background Front Leg */}
          <g transform="translate(75, 55)">
            <line className="leg-pair-2" x1="0" y1="0" x2="0" y2="18" stroke="#718096" strokeWidth="6" strokeLinecap="round" />
          </g>
          {/* Foreground Front Leg */}
          <g transform="translate(83, 55)">
            <line className="leg-pair-1" x1="0" y1="0" x2="0" y2="18" stroke="#2d3748" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* Main Body */}
          <rect x="25" y="35" width="65" height="24" rx="12" fill="#2d3748" />

          {/* Head */}
          <circle cx="95" cy="33" r="14" fill="#2d3748" />
          
          {/* Ears */}
          <polygon points="86,23 90,10 95,20" fill="#2d3748" />
          <polygon points="95,20 100,10 104,23" fill="#2d3748" />
        </g>
      </svg>
      
      {/* Optional Loading Text underneath */}
      <div style={{ 
        marginTop: '8px', 
        fontFamily: 'system-ui, -apple-system, sans-serif', 
        fontWeight: '600', 
        fontSize: '14px',
        color: '#2d3748', 
        letterSpacing: '3px' 
      }}>
        LOADING
      </div>
    </div>
  );
};

export default CatLoader;