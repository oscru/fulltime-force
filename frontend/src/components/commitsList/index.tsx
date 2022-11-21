import React from 'react';
import { DateTime } from 'luxon';
import commitsListProps from './props';
import styles from './styles.module.scss';

const CommitsList = ({ commits }: commitsListProps) => {
  return (
    <table className={styles.container}>
      <tr>
        <th>Commit Author</th>
        <th>Creation date</th>
        <th>Commit Hash</th>
        <th></th>
      </tr>
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
            <button className={styles.showMessage}>▼</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default CommitsList;
