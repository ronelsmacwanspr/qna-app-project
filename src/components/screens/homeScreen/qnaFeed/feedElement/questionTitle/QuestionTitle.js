// title of question , give  32% height
import styles from './styles.module.css';
import { generateText } from '@/utils';
import { useEffect, useState, useRef } from 'react';

export default function QuestionTitle({questionTitle , limit}){

    return (
        <div className={styles.questionTitle}>
            {questionTitle}
        </div>
    )
}