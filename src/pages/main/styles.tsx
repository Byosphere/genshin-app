import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    page: {
        width: '100%',
        height: '100%',
        marginTop: '8px'
    },
    flex: {
        display: 'flex',
        marginTop: '8px',
        "& > div": {
            flex: 1,
        },
        "& > div:first-child": {
            marginRight: '8px'
        }
    },
    img: {
        width: '32px',
        height: '32px',
    },
    identity: {
        display: 'flex',
        flexDirection: 'column',
        padding: '4px',
        '& > div': {
            marginTop: '8px'
        },
        '& > section': {
            display: 'flex',
            marginTop: '8px',
            "&>div": {
                flex: 1
            },
            "&>div:first-child": {
                marginRight: '8px'
            }
        }
    },
    title: {
        flex: 1
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        '&>*:first-child': {
            marginRight: '16px'
        }
    },
    chip: {
        width: 'calc(100% - 8px)',
        margin: '4px'
    }
});