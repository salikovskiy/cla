import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarEl() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>US</AvatarFallback>
        </Avatar>
    );
}
