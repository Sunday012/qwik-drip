"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

type FormDateProps = {
  label?: string;
  selectedValue: string;
  onSelect: (date: string) => void;
  className?: string;
};

export function FormDate({
  selectedValue,
  onSelect,
  className,
  label = "Pick a date",
}: FormDateProps) {
  const [date] = React.useState<Date>(new Date(selectedValue ?? new Date()));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !selectedValue && "text-muted-foreground",
          )}
        >
          {selectedValue ? format(selectedValue, "PPP") : <span>{label}</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={new Date(selectedValue)}
          onSelect={(date) => onSelect(date?.toISOString() ?? "")}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
        />
      </PopoverContent>
    </Popover>
  );
}
