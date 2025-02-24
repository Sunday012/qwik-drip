import { useId } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

export default function FormSelect({
  label,
  items,
  selectedValue,
  onSelect,
}: {
  label: string;
  items: { value: string; label: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
}) {
  const id = useId();
  return (
    <div className="w-full">
      <Select defaultValue={selectedValue} onValueChange={onSelect}>
        <SelectTrigger
          id={id}
          className="w-full rounded-[16px] bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
        >
          <SelectValue
            placeholder={label}
            className={cn(!selectedValue && "text-muted-foreground")}
          />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
