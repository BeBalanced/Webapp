import PlanInstance from "@/components/plans/planInstance";
import LeftToAssign from "@/components/plans/leftToAssign";
export default function Plan() {
  return (
    <div className="space-y-4">
      <LeftToAssign />
      <PlanInstance />
    </div>
  );
}
