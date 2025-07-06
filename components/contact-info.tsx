import { Facebook, Linkedin, Twitter } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-4 text-sm text-gray-300">
      <p><strong>Address:</strong> House #12, Road #7, Gulshan 1, Dhaka 1212</p>
      <p><strong>Phone:</strong> +880 1234-567890</p>
      <p><strong>Email:</strong> support@trackly.ai</p>
      <p><strong>Business:</strong> partner@trackly.ai</p>

      <div className="flex gap-4 pt-2">
        <a
          href="https://facebook.com/tracklyai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/company/tracklyai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 hover:bg-blue-900 text-white rounded-full p-2 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="https://twitter.com/tracklyai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
