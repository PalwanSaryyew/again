

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Arzandan Gymmada</SelectItem>
          <SelectItem value="banana">Gymmatdan Arzana</SelectItem>
          <SelectItem value="blueberry">Köpden Aza</SelectItem>
          <SelectItem value="grapes">Azdan köpe</SelectItem>
          <SelectItem value="pineapple">Meşgurlyga Görä</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
