import React from 'react';
import { DateTime } from 'luxon';
import commitsListProps from './props';
import styles from './styles.module.scss';

const CommitsList = ({ commits, setSelectedCommit }: commitsListProps) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Commit Author</th>
          <th>Creation date</th>
          <th>Commit Hash</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {commits.map(commit => (
          <tr key={commit.sha} className={styles.listItem}>
            <td>
              {commit.commit.author.name} ({commit.commit.author.email})
            </td>
            <td>
              {DateTime.fromISO(commit.commit.author.date).toFormat(
                'dd LLLL yyyy',
              )}
            </td>
            <td>{commit.sha}</td>
            <td className={styles.buttonsContainer}>
              <a href={commit.html_url} target="_blank" rel="noreferrer">
                View Online
              </a>
              <button
                className={styles.showMessage}
                onClick={() => setSelectedCommit(commit)}
              >
                ▼
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommitsList;
