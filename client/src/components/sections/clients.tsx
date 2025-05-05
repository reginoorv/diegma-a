import { motion } from "framer-motion";

// Define client logos - in a real implementation these would be actual client logos
const clientLogos = [
  { id: 1, logo: "https://via.placeholder.com/120x60?text=LOGO" },
  { id: 2, logo: "https://via.placeholder.com/120x60?text=LOGO" },
  { id: 3, logo: "https://via.placeholder.com/120x60?text=LOGO" },
  { id: 4, logo: "https://via.placeholder.com/120x60?text=LOGO" },
  { id: 5, logo: "https://via.placeholder.com/120x60?text=LOGO" },
  { id: 6, logo: "https://via.placeholder.com/120x60?text=LOGO" },
];

export function Clients() {
  return (
    <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold font-serif text-center mb-12">Dipercaya Oleh</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <motion.div 
              key={client.id} 
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={client.logo} 
                alt={`Client logo ${client.id}`} 
                className="h-12 filter grayscale hover:grayscale-0 transition-filter duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
