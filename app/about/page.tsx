"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Video, Heart, Target, Eye, Lightbulb } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TopControls } from "@/components/layout/top-controls";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Spotlight />

        <TopControls />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Climate justice starts with listening
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Users className="h-24 w-24 text-primary/40" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Darya aur Dastaan is a <span className="font-semibold text-foreground">storytelling and relief initiative</span> that documents the lived experiences of people, especially <span className="font-semibold text-foreground">women</span>, affected by water-related climate disasters across <span className="font-semibold text-foreground">Pakistan</span>.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We centre women's voices because they carry the heaviest physical and emotional burden when floods enter homes. Our goal is to create a space where those experiences can finally be heard.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                People had powerful, painful stories, but no platform that respected their dignity or centred their perspectives. We gather short videos, WhatsApp voice notes, photos, and written testimonies to build a collective archive of how water shapes lives.
              </p>
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <Card className="border-primary/20">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To document and amplify the lived experiences of people affected by
                  water-related climate disasters across Pakistan, with a focus on centering women's voices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <Eye className="h-10 w-10 text-secondary mb-4" />
                <CardTitle className="font-serif text-2xl">Our Belief</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Climate justice starts with listening. We create a space where those experiences
                  can finally be heard and respected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-serif text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Authenticity, dignity, transparency, gender justice, and
                  compassionate storytelling guide everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The people behind Darya aur Dastaan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-primary/20 hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-center">Iman Nadeem</CardTitle>
                  <CardDescription className="text-center font-medium">Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed text-center">
                    Political Science student at LUMS, environmental advocate, and feminist voice who saw a gap in how we talk about climate impacts. Founded the initiative in 2025 with a simple idea: collect these stories, preserve them, and support the families who share them.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-secondary/20 hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-secondary" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-center">Abdul Hafeez</CardTitle>
                  <CardDescription className="text-center font-medium">Co-Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed text-center">
                    Accounting & Finance student at LUMS who joined shortly after the initiative's founding to strengthen the project's operational and fundraising side. Supports the logistical and financial aspects, helping scale the initiative into a consistent, structured platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Women-Centered */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Women-Centred?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                We centre women's voices because they carry the <span className="font-semibold text-foreground">heaviest physical and emotional burden</span> when floods enter homes.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Women bear the brunt of care work, water collection, and household management during crises, yet their voices are often marginalized in climate discourse.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our goal is to create a space where those experiences can finally be heard, respected, and used to inform meaningful climate action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Heart className="h-24 w-24 text-secondary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building a collective archive while providing direct support
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="border-primary/20 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="font-serif">Collective Archive</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We gather short videos, WhatsApp voice notes, photos, and written testimonies to build a collective archive of how water shapes lives across Pakistan.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-secondary mb-4" />
                <CardTitle className="font-serif">Micro-Fundraising</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We run a micro-fundraising program to help affected families replace essential items such as bedding, clothing, and medicine. All cases are verified and shared transparently.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-serif">Dignity-Centred</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We prioritize consent, dignity, and authentic representation, creating a platform that respects the perspectives and experiences of those affected.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Climate Justice Starts with Listening
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join us in creating a space where marginalized voices are not just heard, but centered—where women's experiences of climate disasters are recognized as crucial knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Support Our Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Share Your Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
