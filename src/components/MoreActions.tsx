import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MoreActions() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="hover:underline">More</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px]">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span>Import</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Recheck PRs</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Get Badge</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Unlink</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
