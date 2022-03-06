import React, { useEffect } from 'react';
import { isConstructorDeclaration } from 'typescript';
import {shuffleArray} from './utils'

export type Question = {
    category: string
    difficulty: string;
    question: string;
    multiple_correct_answers: boolean;
    correct_answers: string[];
    correct_answer: string;
    answers: string[];
}

export enum Difficulty {
    Easy= "Easy",
    Medium= "Medium",
    Hard = "Hard",
    random= ""
}

export enum Category {
    Linux= "Linux",
    Bash= "Bash",
    Uncategorized= "Uncategorized",
    Docker= "Docker",
    SQL= "SQL",
    CMS= "CMS",
    Code= "Code",
    DevOps= "DevOps",
    random= ""
}

export const fetchQuiz = async(limit: number, difficulty: Difficulty, category: Category) => {
    const endpoint = `https://quizapi.io/api/v1/questions?apiKey=ppfjOl7xFKTLSOrSmTyIhVavlafjxdGVEPo0BqDA&category=${category}&difficulty=${difficulty}&limit${limit}`
    const res= await fetch(endpoint);
    const data = res.json();
    return data;
}


