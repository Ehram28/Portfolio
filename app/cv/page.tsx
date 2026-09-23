import Link from "next/link";

const resumePath = "/resume/rizwan-ahmed-cv.pdf";

export default function CvPage() {
  return (
    <section className="section-divider relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="section-shell relative py-12">
        <div className="glass-panel p-4 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="section-kicker">Curriculum Vitae</p>
              <h1 className="mt-3 text-2xl md:text-3xl">Rizwan Ahmed CV</h1>
              <p className="mt-2 text-sm text-zinc-300">
                View the CV directly here or download the PDF.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="button-outline"
              >
                Open PDF
              </Link>
              <Link
                href="/api/download-resume"
                className="button-primary"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-surface-950/55">
            <iframe
              src={resumePath}
              title="Rizwan Ahmed CV"
              className="h-[75vh] min-h-[520px] w-full"
            />
          </div>

          <p className="mt-3 text-xs text-zinc-400">
            If the embedded preview does not load, use Open PDF or Download CV.
          </p>
        </div>
      </div>
    </section>
  );
}
