import {useState} from "react";

export function useFilter <T extends Array<unknown>>(values: T) {
    const [filter, setFilter] = useState<string>("");
    return [filter,setFilter, values.filter((value) => value?.toString().toLowerCase().includes(filter.toLowerCase())) as T] as const;
}