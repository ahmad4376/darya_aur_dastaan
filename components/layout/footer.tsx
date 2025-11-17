export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl font-bold mb-4">Darya aur Dastaan</h3>
          <p className="text-primary-foreground/80 mb-6">
            Amplifying voices, documenting realities, supporting communities
          </p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 order-2 md:order-1">
            © {new Date().getFullYear()} Darya aur Dastaan. All rights reserved.
          </p>

          <div className="text-sm text-primary-foreground/70 order-1 md:order-2">
            <span className="inline-flex items-center gap-2">
              Designed & Developed by{" "}
              <span className="font-medium text-primary-foreground">Ahmad Bilal</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
