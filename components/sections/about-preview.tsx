"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Video, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const AboutPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Who We Are
          </h2>
        </motion.div>

        {/* Logo and Text Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Logo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="Darya aur Dastaan Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Darya aur Dastaan is a Lahore-based, <span className="font-semibold text-foreground">women-centred</span> climate storytelling initiative
              that documents how ordinary people, especially women, experience <span className="font-semibold text-foreground">floods</span> and <span className="font-semibold text-foreground">water disasters</span>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Through short videos, voice notes, written testimonies, and <span className="font-semibold text-foreground">community-driven fundraising</span>,
              we create visibility for the human and emotional realities of flooding in Lahore.
            </p>
            <div>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="font-serif">Community-Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stories collected directly from affected communities, ensuring authentic
                representation and genuine voices
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Video className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="font-serif">Multi-Media</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Videos, voice notes, and written testimonies capture the full depth
                of human experiences
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Heart className="h-10 w-10 text-accent mb-4" />
              <CardTitle className="font-serif">Direct Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Community fundraising that provides immediate relief to those
                in need during crises
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
