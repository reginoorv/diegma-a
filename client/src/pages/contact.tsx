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
import { PhoneCall, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        toast({
          title: "Pesan terkirim!",
          description: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
          variant: "default",
        });
        
        // Reset the form after successful submission
        form.reset();
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
        <div className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold font-serif mb-4">Hubungi Kami</h1>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Hubungi kami untuk diskusi tentang proyek Anda atau kunjungi studio kami untuk konsultasi langsung.
              </p>
            </motion.div>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold font-serif mb-6">Kirim Pesan</h2>
                <p className="text-[#4A4A4A] mb-8">
                  Ceritakan tentang proyek Anda, dan tim kami akan menghubungi Anda untuk diskusi lebih lanjut.
                </p>
                
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent" 
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent" 
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent" 
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
                                <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent">
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:mt-0 mt-8"
              >
                <h2 className="text-3xl font-bold font-serif mb-6">Informasi Kontak</h2>
                <p className="text-[#4A4A4A] mb-8">
                  Anda juga dapat menghubungi kami secara langsung melalui informasi kontak berikut.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                      <PhoneCall className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telepon</h3>
                      <p className="text-[#4A4A4A]">+62 21 1234 5678</p>
                      <p className="text-[#4A4A4A]">+62 812 3456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-[#4A4A4A]">info@diegma.com</p>
                      <p className="text-[#4A4A4A]">contact@diegma.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Alamat Studio</h3>
                      <p className="text-[#4A4A4A]">
                        Jl. Kemang Raya No. 123<br />
                        Jakarta Selatan, 12730<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Jam Operasional</h3>
                      <p className="text-[#4A4A4A]">
                        Senin - Jumat: 09:00 - 17:00<br />
                        Sabtu: 09:00 - 14:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://goo.gl/maps/your-location" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium hover:text-[#FFD700] transition-colors"
                  >
                    Lihat di Google Maps
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="w-full h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2834932528575!2d106.81308937461082!3d-6.226299993773899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f37bccf351%3A0x82de20c2dbd8ec5!2sKemang%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1684151339634!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold font-serif mb-6">Kunjungi Studio Kami</h2>
              <p className="text-[#4A4A4A] mb-8">
                Kami mengundang Anda untuk mengunjungi studio kami dan melihat langsung portofolio, sampel material, 
                dan berbicara langsung dengan tim desainer kami.
              </p>
              <Button className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                Jadwalkan Kunjungan
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}