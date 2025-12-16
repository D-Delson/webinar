export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Privacy Policy
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          We respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you interact with our website or services.
        </p>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, company name, and any details you choose to
            share when submitting a form or making a payment.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p>
            Your information is used only to respond to enquiries, provide our
            services, process payments, and communicate with you regarding your
            requests. We do not sell or rent your personal data to third parties.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Payment Information
          </h2>
          <p>
            Payments are processed securely through third-party payment
            providers. We do not store your card or banking details on our
            servers.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Data Security
          </h2>
          <p>
            We take reasonable technical and organizational measures to protect
            your personal information from unauthorized access, misuse, or
            disclosure.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Cookies
          </h2>
          <p>
            Our website may use cookies to improve user experience and analyze
            traffic. You can choose to disable cookies through your browser
            settings.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Your Rights
          </h2>
          <p>
            You have the right to request access, correction, or deletion of
            your personal information. To make such a request, please contact
            us using the details below.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how your data
            is handled, you can contact us at:
          </p>
          <p className="mt-2 font-medium">
            Email: support@example.com
          </p>
        </div>
      </section>
    </main>
  );
}
