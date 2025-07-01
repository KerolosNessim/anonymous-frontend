
import { IoWarning } from "react-icons/io5";

export default function AlertWarning({ children }) {
  return (
    <div  className="rounded-xl border-yellow-500 text-yellow-800 bg-yellow-50 p-6">
      <div className="flex items-center gap-2">
        <IoWarning size={20} className=" text-yellow-700" />
        <div className="text-bold text-lg font-bold font-[family-name:var(--font-fira)]">{children}</div>
      </div>
    </div>
  );
}