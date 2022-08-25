export type InputType = {
    type: string;
    name: string;
    placeholder: string;
    value: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}