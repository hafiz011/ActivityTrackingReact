import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">

      <div className="space-y-6">
        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-6 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Email Us</h4>
            <p className="text-gray-400 mb-2">Send us an email anytime</p>
            <a href="mailto:info@techciph.com" className="text-blue-300 font-medium hover:text-blue-100">
              info@techciph.com
            </a> <br />
             <a href="mailto:support@techciph.com" className="text-blue-300 font-medium hover:text-blue-100">
              support@techciph.com
            </a>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-6 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Call Us</h4>
            <p className="text-gray-400 mb-2">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+8801758773150" className="text-green-600 font-medium hover:text-green-700">
              +880 1758-773150
            </a>
          </div>
        </div>

        {/* <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-6 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Visit Us</h4>
            <p className="text-gray-400 mb-2">Come say hello at our office</p>
            <address className="text-purple-600 font-medium not-italic">
              123 Analytics Street<br />
              San Francisco, CA 94105
            </address>
          </div>
        </div> */}

        {/* <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-6 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Opening Hours</h4>
            <div className="text-gray-400 space-y-1">
              <p>Saturday - Thurasday: 8:00 AM - 6:00 PM PST</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </div> */}
              {/* Social Media Links */}
        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-6 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Follow Us</h4>
            <p className="text-gray-400 mb-3">Stay connected on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}