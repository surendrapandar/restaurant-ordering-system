import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-2xl font-bold text-green-600">
        Order Successful!
      </h2>
      <p className="mb-8 text-center">
        Thank you for your order. It will be served shortly.
      </p>
      <Button onClick={() => navigate("/")}>Go Back to Home</Button>
    </div>
  );
}

export default OrderSuccess;
