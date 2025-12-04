import { motion } from 'framer-motion'

function Hero() {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Find Your Furry Soulmate
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover adorable, healthy puppies from verified breeders. Give a loving puppy the perfect home and enrich your life with unconditional love.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="/adopt"
              className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
            >
              Adopt a Puppy
            </a>
            <a
              href="/browse"
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300"
            >
              Browse Puppies
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1598550874310-9eb66ca1773b?w=800&h=600"
            alt="Cute puppy"
            className="rounded-2xl shadow-2xl mx-auto max-w-lg"
          />
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
