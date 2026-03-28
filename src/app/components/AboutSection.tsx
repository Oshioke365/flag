import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-black text-center">
          About Community Flag Football League (CFFL)
        </h2>
        <p className="mb-4 text-lg text-black">
          Community Flag Football League (CFFL) is a grassroots sports organization 
          dedicated to growing flag football through structured community leagues, 
          competitive play, and grassroots development across Africa.
        </p>
        <p className="mb-4 text-lg text-black">
          CFFL was created to build a strong community around flag football, giving 
          players, teams, and fans an accessible platform to participate in one of 
          the fastest-growing sports in the world. Through organized Community Flag 
          Football League seasons, tournaments, and events, we bring athletes together 
          to compete, develop their skills, and grow the sport at the local and regional level.
        </p>
        <p className="mb-4 text-lg text-black">
          Our leagues provide opportunities for both new and experienced players to 
          enjoy flag football in a safe, inclusive, and competitive environment. By 
          focusing on community-driven sports development, CFFL helps create pathways 
          for talent identification, player development, and the long-term growth of 
          flag football leagues in Africa.
        </p>
        <p className="mb-4 text-lg text-black">
          At its core, the Community Flag Football League is about more than just games. 
          It is about building a community where sport connects people, develops athletes, 
          and inspires the next generation of flag football players.
        </p>
        <p className="text-lg text-black">
          As flag football continues to gain global recognition, CFFL is committed to 
          ensuring that African athletes and communities are actively represented in 
          the growth of the sport.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;