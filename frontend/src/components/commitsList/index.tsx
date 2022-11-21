import React from 'react';
import commitsListProps from './props';

const CommitsList = ({ commits }: commitsListProps) => {
  return (
    <div>
      {commits.map((commit, key) => (
        <div key={key}>{commit.sha}</div>
      ))}
    </div>
  );
};

export default CommitsList;
