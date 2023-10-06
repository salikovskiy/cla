import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectCla() {
    return (
        <Select defaultValue="sap">
            <SelectTrigger className="w-full">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="no-cla">No CLA</SelectItem>
                    <SelectItem value="sap">
                        SAP Individual Contributor License Agreement
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
