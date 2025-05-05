import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  isLast?: boolean;
}

function StatItem({ value, suffix = "", label, isLast = false }: StatItemProps) {
  return (
    <div className={`stats-item text-center py-6 relative ${!isLast ? "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[50px] md:after:w-[1px] md:after:bg-gray-200" : ""}`}>
      <CountUp
        end={value}
        suffix={suffix}
        className="text-4xl font-bold font-serif mb-2"
      />
      <p className="text-[#4A4A4A]">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <motion.section 
      className="py-12 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatItem value={250} suffix="+" label="Proyek Selesai" />
          <StatItem value={27} label="Tahun Pengalaman" />
          <StatItem value={106} label="Klien Puas" isLast={true} />
        </div>
      </div>
    </motion.section>
  );
}
