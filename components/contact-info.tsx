import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from './ui/card';

export function ContactInfo() {
  return (
    <div className="space-y-8">

      <div className="space-y-6">
        <Card className="flex items-start space-x-4 p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 transition-all">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Email Us</h4>
            <p className="text-gray-400 mb-2">Send us an email anytime</p>
            <a href="mailto:hello@usertrackpro.com" className="text-blue-600 font-medium hover:text-blue-700">
              hello@usertrackpro.com
            </a>
          </div>
        </Card>

        <Card className="flex items-start space-x-4 p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 transition-all">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Call Us</h4>
            <p className="text-gray-400 mb-2">Mon-Fri from 8am to 5pm PST</p>
            <a href="tel:+1-555-123-4567" className="text-green-600 font-medium hover:text-green-700">
              +1 (555) 123-4567
            </a>
          </div>
        </Card>

        <Card className="flex items-start space-x-4 p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 transition-all">
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
        </Card>

        <Card className="flex items-start space-x-4 p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 transition-all">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Business Hours</h4>
            <div className="text-gray-400 space-y-1">
              <p>Saturday - Thurasday: 8:00 AM - 6:00 PM PST</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}