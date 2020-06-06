import { Theme } from '@material-ui/core';

interface WithTheme {
    theme: Theme;
};

export type MediaQuery = ({ theme }: WithTheme) => string;

interface DeviceQueries {
    mobile: MediaQuery;
    tablet: MediaQuery;
    desktop: MediaQuery; 
}

export const deviceQueries: DeviceQueries = {
    mobile: ({ theme }) => theme.breakpoints.down('sm'),
    tablet: ({ theme }) => theme.breakpoints.between("sm", "md"),
    desktop: ({ theme }) => theme.breakpoints.up("md"),
};