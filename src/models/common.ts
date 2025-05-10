export type UserReview = {
    name: string;
    location: string;
    profilePicture: string;
    review: string;
    date: string;
};

export type Feature = {
    title: string;
    description: string;
    image: string;
};

export type Question = {
    question: string;
    description: string;
};

export type AboutStatsItem = {
    icon: string;
    title: string;
    count: number;
};

export type WorkingProcessStep = {
    icon: string;
    title: string;
    description: string;
};

export type TreasuryStatsItem = {
    icon: string;
    title: string;
    amount: number;
};

export type FundingSource = {
    name: string;
    type: string;
    amount: number;
};

export type Expense = {
    type: string;
    amount: number;
    color: string;
    icon: string;
};

export type FundingData = {
    sources: FundingSource[];
    expenses: Expense[];
};
