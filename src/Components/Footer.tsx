import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Left Side: Brand Logo, Description & Social Links */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-pink-500 text-white font-bold text-xs px-2 py-1 rounded-md tracking-wider">
                DS
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
              <a href="#" className="hover:text-pink-500 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-700 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;