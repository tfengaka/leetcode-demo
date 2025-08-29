import TipTapEditor from '@/components/editor/editor';
import { EditorContentType } from '@/components/editor/types';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProblemDifficulty } from '@/enum/problem.enum';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconDeviceFloppy, IconPlus } from '@tabler/icons-react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import TestCaseItem from './test-case-item';
import { SelectWithForm } from '@/components/ui/select';
import { Test_Cases_Constraint, Test_Cases_Update_Column, useCreateProblemMutation } from '@/graphql';
import SwirlingSpinner from '@/components/common/swirling-spinner';
import { toast } from 'sonner';
import { UpsertProblemSchema, UpsertProblemType } from '../types';

export default function CreateProblemForm() {
  const form = useForm<UpsertProblemType>({
    resolver: yupResolver(UpsertProblemSchema),
    defaultValues: {
      title: '',
      descriptions: { type: 'doc', content: [] },
      difficulty: ProblemDifficulty.Easy,
      test_cases: [{ input: '', expected_output: '', is_sample: false }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'test_cases',
  });

  const [createProblem, { loading }] = useCreateProblemMutation();

  function onSubmit(data: UpsertProblemType) {
    createProblem({
      variables: {
        object: {
          title: data.title,
          descriptions: data.descriptions,
          difficulty: data.difficulty,
          test_cases: {
            data: data.test_cases,
            on_conflict: {
              constraint: Test_Cases_Constraint.TestCasesPkey,
              update_columns: [
                Test_Cases_Update_Column.Input,
                Test_Cases_Update_Column.ExpectedOutput,
                Test_Cases_Update_Column.IsSample,
              ],
            },
          },
        },
      },
    })
      .then(() => {
        toast.success('Problem created successfully');
      })
      .catch((err) => {
        toast.error(`Failed to create problem: ${err.message}`);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Create Problem</h2>
            <p className="text-muted-foreground">Fill out the form below to create a new problem.</p>
          </div>
          <Button type="submit" className="space-x-1 cursor-pointer">
            {loading ? (
              <>
                <span>Creating</span> <SwirlingSpinner />
              </>
            ) : (
              <>
                <span>Create</span> <IconPlus size={18} />
              </>
            )}
          </Button>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter problem title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SelectWithForm<UpsertProblemType>
              name="difficulty"
              title="Difficulty"
              className="w-full"
              options={[
                { id: ProblemDifficulty.Easy, name: 'Easy' },
                { id: ProblemDifficulty.Medium, name: 'Medium' },
                { id: ProblemDifficulty.Hard, name: 'Hard' },
              ]}
            />

            <FormField
              control={form.control}
              name="descriptions"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Descriptions</FormLabel>
                  <FormControl>
                    <TipTapEditor
                      content={field.value as EditorContentType}
                      onChange={(val) => field.onChange(val)}
                      placeholder="Write your problem description here..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormLabel>Test Cases</FormLabel>
              <div className="flex flex-col gap-4 pl-4 mt-4">
                {fields.map((_, index) => (
                  <TestCaseItem key={_.id} index={index} control={form.control} onRemove={() => remove(index)} />
                ))}
              </div>
              <Button
                type="button"
                className="w-fit mt-4 gap-1 px-3.5 font-semibold cursor-pointer"
                onClick={() => append({ input: '', expected_output: '', is_sample: false })}
              >
                <IconPlus className="size-4" />
                Add More
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
