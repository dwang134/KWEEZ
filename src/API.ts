import React, { useEffect } from 'react';

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
    const data= res.json();
    console.log(data);
}


