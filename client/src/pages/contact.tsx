import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema } from "@/lib/form-schema";
import { useToast } from "@/hooks/use-toast";
import { 
  PhoneCall, Mail, MapPin, Clock, ArrowRight, 
  Send, MessageSquare, CheckCircle2, Calendar
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = z.infer<typeof contactFormSchema>;

// Success steps for contact process
const contactSteps = [
  {
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    title: "Kirim Pesan",
    description: "Isi form kontak dengan detail proyek Anda"
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    title: "Konfirmasi",
    description: "Tim kami akan memverifikasi informasi Anda"
  },
  {
    icon: <Calendar className="w-5 h-5 text-white" />,
    title: "Konsultasi",
    description: "Jadwalkan konsultasi dengan tim desain kami"
  },
  {
    icon: <Send className="w-5 h-5 text-white" />,
    title: "Proposal",
    description: "Kami berikan proposal sesuai kebutuhan Anda"
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  // Initialize the form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      
      if (response.ok) {
        setIsSuccess(true);
        
        toast({
          title: "Pesan terkirim!",
          description: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
          variant: "default",
        });
        
        // Reset the form after successful submission
        form.reset();
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (error) {
      toast({
        title: "Gagal mengirim pesan",
        description: error instanceof Error ? error.message : "Terjadi kesalahan yang tidak diketahui.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFD700]/10 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Hubungi Kami
              </motion.h1>
              <motion.div 
                className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p 
                className="text-[#4A4A4A] max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hubungi kami untuk diskusi tentang proyek Anda atau kunjungi studio kami untuk konsultasi langsung.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Process Steps */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Proses Konsultasi</h2>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Kami memastikan proses yang transparan dan efisien untuk setiap konsultasi
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-md z-10 relative">
                        {step.icon}
                      </div>
                      
                      {/* Connecting line */}
                      {index < contactSteps.length - 1 && (
                        <div className="absolute top-1/2 left-full w-full h-0.5 bg-[#FFD700]/30 -translate-y-1/2 hidden lg:block"></div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
                    <p className="text-[#4A4A4A] text-center text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Contact Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent z-0"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Form Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="p-8 md:p-12 lg:col-span-3 relative"
                >
                  {/* Success message overlay */}
                  {isSuccess && (
                    <motion.div 
                      className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-50 p-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">Pesan Terkirim!</h3>
                      <p className="text-[#4A4A4A] text-center mb-6">
                        Terima kasih telah menghubungi kami. Tim kami akan segera merespons dalam 1-2 hari kerja.
                      </p>
                      <Button 
                        onClick={() => setIsSuccess(false)}
                        className="bg-[#FFD700] text-[#333333]"
                      >
                        Tutup
                      </Button>
                    </motion.div>
                  )}
                
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Kirim Pesan</h2>
                    <div className="w-16 h-1 bg-[#FFD700] mb-6"></div>
                    <p className="text-[#4A4A4A]">
                      Ceritakan tentang proyek Anda, dan tim kami akan menghubungi Anda untuk diskusi lebih lanjut.
                    </p>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-[#4A4A4A]">Nama Lengkap</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Masukkan nama lengkap Anda" 
                                  className="w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-[#FFD700] focus:border-[#FFD700]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-[#4A4A4A]">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Masukkan alamat email Anda" 
                                  className="w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-[#FFD700] focus:border-[#FFD700]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-[#4A4A4A]">Nomor Telepon</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  placeholder="Masukkan nomor telepon Anda" 
                                  className="w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-[#FFD700] focus:border-[#FFD700]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-[#4A4A4A]">Jenis Proyek</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-[#FFD700] focus:border-[#FFD700]">
                                    <SelectValue placeholder="Pilih Jenis Proyek" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="residential">Residensial</SelectItem>
                                  <SelectItem value="commercial">Komersial</SelectItem>
                                  <SelectItem value="interior">Interior</SelectItem>
                                  <SelectItem value="furniture">Furniture</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#4A4A4A]">Pesan</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={6} 
                                placeholder="Ceritakan tentang proyek Anda" 
                                className="w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-[#FFD700] focus:border-[#FFD700]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full md:w-auto bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded-lg hover:bg-[#FFD700]/90 transition-colors shadow-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#333]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Mengirim...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Kirim Pesan
                              <Send className="ml-2 h-4 w-4" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </motion.div>
                
                {/* Contact Info Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="lg:col-span-2 bg-[#222222] text-white p-8 md:p-12"
                >
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Informasi Kontak</h2>
                    <div className="w-16 h-1 bg-[#FFD700] mb-6"></div>
                    <p className="text-gray-300">
                      Anda juga dapat menghubungi kami secara langsung melalui informasi kontak berikut.
                    </p>
                  </div>
                  
                  <div className="space-y-8 mb-12">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center mr-5 shadow-md">
                        <PhoneCall className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-gray-100">Telepon</h3>
                        <p className="text-gray-300">+62 21 1234 5678</p>
                        <p className="text-gray-300">+62 812 3456 7890</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center mr-5 shadow-md">
                        <Mail className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-gray-100">Email</h3>
                        <p className="text-gray-300">info@diegma.com</p>
                        <p className="text-gray-300">contact@diegma.com</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center mr-5 shadow-md">
                        <MapPin className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-gray-100">Alamat Studio</h3>
                        <p className="text-gray-300">
                          Jl. Kemang Raya No. 123<br />
                          Jakarta Selatan, 12730<br />
                          Indonesia
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center mr-5 shadow-md">
                        <Clock className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-gray-100">Jam Operasional</h3>
                        <p className="text-gray-300">
                          Senin - Jumat: 09:00 - 17:00<br />
                          Sabtu: 09:00 - 14:00<br />
                          Minggu: Tutup
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href="https://goo.gl/maps/your-location" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium text-[#FFD700] hover:text-[#FFD700]/80 transition-colors"
                    >
                      Lihat di Google Maps
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Lokasi Kami</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Kunjungi studio kami di lokasi berikut
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full h-[500px] rounded-t-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2834932528575!2d106.81308937461082!3d-6.226299993773899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f37bccf351%3A0x82de20c2dbd8ec5!2sKemang%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1684151339634!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="DIEGMA Studio Location"
            ></iframe>
          </motion.div>
        </section>
        
        {/* CTA Section with background image */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
              alt="Office environment" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Kunjungi Studio Kami
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <motion.p 
                className="text-white/80 mb-10 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Kami mengundang Anda untuk mengunjungi studio kami dan melihat langsung portofolio, sampel material, 
                dan berbicara langsung dengan tim desainer kami.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-[#FFD700] text-[#333333] font-medium py-4 px-10 rounded-md shadow-md hover:bg-[#FFD700]/90 transition-colors"
                >
                  Jadwalkan Kunjungan
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}