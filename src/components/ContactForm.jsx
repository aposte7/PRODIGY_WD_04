const ContactForm = () => (
    <form className="space-y-8 border border-blue-900 p-8 rounded-lg w-full max-w-lg">
        <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 font-bold text-left">Your email</label>
            <input type="email" id="email" name="email" className="w-full p-3 rounded-md bg-blue-300/20 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
            <label htmlFor="message" className="block text-gray-300 mb-2 font-bold text-left">Your message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-md bg-blue-300/20 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Send message</button>
    </form>
);

export default ContactForm;
