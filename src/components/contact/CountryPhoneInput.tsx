"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Flags from "react-phone-number-input/flags";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { registerLocale, getName } from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { FiChevronDown, FiSearch } from "react-icons/fi";

registerLocale(enLocale);

type FlagComponent = (props: { className?: string; title?: string }) => React.JSX.Element;

interface CountryOption {
  code: string;
  name: string;
  dialCode: string;
}

const ALL_COUNTRIES: CountryOption[] = getCountries()
  .map((code) => ({
    code: code as string,
    name: getName(code as string, "en") ?? ((code as string) || ""),
    dialCode: `+${getCountryCallingCode(code)}`,
  }))
  .filter((c) => c.name)
  .sort((a, b) => a.name.localeCompare(b.name));

interface CountryPhoneInputProps {
  value: { countryCode: string; phone: string };
  onChange: (value: { countryCode: string; phone: string }) => void;
  placeholder?: string;
}

export default function CountryPhoneInput({
  value,
  onChange,
  placeholder = "300 1234567",
}: CountryPhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  const selected =
    ALL_COUNTRIES.find((c) => c.code === value.countryCode) ?? ALL_COUNTRIES[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_COUNTRIES;
    return ALL_COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase() === q ||
        c.code.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const Flag = selected
    ? (Flags[selected.code as keyof typeof Flags] as FlagComponent | undefined)
    : undefined;

  return (
    <div ref={rootRef} className="relative w-full">
      <div className="flex items-stretch overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors duration-200 focus-within:border-primary-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100">
        <button
          type="button"
          onClick={() => {
            setOpen((v) => !v);
            setQuery("");
          }}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex shrink-0 cursor-pointer items-center gap-2 border-r border-zinc-200 bg-zinc-100/80 px-3 py-2.5 transition-colors duration-200 hover:bg-zinc-100"
        >
          {Flag ? (
            <Flag className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover ring-1 ring-zinc-200" />
          ) : (
            <span className="h-3.5 w-5 rounded-[2px] bg-zinc-300" />
          )}
          <span className="flex items-center gap-1 text-sm font-medium text-zinc-700">
            {selected.dialCode}
            <FiChevronDown
              size={14}
              className={`text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </span>
        </button>
        <input
          type="tel"
          inputMode="tel"
          value={value.phone}
          onChange={(e) => {
            const digits = e.target.value.replace(/[^\d+\s()-]/g, "");
            onChange({ countryCode: value.countryCode, phone: digits });
          }}
          placeholder={placeholder}
          className="w-full min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400"
        />
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-[280px] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.16)]">
          <div className="flex items-center gap-2 border-b border-zinc-100 px-3.5 py-2.5">
            <FiSearch size={15} className="shrink-0 text-zinc-400" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code..."
              className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
            />
          </div>
          <ul
            role="listbox"
            className="scrollbar-hide max-h-60 overflow-y-auto py-1"
          >
            {filtered.length === 0 && (
              <li className="px-3.5 py-3 text-sm text-zinc-400">
                No country matches “{query}”.
              </li>
            )}
            {filtered.map((c) => {
              const CFlag = Flags[c.code as keyof typeof Flags] as
                | FlagComponent
                | undefined;
              return (
                <li key={c.code}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange({ countryCode: c.code, phone: value.phone });
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`flex w-full cursor-pointer items-center gap-3 px-3.5 py-2.5 text-left transition-colors duration-150 ${
                      c.code === value.countryCode
                        ? "bg-primary-100/70"
                        : "hover:bg-zinc-50"
                    }`}
                  >
                    {CFlag ? (
                      <CFlag className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover ring-1 ring-zinc-200" />
                    ) : (
                      <span className="h-3.5 w-5 shrink-0 rounded-[2px] bg-zinc-300" />
                    )}
                    <span
                      className={`flex-1 truncate text-sm ${
                        c.code === value.countryCode
                          ? "font-semibold text-primary-700"
                          : "text-zinc-700"
                      }`}
                    >
                      {c.name}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-zinc-400">
                      {c.dialCode}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}