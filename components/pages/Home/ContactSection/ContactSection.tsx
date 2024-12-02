// components/Contact.js
export default function Contact() {
    return (
        <section className="py-16 bg-gradient-to-r  text-blue-700">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                <p className="text-lg mb-8">Have any questions? We&apos;d love to hear from you.</p>
                <form className="max-w-3xl mx-auto space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full sm:w-1/2 p-4 bg-white text-blue-600 rounded-lg shadow-md"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full sm:w-1/2 p-4 bg-white text-blue-600 rounded-lg shadow-md"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-4 bg-white text-blue-600 rounded-lg shadow-md"
                    ></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
