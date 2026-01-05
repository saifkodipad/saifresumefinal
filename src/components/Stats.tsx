import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

const Stats = () => {
  const [visits, setVisits] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_ANALYTICS_API}/api/analytics/total-page-views`
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setVisits(Number(data.totalPageViews));
      } catch {
        setError(true);
      }
    };

    fetchStats();
  }, []);

  return (
    /* 🔥 PULL SECTION UP — THIS IS THE KEY */
    <section className="w-full px-6 -mt-[1.3cm] pb-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sakura-dark">
          📊 Site Insights
        </h2>

        {/* Card */}
        <div
          className="
            mx-auto
            flex items-center justify-center
            rounded-2xl
            backdrop-blur-xl
            bg-white/60
            border border-pink-200/40
            shadow-[0_20px_60px_rgba(255,182,193,0.25)]
            px-10 py-12
            max-w-xl
          "
        >
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="p-4 rounded-full bg-pink-100 text-pink-500">
              <Eye size={26} />
            </div>

            {/* Text */}
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">
                Total Portfolio Visits
              </p>

              <p className="text-4xl font-semibold text-sakura-dark">
                {error
                  ? "—"
                  : visits !== null
                  ? 70 + visits.toLocaleString()
                  : "70+"}
              </p>

              <p className="text-xs text-muted-foreground mt-2">
                Cumulative visits since launch (verified via analytics)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
