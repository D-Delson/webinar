import Container from "./Container";

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b border-gray-300 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-center py-[27px] relative">
          <div className="flex-1"></div>
          <div className="hidden md:flex items-center space-x-16">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Who We Are
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#stories"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Client Stories
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 cursor-pointer transition-colors font-medium">
              Book Consultation
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
