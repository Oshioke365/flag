import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <p>Welcome to the gallery page.</p>
      </main>

      <Footer />
    </>
  );
}