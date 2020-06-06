import { Theme } from '@material-ui/core';

interface WithTheme {
    theme: Theme;
};

export const breakpoints = {
    mobile: ({ theme }: WithTheme) => theme.breakpoints.down('sm'),
    tablet: ({ theme }: WithTheme) => theme.breakpoints.between("sm", "md"),
    desktop: ({ theme }: WithTheme) => theme.breakpoints.up("md"),
};