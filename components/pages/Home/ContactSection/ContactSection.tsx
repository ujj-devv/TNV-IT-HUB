import { ButtonType } from "@/components/ui/Button/button.enums";
import ShadButton from "@/components/ui/Button/ShadButton";

// components/Contact.js
export default function Contact() {
    return (
        <section className="px-8 py-16 bg-[#F9FAFB]  text-[#1E293B]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                <p className="text-lg mb-8">Have any questions? We&apos;d love to hear from you.</p>
                <form className="max-w-3xl mx-auto space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full sm:w-1/2 p-4 bg-white text-[#1E293B] rounded-lg shadow-md"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full sm:w-1/2 p-4 bg-white text-[#1E293B] rounded-lg shadow-md"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-4 bg-white text-[#1E293B] rounded-lg shadow-md"
                    ></textarea>
                    <ShadButton buttonText={"Send Message"} buttonType={ButtonType.PRIMARY} />
                </form>
            </div>
        </section>
    );
}
