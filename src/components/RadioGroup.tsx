import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
    return (
        <RadioGroup defaultValue="option-one">
            <p className="font-medium leading-none mb-2">How do you sign?</p>
            <div className="flex font-light text-[13px] items-start space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <label htmlFor="option-one">
                    I am making Submissions on behalf of myself. I have sole ownership of
                    intellectual property rights to my Submissions.
                </label>
            </div>
            <div className="flex font-light text-[13px] items-start space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <label htmlFor="option-two">
                    I am making Submissions on behalf of my employer (or my employer has
                    intellectual property rights in my Submissions by contract or applicable law). I
                    have permission from my employer to make Submissions and enter into this
                    Agreement on behalf of my employer. By signing below, the defined term “You”
                    includes me and my employer.
                </label>
            </div>
        </RadioGroup>
    );
}
