import PaymentFailure from "@/components/Payment/PaymentFailure";
import PaymentSuccess from "@/components/Payment/PaymentSuccess";

PaymentSuccess
export default function Success({params}) {
    console.log(params, ".....................................");
    const slug = params.slug
    return (
      <div>
        {
            slug == 'success' && <PaymentSuccess />
        }
        {
            slug == 'failure' && <PaymentFailure />
        }
      </div>
    );
  }
  