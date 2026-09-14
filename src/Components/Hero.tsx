
import Logo from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
  
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
    
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:opacity-95 transition-all">
                Explore Technologies
              </button>

              <button className="border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium px-6 py-3 rounded-xl transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Container (Element 2) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={Logo}
              alt="Development Stack Illustration"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;