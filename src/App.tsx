import { AppBar, Chip, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AccountBox, Casino } from '@material-ui/icons';
import { useStyles } from './styles';
import Main from './pages/main/Main';
import React, { useState } from 'react';

function App() {
    const classes = useStyles();
    const [dice, setDice] = useState<number>(0);

    function handleRandom() {
        setDice(Math.floor(Math.random() * 100 + 1));
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <AccountBox />
                    <Typography variant="h6" className={classes.title}>
                        Character sheet
                    </Typography>
                    <IconButton color='secondary' onClick={handleRandom}><Casino /></IconButton>
                    <Chip label={dice} />
                </Toolbar>
            </AppBar>
            <Main />
        </div>
    );
}

export default App;
