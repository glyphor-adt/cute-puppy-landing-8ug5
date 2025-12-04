import { Zap, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const featuresData = [
  {
    icon: Zap,
    title: 'Instant Puppy Match',
    description: 'Find the perfect puppy in under 60 seconds with our advanced matching algorithm.',
  },
  {
    icon: Shield,
    title: 'Verified Breeders Only',
    description: 'We partner with ethical, responsible breeders to ensure happy, healthy puppies.',
  },
  {
    icon: TrendingUp,
    title: 'Lifelong Support',
    description: 'Get expert advice and resources to support your puppy journey every step of the way.',
  },
]

function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="text-primary mb-4">
                <feature.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
