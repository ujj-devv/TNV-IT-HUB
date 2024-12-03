// components/Testimonials.js
export default function Testimonials() {
    return (
      <section className="px-8 py-16 bg-blue-50 text-[#1E293B]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial Card 1 */}
            <div className="relative group w-full sm:w-1/3 p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-out transform hover:scale-105 hover:rotate-1">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 transform group-hover:scale-150 transition-transform duration-500"></div>
              <p className="italic z-10 relative">
                &quot;TNV IT-HUB has completely transformed our cybersecurity. We now feel much more secure knowing that they&apos;re always monitoring and protecting us.&quot;
              </p>
              <p className="mt-4 font-semibold z-10 relative">John Doe</p>
              <p className="mt-1 text-sm z-10 relative">CEO, Tech Innovations</p>
            </div>
  
            {/* Testimonial Card 2 */}
            <div className="relative group w-full sm:w-1/3 p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-out transform hover:scale-105 hover:-rotate-1">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 transform group-hover:scale-150 transition-transform duration-500"></div>
              <p className="italic z-10 relative">
                &quot;The automated threat response system is an absolute game-changer. It&apos;s reassuring to know that our data is safe with TNV IT-HUB.&quot;
              </p>
              <p className="mt-4 font-semibold z-10 relative">Jane Smith</p>
              <p className="mt-1 text-sm z-10 relative">CTO, Digital Security Solutions</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  