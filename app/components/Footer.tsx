export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 text-sm text-brand-cream/80">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
        <p>© {new Date().getFullYear()} Hudson Smart Installs</p>

        <nav className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-brand-orange">Privacy</a>
          <a href="/terms" className="hover:text-brand-orange">Terms</a>

          {/* ⭐ GOOGLE REVIEW BUTTON */}
          <a
            href="https://search.google.com/local/writereview?placeid=TU_PLACE_ID_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange"
          >
            ⭐ Leave a Review
          </a>
        </nav>
      </div>
    </footer>
  );
}

  