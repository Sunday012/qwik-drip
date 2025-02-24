"use client";

import { useId, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

export function FormSelect({
  label,
  items,
  selectedValue,
  onSelect,
  showSearch = false,
}: {
  label: string;
  items: {
    value: string;
    label: string;
  }[];
  selectedValue: string;
  onSelect: (value: string) => void;
  showSearch?: boolean;
}) {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
          >
            <span
              className={cn(
                "truncate",
                !selectedValue && "text-muted-foreground",
              )}
            >
              {selectedValue
                ? items.find((item) => item.value === selectedValue)?.label
                : `Select ${label}`}
            </span>
            <ChevronDown
              size={16}
              strokeWidth={2}
              className="shrink-0 text-muted-foreground/80"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
          align="start"
        >
          <Command>
            {showSearch && <CommandInput placeholder="Search" />}
            <CommandList>
              <CommandEmpty>{`No ${label} found.`}</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      onSelect(
                        currentValue === selectedValue ? "" : currentValue,
                      );
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    {selectedValue === item.value && (
                      <Check size={16} strokeWidth={2} className="ml-auto" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
