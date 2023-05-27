import { Idea, errorType } from './idea';

/**
 * Validates that a submitted idea matches our requiremetns
 * @param idea
 */
export const validateIdea = ({ content,  submittedBy }: Idea): errorType | undefined => {

  if (!submittedBy) {
    return {
      code: 400,
      text: 'No submitter provided!'
    }
  }
  if (!content) {
    // Empty ideas are not useful
    return {
      code: 400,
      text: 'No content provided!'
    }
  }
  if (content.length < 10 || content.length > 400) {
    return {
      code: 400,
      text: 'content must be between 10 to 400 charachters!'
    }
  }
  if (submittedBy.toLowerCase() === 'peter') {
    // This guy's ideas should be ignored
    return {
      code: 402,
      text: 'You are not permitted!'
    };
  }
};
