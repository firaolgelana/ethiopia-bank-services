import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter, 
  ShieldCheck 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#110c1d] text-white pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* CENTERED LINKS GRID */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 w-full max-w-5xl">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-6 text-gray-100">Platform</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Compare Rates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Loan Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find ATMs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-6 text-gray-100">Services</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Personal Banking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business / SME</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diaspora Accounts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forex Trading</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interest Free</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-6 text-gray-100">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">NBE Directives</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Banking Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-6 text-gray-100">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR (UNAFFECTED) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-6">
          
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2026 Ethio-Bank Services. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tighter">DATA<span className="font-light">SECURE</span></h2>
              <ShieldCheck className="text-green-400" size={24} />
            </div>
            <div className="flex gap-1 text-yellow-400 text-sm">
              ★ ★ ★ ★ ★ <span className="text-gray-400 ml-1">4.9</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}