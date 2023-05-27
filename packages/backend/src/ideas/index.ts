import { Idea } from './idea';
import { getIdeas, addIdea } from './persistence';
import { validateIdea } from './validate';

export const createIdea = (idea: Omit<Idea, 'submittedAt'>) => {
  const withSubmittedDate = {
    ...idea,
    submittedAt: new Date(),
  };

  const validationResult = validateIdea(withSubmittedDate)
  if (validationResult) {
    throw validationResult
  }

  addIdea(withSubmittedDate);
};

export const readIdeas = getIdeas;
