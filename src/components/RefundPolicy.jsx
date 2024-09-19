import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-black text-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>

      <h2 className="text-xl font-semibold mb-2">1. General Policy</h2>
      <p className="mb-6">
        All ticket sales for the India Designer Show ("the Event"), a subsidiary of Modern Stage Events, are final. By purchasing a ticket, you agree to the terms outlined in this refund policy. Please review the details carefully before completing your purchase, as all payments and refunds will be processed exclusively through Modern Stage Events.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. No Refunds</h2>
      <p className="mb-6">
        Tickets purchased for the Event are non-refundable. This includes, but is not limited to, tickets purchased directly from the Organizer, Modern Stage Events, through third-party vendors, or as part of promotional offers. Refunds will not be issued for any reason, including but not limited to inability to attend, illness, or scheduling conflicts.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Event Cancellation or Postponement</h2>
      <p className="mb-6">
        In the unlikely event that the India Designer Show is canceled or postponed, ticket holders will be notified via the email address provided at the time of purchase.
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Cancellation:</strong> If the Event is canceled, a full refund of the ticket price will be issued to the original payment method within 30 days of the cancellation announcement, processed by Modern Stage Events.</li>
        <li><strong>Postponement:</strong> If the Event is postponed, tickets will be honored for the rescheduled date.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">4. Transfer of Tickets</h2>
      <p className="mb-6">
        Tickets for the India Designer Show are transferable. If you are unable to attend the Event, you may transfer your ticket to another individual. The Organizer and Modern Stage Events are not responsible for verifying the identity of the ticket holder.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Refund Process</h2>
      <p className="mb-6">
        When applicable, refund requests must be submitted in writing via the official contact email provided by the Organizer. Please include your ticket order number, name, and reason for the refund request.
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Approved refunds will be processed by Modern Stage Events within 30 days and credited back to the original payment method. Processing fees, if any, may not be refundable.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">6. Changes to the Refund Policy</h2>
      <p className="mb-6">
        The Organizer reserves the right to change or update this refund policy at any time without prior notice. Any changes will be posted on the official Event website and communicated to ticket holders via email.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
      <p>
        For questions or concerns regarding the refund policy, please contact the Organizer at <a href="mailto:info@indiadesignershow.com" className="text-blue-500">info@indiadesignershow.com</a>. All payment and refund-related inquiries will be handled by Modern Stage Events.
      </p>
    </div>
  );
};

export default RefundPolicy;
