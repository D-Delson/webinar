import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#1A202C] text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: TN Growth */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              TN Growth<span className="text-blue-500">.</span>
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Helping Tamil Nadu businesses improve through consultation and
              education. 15+ years of real-world business experience across 10+
              districts.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                in
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                wa
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Client Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Webinar Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Startup Checklist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  MSME Loan Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contract Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6">
          <p className="text-sm text-gray-400 text-center">
            © 2025 TN Growth Consultants. Built by consultants, for businesses
            like yours.
          </p>
        </div>
      </Container>
    </footer>
  );
}
