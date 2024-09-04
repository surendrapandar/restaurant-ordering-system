import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white "
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/featured/?restaurant)",
        }}
      >
        <h1 className="text-5xl font-bold mb-4 text-center">
          Revolutionize Your Restaurant Ordering
        </h1>
        <p className="text-xl mb-8 text-center">
          Empower your customers with a seamless QR code ordering system.
        </p>
        <div className="flex space-x-4">
          <a
            href="#features"
            className="bg-blue-600 px-6 py-3 rounded-lg font-medium"
          >
            Learn More
          </a>
          <a
            href="/admin"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">📲</div>
              <h3 className="text-xl font-bold mb-2">Scan QR Code</h3>
              <p>
                Customers scan the QR code placed on tables to view the menu.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-2">Place Order</h3>
              <p>
                Select items from the menu and place the order directly from the
                mobile device.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Meal</h3>
              <p>
                The kitchen receives the order instantly and begins preparation.
                No need to wait for a waiter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Admin Control</h3>
              <p>
                Easily manage menus, orders, and restaurant settings through the
                admin panel.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
              <p>
                Receive orders in real-time, directly in the kitchen for faster
                service.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p>
                Secure transactions and data management with reliable cloud
                storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="get-started" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">
                $29<span className="text-lg">/mo</span>
              </p>
              <ul className="mb-8">
                <li className="mb-2">10 Orders per Day</li>
                <li className="mb-2">Basic Analytics</li>
                <li className="mb-2">Email Support</li>
              </ul>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Get Started
              </a>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">
                $99<span className="text-lg">/mo</span>
              </p>
              <ul className="mb-8">
                <li className="mb-2">Unlimited Orders</li>
                <li className="mb-2">Advanced Analytics</li>
                <li className="mb-2">Priority Support</li>
              </ul>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Get Started
              </a>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">Custom</p>
              <ul className="mb-8">
                <li className="mb-2">Custom Features</li>
                <li className="mb-2">Dedicated Support</li>
                <li className="mb-2">Custom Integration</li>
              </ul>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
