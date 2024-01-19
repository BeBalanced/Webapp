import PlanInstance from "@/components/plan/planInstance";
import LeftToAssign from "@/components/plan/leftToAssign";
export default function Plan() {
  return (
    <div className="space-y-4">
      <LeftToAssign />
      <PlanInstance />
    </div>
  );
}
