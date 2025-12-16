import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50">
        <Header></Header>
      <div className="mx-auto max-w-4xl px-4 py-12">
        {children}
      </div>
      <Footer></Footer>
    </main>
  );
}
