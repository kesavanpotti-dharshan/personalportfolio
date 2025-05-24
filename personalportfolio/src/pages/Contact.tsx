export default function Contact() {
    return (
        <section className="max-w-xl mx-auto py-16">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">Get in Touch</h1>
            <form
                className="space-y-6"
                action="https://formspree.io/f/your-form-id" // replace this
                method="POST"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
