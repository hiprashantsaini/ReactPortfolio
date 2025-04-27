

// === Wave Divider ===
export const WaveDivider = ({ topColor = "text-blue-600", bottomColor = "text-gray-900" }) => {
    return (
      <div className="relative">
        {/* Top section */}
        <section className={`${topColor.replace('text-', 'bg-')} relative py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Top Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the top section goes here. This section has a different background color.
          </p>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px]">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`relative block w-full h-16 md:h-24 ${bottomColor}`}
              fill="currentColor"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Bottom section */}
        <section className={`${bottomColor.replace('text-', 'bg-')} py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Bottom Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the bottom section goes here. This section has a different background color.
          </p>
        </section>
      </div>
    );
  };
  
  // === Slant Divider ===
  export const SlantDivider = ({ topColor = "text-emerald-600", bottomColor = "text-slate-800" }) => {
    return (
      <div className="relative">
        {/* Top section */}
        <section className={`${topColor.replace('text-', 'bg-')} relative py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Top Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the top section goes here. This section has a different background color.
          </p>
          
          {/* Slant divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px]">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`relative block w-full h-16 md:h-24 ${bottomColor}`}
              fill="currentColor"
            >
              <path d="M1200 120L0 16.48V0h1200v120z"></path>
            </svg>
          </div>
        </section>
        
        {/* Bottom section */}
        <section className={`${bottomColor.replace('text-', 'bg-')} py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Bottom Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the bottom section goes here. This section has a different background color.
          </p>
        </section>
      </div>
    );
  };
  
  // === Curve Divider ===
  export const CurveDivider = ({ topColor = "text-purple-600", bottomColor = "text-gray-800" }) => {
    return (
      <div className="relative">
        {/* Top section */}
        <section className={`${topColor.replace('text-', 'bg-')} relative py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Top Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the top section goes here. This section has a different background color.
          </p>
          
          {/* Curve divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px]">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`relative block w-full h-16 md:h-24 ${bottomColor}`}
              fill="currentColor"
            >
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Bottom section */}
        <section className={`${bottomColor.replace('text-', 'bg-')} py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Bottom Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the bottom section goes here. This section has a different background color.
          </p>
        </section>
      </div>
    );
  };
  
  // === Triangle Divider ===
  export const TriangleDivider = ({ topColor = "text-indigo-600", bottomColor = "text-slate-900" }) => {
    return (
      <div className="relative">
        {/* Top section */}
        <section className={`${topColor.replace('text-', 'bg-')} relative py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Top Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the top section goes here. This section has a different background color.
          </p>
          
          {/* Triangle divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px]">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`relative block w-full h-16 md:h-24 ${bottomColor}`}
              fill="currentColor"
            >
              <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
            </svg>
          </div>
        </section>
        
        {/* Bottom section */}
        <section className={`${bottomColor.replace('text-', 'bg-')} py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Bottom Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the bottom section goes here. This section has a different background color.
          </p>
        </section>
      </div>
    );
  };
  
  // === Custom Shape Divider (Mountains) ===
  export const MountainDivider = ({ topColor = "text-cyan-600", bottomColor = "text-gray-900" }) => {
    return (
      <div className="relative">
        {/* Top section */}
        <section className={`${topColor.replace('text-', 'bg-')} relative py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Top Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the top section goes here. This section has a different background color.
          </p>
          
          {/* Mountain divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px]">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`relative block w-full h-16 md:h-24 ${bottomColor}`}
              fill="currentColor"
            >
              <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
              <path d="M0,0v15.81c200,24.89,400,49.78,600,49.78s400-24.89,600-49.78V0z" className="shape-fill" opacity="0.6"></path>
              <path d="M0,0v5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" opacity="0.3"></path>
            </svg>
          </div>
        </section>
        
        {/* Bottom section */}
        <section className={`${bottomColor.replace('text-', 'bg-')} py-16`}>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Bottom Section</h2>
          <p className="text-center text-white max-w-2xl mx-auto">
            Your content for the bottom section goes here. This section has a different background color.
          </p>
        </section>
      </div>
    );
  };