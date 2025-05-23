import { MenuItem } from '../models/menu-item';

export const Pages = {
    ROOT: '/',
    HOME: '/',
    ABOUT_US: '/about-us',
};

// TODO: Vaibhav Maheshwari please update this URL
export const LAUNCH_APP_URL = '/';

// TODO: Vaibhav Maheshwari please update these URLs
export const SocialHandleLinks = {
    LINKEDIN: '/',
    INSTAGRAM: '/',
    FACEBOOK: '/',
};

export const menuItems: MenuItem[] = [
    {
        link: Pages.HOME,
        title: 'Home',
    },
    {
        link: Pages.ABOUT_US,
        title: 'About Us',
    },
    {
        link: LAUNCH_APP_URL,
        title: 'Launch App',
        isOutsideLink: true,
    },
];

// TODO: Vaibhav Maheshwari please update this
export const ZAPPER_ID = '0x86b06319b906e61631f7edbe5a3fe2edb95a3fae';
export const ZAPPER_URL = '';

// TODO: Vaibhav Maheshwari please update the video id here once we've demo video ready
export const APP_DEMO_YT_VIDEO = 'kFoXEwyOlbE';

// TODO: Vaibhav Maheshwari please update this URL
export const DISCORD_URL = '';
