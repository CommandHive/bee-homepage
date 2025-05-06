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
