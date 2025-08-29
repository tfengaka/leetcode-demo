import { EditorContentType } from '@/components/editor/types';
import { ProblemDifficulty } from '@/enum/problem.enum';
import * as yup from 'yup';

export const UpsertProblemSchema = yup
  .object()
  .shape({
    title: yup.string().required(),
    descriptions: yup.object<EditorContentType>(),
    difficulty: yup
      .string()
      .oneOf([ProblemDifficulty.Easy, ProblemDifficulty.Medium, ProblemDifficulty.Hard])
      .required(),
    test_cases: yup
      .array()
      .of(
        yup.object().shape({
          input: yup.string(),
          expected_output: yup.string(),
          is_sample: yup.boolean().default(false),
        })
      )
      .required(),
  })
  .required();

export type UpsertProblemType = yup.InferType<typeof UpsertProblemSchema>;
