import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const fakeChartData = Array.from({ length: 10 }, (_, i) => ({
  name: `Day ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 50,
}));

export default function SlothLandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // Slow loading effect
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-green-700 text-gray-900 relative overflow-hidden">
      {loading ? (
        <motion.div
          className="text-4xl font-bold flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          🦥 Loading... Taking it slow...
        </motion.div>
      ) : (
        <div className="text-center p-8 relative">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <h1 className="text-6xl font-bold mb-4 flex items-center justify-center">
              $SLOTH <GiCash className="ml-4 text-yellow-400" />
            </h1>
          </motion.div>
          <p className="text-xl italic mb-6">Slow and steady to the moon. 🌙</p>
          <div className="flex space-x-4 mb-6">
            <Button className="bg-blue-500 text-white flex items-center" asChild>
              <a href="https://twitter.com/your_sloth_coin" target="_blank">
                <FaTwitter className="mr-2" /> X (Twitter)
              </a>
            </Button>
            <Button className="bg-blue-700 text-white flex items-center" asChild>
              <a href="https://t.me/your_sloth_coin" target="_blank">
                <FaTelegram className="mr-2" /> Telegram
              </a>
            </Button>
          </div>
          <div className="w-full max-w-lg bg-white shadow-xl p-4 rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">📈 Market Moves</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={fakeChartData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 text-lg flex flex-col items-center space-y-2">
            <p>🔥 No taxes, no rug, just vibes.</p>
            <p>💤 Slow and steady wins the crypto race.</p>
            <p>😂 Why did the sloth invest in crypto? … He had all the time in the world.</p>
          </div>
        </div>
      )}
    </div>
  );
}
