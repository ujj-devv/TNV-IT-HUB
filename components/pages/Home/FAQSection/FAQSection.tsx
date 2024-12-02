// components/FAQ.js
export default function FAQ() {
    return (
      <section className="py-16 bg-white text-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold">What is cybersecurity?</h3>
              <p className="mt-2">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, data breaches, and other cyber threats.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold">Why should I use WebSec?</h3>
              <p className="mt-2">WebSec offers real-time monitoring, automated threat responses, and 24/7 support to ensure your business stays safe from evolving cyber threats.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  