import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => navigate("/menu");
  const handleFeedbackClick = () => alert("Feedback feature coming soon!");
  const handlePaymentClick = () => alert("Payment feature coming soon!");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center">
        Welcome to Our Restaurant
      </h1>
      <div className="flex flex-col space-y-4">
        <Button onClick={handleMenuClick}>Menu</Button>
        <Button variant="outline" onClick={handleFeedbackClick}>
          Feedback (Coming Soon)
        </Button>
        <Button variant="outline" onClick={handlePaymentClick}>
          Payment (Coming Soon)
        </Button>
      </div>
    </div>
  );
}

export default Home;
