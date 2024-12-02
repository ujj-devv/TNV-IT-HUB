// components/Blog.js
export default function Blog() {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white text-blue-600 rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Understanding Cybersecurity Threats</h3>
              <p className="text-sm">A deep dive into the most common cybersecurity threats businesses face today and how to mitigate them.</p>
              <a href="#" className="text-blue-600 mt-4 block font-semibold">Read More</a>
            </div>
            <div className="bg-white text-blue-600 rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">How to Safeguard Your Business</h3>
              <p className="text-sm">Effective strategies for businesses to improve their cybersecurity posture and prevent breaches.</p>
              <a href="#" className="text-blue-600 mt-4 block font-semibold">Read More</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  