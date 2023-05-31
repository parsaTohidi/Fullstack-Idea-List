/**
 * An idea submitted to the app
 */
interface Idea {
  /**
   * Who submitted the idea
   */
  submittedBy: string;
  /**
   * When the idea was submitted
   */
  submittedAt: Date;
  /**
   * The idea that was submitted
   */
  content: string;
}

interface errorType {
  code: number,
  text: string
}