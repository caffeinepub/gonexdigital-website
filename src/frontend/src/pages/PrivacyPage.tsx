import PolicyPage from "./PolicyPage";

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      lastUpdated="January 1, 2025"
      intro="Gonexdigital is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services."
      sections={[
        {
          title: "1. Information We Collect",
          content:
            "We may collect personal information such as your name, email address, phone number, and company name when you contact us, request a quote, or fill out our project inquiry form. We also collect non-personal information such as browser type, IP address, and pages visited through cookies and analytics tools.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "We use collected information to respond to your inquiries, provide and improve our services, send project-related communications, and occasionally share relevant updates or offers (with your consent). We do not sell, trade, or rent your personal information to third parties.",
        },
        {
          title: "3. Cookies & Tracking",
          content:
            "Our website uses cookies to enhance your browsing experience and gather analytics data. You may choose to disable cookies in your browser settings; however, some features of our website may not function properly as a result. We use tools such as Google Analytics to understand site traffic and user behavior.",
        },
        {
          title: "4. Data Security",
          content:
            "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          title: "5. Third-Party Services",
          content:
            "We may use trusted third-party services (such as payment processors, analytics platforms, and communication tools) that have access to your information solely to perform tasks on our behalf. These parties are obligated not to disclose or use your information for any other purpose.",
        },
        {
          title: "6. Your Rights",
          content:
            "You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, please contact us directly. We will respond to all legitimate requests within a reasonable timeframe.",
        },
        {
          title: "7. Changes to This Policy",
          content:
            "Gonexdigital reserves the right to update this Privacy Policy at any time. We will notify users of significant changes by updating the date at the top of this page. Your continued use of our services following any changes constitutes your acceptance of the revised policy.",
        },
        {
          title: "8. Contact Us",
          content:
            "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us through the project inquiry form at https://tally.so/r/44LKKA or via our website contact section.",
        },
      ]}
    />
  );
}
