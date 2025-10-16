import Navbar from "@/app/components/Navbar"; 
import Footer from "@/app/components/footer";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from 'lucide-react'; 
import Link from 'next/link'; // For the news links

interface TeamPageProps {
  params: {
    slug: string;
  };
}

// Dummy data for the three news articles
const newsArticles = [
    {
        id: 1,
        imageSrc: "/news-img-1.png", // Placeholder image 1
        writeup: "Titans Clinch Playoff Spot After Thrilling Overtime Victory",
        date: "October 10, 2025",
        link: "#article1"
    },
    {
        id: 2,
        imageSrc: "/news-img-2.png", // Placeholder image 2
        writeup: "Star Quarterback Awarded League MVP for Stellar Season",
        date: "October 3, 2025",
        link: "#article2"
    },
    {
        id: 3,
        imageSrc: "/news-img-3.png", // Placeholder image 3
        writeup: "Rookies Shine in Training Camp; Expectations Soar for Upcoming Season",
        date: "September 25, 2025",
        link: "#article3"
    },
];


export default function TeamDetail({ params }: TeamPageProps) {
    
    return (
        <>
            {/* 1. Navbar */}
            <Navbar linkTextColor="text-black" />

            {/* Main Content Area */}
            <main className="min-h-screen bg-white text-gray-800 pt-[160px] px-6 md:px-10">
                
                {/* 1. Fan Gallery Section (UNCHANGED) */}
                <div className="relative w-full h-auto mb-8">
                    <Image
                        src="/titan-fans.png" 
                        alt="Titans Fans"
                        width={1200}
                        height={400}
                        className="w-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex items-center justify-center py-8">
                    
                    {/* Left Arrow Button */}
                    <button 
                        className="p-3 bg-white border border-gray-300 rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition flex-shrink-0 mr-4"
                        aria-label="Previous image"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    {/* Three Images (width 172px) */}
                    <div className="flex space-x-4 overflow-hidden">
                        {['/fan-small-1.png', '/fan-small-2.png', '/fan-small-3.png'].map((src, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    src={src}
                                    alt={`Fan image ${index + 1}`}
                                    width={172} 
                                    height={172}
                                    className="object-cover rounded-lg shadow-md border-4 border-white"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    <button 
                        className="p-3 bg-white border border-gray-300 rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition flex-shrink-0 ml-4"
                        aria-label="Next image"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
                
                {/* ------------------------------------------------------------- */}

             // ... (code above is unchanged)

                {/* ------------------------------------------------------------- */}

                {/* 🎯 2. NEW TEAM NEWS SECTION */}
                {/* Note: The -mx- ensures the background color stretches full width */}
                <div className="bg-[#f7f7f7] py-12 px-6 md:px-10 -mx-6 md:-mx-10 mt-8">
                    <h2 className="text-3xl font-extrabold text-[#002060] mb-8 uppercase tracking-tight">
                        Team News
                    </h2>
                    
                    {/* Grid for 3 Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {newsArticles.map(article => (
                            <Link 
                                key={article.id}
                                href={article.link} 
                                className="group block bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                            >
                                {/* 1. Article Image Container */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={article.imageSrc}
                                        alt={article.writeup}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                
                                {/* 2. Writeup and Date Container (This is positioned BELOW the image) */}
                                <div className="p-4">
                                    {/* Writeup (Heading) */}
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C90F0F] transition duration-300 mb-2 leading-snug">
                                        {article.writeup}
                                    </h3>
                                    
                                    {/* Date */}
                                    <p className="text-sm text-gray-500 font-medium">
                                        {article.date}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </main>

            {/* 3. Footer */}
            <Footer />
        </>
    );
}
// ... (newsArticles and component boilerplate must remain at the top of the file)
