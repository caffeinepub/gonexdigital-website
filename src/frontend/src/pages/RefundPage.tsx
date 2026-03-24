import PolicyPage from "./PolicyPage";

export default function RefundPage() {
  return (
    <PolicyPage
      title="Refund & Delivery Policy"
      lastUpdated="January 1, 2025"
      intro="At Gonexdigital, we are committed to delivering exceptional quality and client satisfaction. This policy outlines our approach to refunds and project delivery."
      sections={[
        {
          title: "1. Project Delivery",
          content:
            "All project timelines are agreed upon in the initial proposal or Statement of Work. Gonexdigital commits to delivering projects within the specified timeline. If unforeseen circumstances arise, we will communicate proactively and work to minimize any delays. Client response times for feedback and approvals also affect overall delivery schedules.",
        },
        {
          title: "2. Revision Policy",
          content:
            "Each project includes a specified number of revision rounds as outlined in the project proposal. Revisions are limited to adjustments within the original scope of work. Requests that constitute a change in scope may be subject to additional charges. Additional revision rounds beyond those included can be purchased at an agreed rate.",
        },
        {
          title: "3. Deposit & Advance Payments",
          content:
            "All projects require a non-refundable deposit before work commences. This deposit covers initial research, planning, and resource allocation. The deposit amount is specified in the project proposal and is typically 30–50% of the total project value.",
        },
        {
          title: "4. Refund Eligibility",
          content:
            "Refunds are considered on a case-by-case basis. If Gonexdigital fails to begin work within the agreed start date or delivers work that materially does not meet the agreed specifications despite revision attempts, a partial or full refund of paid amounts (excluding the initial deposit) may be issued. Refunds are not available once a project milestone has been approved by the client.",
        },
        {
          title: "5. Cancellation Policy",
          content:
            "Either party may cancel a project with 14 days written notice. Upon cancellation, the client is responsible for payment of all work completed up to the cancellation date. If the client cancels after 50% of the project is complete, the full project fee may be due. Any funds paid beyond work completed will be refunded.",
        },
        {
          title: "6. Digital Product Delivery",
          content:
            "All digital deliverables (design files, website access, code repositories, reports) are delivered via agreed channels such as email, cloud storage links, or direct platform access. Gonexdigital provides all deliverables in agreed file formats. Source files are provided upon full payment confirmation.",
        },
        {
          title: "7. Dispute Resolution",
          content:
            "In the event of a dispute regarding deliverables or payments, both parties agree to engage in good-faith negotiations to resolve the matter. If a resolution cannot be reached within 30 days, the matter may be referred to mediation before any legal proceedings are initiated.",
        },
        {
          title: "8. Contact for Refund Requests",
          content:
            "To initiate a refund request or discuss concerns about project delivery, please contact us through the project inquiry form at https://tally.so/r/44LKKA. All requests will be acknowledged within 2 business days and resolved within 14 business days.",
        },
      ]}
    />
  );
}
