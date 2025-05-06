import React from 'react';
import { AboutStatsItem } from '../../../models/common';

export const AboutStatsCard: React.FC<{ stats: AboutStatsItem }> = ({ stats }) => {
    return (
        <div className="w-1/2 p-[6px] flex gap-x-[6px] border border-white border-opacity-50 bg-white bg-opacity-20 rounded md:w-full md:p-2 md:gap-x-2 xl:rounded-md xl:p-3 xl:gap-x-3 2xl:rounded-lg 2xl:p-4 2xl:gap-x-4">
            <div className="w-1/4 p-2 h-fit bg-primary rounded md:w-[30%] md:p-3 lg:w-1/4 xl:p-2">
                <img
                    src={stats.icon}
                    alt={stats.title}
                />
            </div>
            <div className="flex-1 flex flex-col leading-none gap-y-[2px] md:gap-y-1 md:leading-normal">
                <h4 className="text-[10px] md:text-xs 2xl:text-sm">{stats.title}</h4>
                <p className="font-anton text-lg md:text-2xl xl:text-[28px] xl:leading-none 2xl:text-3xl">
                    {stats.count.toLocaleString()}+
                </p>
            </div>
        </div>
    );
};
