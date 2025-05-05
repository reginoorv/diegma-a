import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema } from "@/lib/form-schema";
import { useToast } from "@/hooks/use-toast";

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

export function ContactForm() {
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
    <section id="konsultasi" className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-10">
                <h2 className="text-3xl font-bold font-serif mb-6">Konsultasikan Proyek Anda</h2>
                <p className="text-[#4A4A4A] mb-8">
                  Ceritakan tentang proyek Anda, dan tim kami akan menghubungi Anda untuk diskusi lebih lanjut.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#4A4A4A]">Pesan</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
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
                      className="w-full bg-[#FFD700] text-[#333333] font-medium py-3 px-6 rounded hover:bg-[#FFD700]/90 transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </form>
                </Form>
              </div>
              
              {/* Image Section */}
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5" 
                  alt="Interior design" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
