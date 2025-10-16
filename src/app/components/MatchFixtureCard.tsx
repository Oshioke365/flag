import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Icons for social media

// Data for footer columns 
const footerLinks = [
  {
    title: "General",
    links: ["News", "Season Schedule", "Team", "Tickets", "Historical Scores"],
  },
  {
    title: "CFFL Ecosystem",
    links: ["Fantasy", "Merch Store", "Tickets", "Stats"],
  },
  {
    title: "Media",
    links: ["CFFL Communication", "Media Guides", "Rule Book", "Licensing"],
  },
  {
    title: "Players",
    links: [
      "CFFL Health & Safety",
      "Player Engagement",
      "CFFL Legends Community",
      "CFFL Alumni Association",
      "CFFL Player Care",
    ],
  },
];

export default function Footer() {
  return (
    // Dark background for the footer section
    <footer className="bg-[#1A1A1A] text-gray-300 pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        {/* 1. Team Logos Section */}
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 mb-12 border-b border-gray-700 pb-12">
          {/* Mapping over dummy logos (You'll need to update image sources) */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="w-12 h-12 relative opacity-80 hover:opacity-100 transition duration-200">
              <Image
                src={`/team-logo-${index + 1}.png`} // Placeholder image path
                alt={`Team Logo ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>

        {/* 2. Main Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((col, colIndex) => (
            <div key={colIndex}>
              <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((linkName, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-sm hover:text-[#C90F0F] transition duration-200">
                      {linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Copyright and Social Media Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left: Logo and Copyright Text */}
          <div className="flex items-start md:items-center space-x-4 text-xs mb-4 md:mb-0">
            <Image
              src="/cffl-footer-logo.png" // Placeholder for the shield logo
              alt="CFFL Shield"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <p>
              &copy; 2025 Community Flag Football League (CFFL), CFFL, and the CFFL shield are trademarks of the Community Flag Football League. Team names, logos, and uniform designs are trademarks of their respective teams. All other CFFL-related marks are property of the Community Flag Football League.
            </p>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white transition duration-200">
              <Facebook size={24} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition duration-200">
              <Instagram size={24} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white transition duration-200">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}