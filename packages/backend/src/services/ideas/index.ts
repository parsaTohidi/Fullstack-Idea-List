import { getIdeas, addIdea } from '../../repository/idea';
import { validateIdea } from '../utils/validate';

export const createIdea = (idea: Omit<Idea, 'submittedAt'>) => {
  const validationResult = validateIdea(idea)
  if (validationResult) {
    throw validationResult
  }

  const withSubmittedDate = {
    ...idea,
    submittedAt: new Date(),
  };

  addIdea(withSubmittedDate);
};

export const readIdeas = getIdeas;
