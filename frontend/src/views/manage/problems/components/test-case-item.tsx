import { Control, FieldValues, useController } from 'react-hook-form';
import { CreateProblemFormType } from './create-form';
import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { IconTrash, IconTrashFilled } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

type TestCaseItemProps = {
  index: number;
  control: Control<CreateProblemFormType>;
  onRemove?: () => void;
  onChange?: () => void;
};
export default function TestCaseItem({ control, index, onRemove }: TestCaseItemProps) {
  const { field: fieldIsSample } = useController({
    control,
    name: `test_cases.${index}.is_sample`,
    defaultValue: false,
  });

  const { field: fieldInput } = useController({
    control,
    name: `test_cases.${index}.input`,
    defaultValue: '',
  });

  const { field: fieldOutput } = useController({
    control,
    name: `test_cases.${index}.expected_output`,
    defaultValue: '',
  });

  return (
    <div className="flex items-center gap-2 shrink-0">
      <Button
        size="icon"
        variant="ghost"
        disabled={index === 0}
        className="rounded-full text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer"
        onClick={onRemove}
      >
        <IconTrash className="size-5" />
      </Button>
      <Input className="w-fit" placeholder="Input" {...fieldInput} />
      <Input className="w-fit" placeholder="Expected output" {...fieldOutput} />
      <div className="flex items-center gap-2 shrink-0">
        <Checkbox
          id={`test_cases.${index}.is_sample`}
          checked={fieldIsSample.value}
          onCheckedChange={(checked) => {
            fieldIsSample.onChange(checked === true);
          }}
        />
        <label
          htmlFor={`test_cases.${index}.is_sample`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Sample
        </label>
      </div>
    </div>
  );
}
