import PolicyPage from "./PolicyPage";

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      lastUpdated="January 1, 2025"
      intro="Welcome to Gonexdigital. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully before engaging with our agency."
      sections={[
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing our website or engaging our services, you agree to these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our services. Gonexdigital reserves the right to update these terms at any time, and your continued use of our services constitutes acceptance of those changes.",
        },
        {
          title: "2. Services",
          content:
            "Gonexdigital provides digital marketing, web development, graphic design, and related services as agreed upon in individual project contracts or service agreements. The specific scope, timeline, and deliverables of each project will be defined in a separate Statement of Work (SOW) or proposal accepted by both parties.",
        },
        {
          title: "3. Intellectual Property",
          content:
            "Upon full payment, clients receive ownership of final deliverables specifically created for their project. Gonexdigital retains ownership of all preliminary designs, concepts, tools, frameworks, and proprietary processes used in delivering the services. We reserve the right to showcase completed work in our portfolio unless otherwise agreed in writing.",
        },
        {
          title: "4. Payment Terms",
          content:
            "Payment terms are outlined in individual project agreements. Standard policy requires an advance deposit before work commences, with the remaining balance due upon project completion. Gonexdigital reserves the right to pause or terminate work if payments are significantly overdue, without liability to the client.",
        },
        {
          title: "5. Confidentiality",
          content:
            "Both parties agree to maintain confidentiality of any proprietary information shared during the course of the project. Gonexdigital will not disclose client business information, strategies, or data to third parties without explicit written consent, except where required by law.",
        },
        {
          title: "6. Limitation of Liability",
          content:
            "Gonexdigital shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability in any matter arising out of or related to these terms shall not exceed the total fees paid by the client in the three months preceding the claim.",
        },
        {
          title: "7. Termination",
          content:
            "Either party may terminate a service agreement with 14 days written notice. In the event of termination, the client is responsible for payment for all work completed up to the termination date. Deposits are non-refundable unless Gonexdigital fails to begin work within the agreed timeframe.",
        },
        {
          title: "8. Governing Law",
          content:
            "These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.",
        },
      ]}
    />
  );
}
