import { Dispatch, SetStateAction } from 'react';
import commit from '@common/types/commit';

export default interface commitsListProps {
  commits: commit[];
  setSelectedCommit: Dispatch<SetStateAction<string>>;
}
