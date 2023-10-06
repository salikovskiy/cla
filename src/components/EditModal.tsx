import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { SelectCla } from "./SelectCLA";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EditModal({ name }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="hover:underline">Edit</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit {name}</DialogTitle>
                    <DialogDescription>
                        <h3 className="mt-4 text-black">Choose a CLA</h3>
                        <p className="text-[13px]">
                            (please note that changing the CLA results in a new request to sign the
                            CLA from the contributors!)
                        </p>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                    <div className="flex flex-col gap-2">
                        <SelectCla />
                        <p className="text-[13px]">- or -</p>
                        <Label htmlFor="gist">Paste a URL from a Gist</Label>
                        <Input
                            id="gist"
                            defaultValue="https://gist.github.com/CLAassistant/bd1ea8ec8aa0357414e8"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
