"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, MessageCircle, FileText, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const WorkPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We document climate stories through multiple mediums, giving voice to
            those most affected by water disasters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-16 w-16 text-primary/60" />
                </div>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Video className="h-4 w-4 text-primary" />
                  Video Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Short documentary-style videos capturing personal experiences
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-secondary/20">
              <CardHeader>
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-16 w-16 text-secondary/60" />
                </div>
                <CardTitle className="font-serif flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-secondary" />
                  Voice Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Raw, unfiltered audio testimonies from the community
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-accent/20">
              <CardHeader>
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-16 w-16 text-accent/60" />
                </div>
                <CardTitle className="font-serif flex items-center gap-2">
                  <FileText className="h-4 w-4 text-accent" />
                  Written Testimonies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed written accounts of flood experiences
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-destructive/20">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-16 w-16 text-destructive/60" />
                </div>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Heart className="h-4 w-4 text-destructive" />
                  Community Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Direct fundraising for affected families
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link href="/our-work">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Explore All Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
