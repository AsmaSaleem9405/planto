import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer"
export const metadata = {
  title: "Privacy Policy | Planto",
  description: "Read the Privacy Policy of Planto.",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#133501] min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-4xl md:text-5xl pt-13 font-bold text-white mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-300 leading-8 mb-10 text-lg">
          At Planto, we respect your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our
          website.
        </p>

        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-semibold text-green-300 mb-3">
              Information We Collect
            </h2>

            <p className="text-gray-300 leading-8">
              We may collect your name, email address, phone number,
              shipping address, and any information you voluntarily provide
              through our forms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-300 mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 text-gray-300 leading-8 space-y-2">
              <li>Process your orders.</li>
              <li>Respond to customer inquiries.</li>
              <li>Improve our website and services.</li>
              <li>Send newsletters if you subscribe.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-300 mb-3">
              Cookies
            </h2>

            <p className="text-gray-300 leading-8">
              Our website may use cookies to improve user experience,
              remember preferences, and analyze website traffic.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-300 mb-3">
              Third-Party Services
            </h2>

            <p className="text-gray-300 leading-8">
              We may use trusted third-party services such as payment
              gateways and analytics providers to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-300 mb-3">
              Data Security
            </h2>

            <p className="text-gray-300 leading-8">
              We implement reasonable security measures to protect your
              information against unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-300 mb-3">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8">
              If you have any questions regarding this Privacy Policy,
              please contact us through our Contact page.
            </p>
          </div>

        </div>

      </div>
      <Footer />
    </section>
  );
}