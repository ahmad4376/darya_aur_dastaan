"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, MessageCircle, FileText, Heart, Play } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { TopControls } from "@/components/layout/top-controls";

export default function OurWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Spotlight />

        <TopControls />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Stories that matter, voices that deserve to be heard
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Types Overview */}
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
              How We Tell Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use multiple mediums to honor each person's unique way of sharing their experience
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
                    Short documentary-style videos capturing personal experiences with visual storytelling
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
                    Raw, unfiltered audio testimonies that preserve the emotional authenticity of each story
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
                    Detailed written accounts allowing for deep reflection and nuanced storytelling
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
                    Direct fundraising campaigns that provide immediate material relief to affected families
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recent testimonies from our community
            </p>
          </motion.div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center relative group cursor-pointer">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                    <Play className="h-10 w-10 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground font-medium">Click to watch featured story</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  [Featured Story Title]
                </CardTitle>
                <CardDescription className="text-base">
                  A powerful testimony from [Name], sharing her experience during the 2024 monsoon
                  floods in [Location]. Her story reveals the challenges families face when water
                  invades their homes and disrupts their livelihoods.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Story Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-6 w-6 text-primary ml-0.5" />
                      </div>
                    </div>
                    <Video className="h-16 w-16 text-primary/30" />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">
                      Story Title {i}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      [Name] • [Location] • Monsoon 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      A brief description of this story will appear here, giving readers
                      a glimpse into the experience shared by this community member.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Text */}
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
              Written Testimonies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In-depth written accounts that offer detailed perspectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0" />
                      <div>
                        <CardTitle className="font-serif text-xl mb-1">
                          Community Member {i}
                        </CardTitle>
                        <CardDescription>Lahore Resident • 2024</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic leading-relaxed line-clamp-6">
                      "This is where a detailed written testimony will be displayed. The story
                      will capture the emotional and human impact of flooding, sharing not just
                      what happened, but how it felt and what it meant for the family. These
                      accounts provide crucial context that helps others understand the full
                      scope of climate disasters beyond the headlines."
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 text-primary hover:text-primary/80 p-0"
                    >
                      Read full testimony →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Share Your Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you or someone you know has been affected by flooding in Lahore and would
              like to share your experience, we'd be honored to listen and amplify your voice.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
