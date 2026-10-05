import { BulbIcon } from "../../components/ui/LineIcons";
import { ActionBar, Disclaimer, ResultPlaceholder, Verdict } from "../../components/ui/ToolKit";
import { ipReport, type IpAnswers, type IpRoute } from "../../config/ipGuidance";
import IpRouteCard from "./IpRouteCard";
import PatentTimeline from "./PatentTimeline";

type IpResultsProps = {
  answers: IpAnswers;
  routes: IpRoute[] | null;
  onAsk: () => void;
};

/** Right column of IP Guidance: the ranked protection plan. */
export default function IpResults({ answers, routes, onAsk }: IpResultsProps) {
  if (!routes) {
    const answered = [answers.assets.length > 0, answers.disclosed, answers.classical, answers.applicant, answers.market].filter(Boolean).length;
    return (
      <div className="space-y-3">
        <ResultPlaceholder
          icon={<BulbIcon size={28} strokeWidth={1.6} />}
          title="Your protection plan appears here"
          body="Answer the five questions to see which kinds of IP fit, what they cost and how to file."
        />
        <div className="rounded-full bg-[#ecebe3]" role="progressbar" aria-valuemin={0} aria-valuemax={5} aria-valuenow={answered} aria-label="Questions answered">
          <div className="h-2 rounded-full bg-ayur-green transition-[width] duration-300" style={{ width: `${(answered / 5) * 100}%` }} />
        </div>
        <p className="text-center text-[12.5px] text-ayur-muted">{answered} of 5 answered</p>
      </div>
    );
  }

  const strong = routes.filter((r) => r.fit === "strong");
  const usable = routes.filter((r) => r.fit !== "unsuitable");
  const patent = routes.find((r) => r.id === "patent" && r.fit !== "unsuitable");
  const tone = strong.length ? "green" : usable.length ? "amber" : "red";

  return (
    <div className="space-y-4" aria-live="polite">
      <Verdict
        tone={tone}
        eyebrow="Your protection plan"
        title={usable.length ? `Start with: ${usable[0].name}` : "No registrable right fits yet"}
      >
        {usable.length
          ? `${usable.length} of ${routes.length} route${routes.length === 1 ? "" : "s"} can protect what you described. Open each one for fees, timelines and filing steps.`
          : "Based on your answers, the main rights aren't available. A trademark on your brand is usually still possible: add 'A brand name or logo' above."}
      </Verdict>

      <div className="space-y-3">
        {routes.map((route, i) => (
          <IpRouteCard key={route.id} route={route} defaultOpen={i === 0 && route.fit !== "unsuitable"} />
        ))}
      </div>

      {patent && <PatentTimeline />}

      <ActionBar report={ipReport(answers, routes)} filename="ayurip-ip-protection-plan.txt" askLabel="Ask AI for a filing strategy" onAsk={onAsk} />
      <Disclaimer>
        Fees are indicative official e-filing fees and change with fee revisions: verify them on ipindia.gov.in. This plan is general guidance, not legal advice;
        a registered patent or trademark agent can confirm it for your case.
      </Disclaimer>
    </div>
  );
}
