import { AppBar, Button, Chip, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Toolbar, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useStyles } from "./styles";
import epee from '../../img/epee.png';
import claymore from '../../img/claymore.png';
import lance from '../../img/lance.png';
import catalyste from '../../img/catalyste.png';
import arc from '../../img/arc.png';
import anemo from '../../img/anemo.png';
import dendro from '../../img/dendro.png';
import pyro from '../../img/pyro.png';
import electro from '../../img/electro.png';
import cryo from '../../img/cryo.png';
import hydro from '../../img/hydro.png';
import geo from '../../img/geo.png';

export default function Main() {

    const classes = useStyles();
    const [degats, setDegats] = useState<number>(1);
    const [pv, setPv] = useState<number>(1);
    const [stats, setStats] = useState<string>('');
    const [vision, setVision] = useState<number>(1);

    function handleDegatsChange(event: ChangeEvent<HTMLInputElement>) {
        setDegats(Math.floor(parseInt(event.target.value || '0') / 4 + 1));
    }
    function handlePvChange(event: ChangeEvent<HTMLInputElement>) {
        setPv(Math.floor(parseInt(event.target.value || '0') / 2 + 1));
    }

    function handlePouvoirChange(event: ChangeEvent<HTMLInputElement>) {
        setVision(Math.floor(parseInt(event.target.value || '0') / 10));
    }

    function generateStats() {
        let values = [];
        for (let i = 0; i < 6; i++) {
            const v1 = Math.floor(Math.random() * 6 + 1);
            const v2 = Math.floor(Math.random() * 6 + 1);
            const v3 = Math.floor(Math.random() * 6 + 1);
            values.push((v1 + v2 + v3) * 5);
        }
        setStats(values.join(', '));
    }

    return (
        <div className={classes.page}>
            <AppBar position="relative">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Identity
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper className={classes.identity}>
                <TextField label='Name' variant='outlined' />
                <section>
                    <TextField label='Origin' variant='outlined' select>
                        <MenuItem value={0}>MondStadt</MenuItem>
                        <MenuItem value={1}>Liyue</MenuItem>
                        <MenuItem value={2}>Inazuma</MenuItem>
                        <MenuItem value={3}>Sumeru</MenuItem>
                        <MenuItem value={4}>Fontaine</MenuItem>
                        <MenuItem value={5}>Natlan</MenuItem>
                        <MenuItem value={6}>Snezhnaya</MenuItem>
                    </TextField>
                    <TextField label='Weapon' variant='outlined' select>
                        <MenuItem value={0}>
                            <span className={classes.menuItem}>
                                <img src={epee} alt='epee' className={classes.img} />
                                <Typography>Sword</Typography>
                            </span>
                        </MenuItem>
                        <MenuItem value={1}>
                            <span className={classes.menuItem}>
                                <img src={claymore} alt='claymore' className={classes.img} />
                                <Typography>Claymore</Typography>
                            </span>
                        </MenuItem>
                        <MenuItem value={2}>
                            <span className={classes.menuItem}>
                                <img src={lance} alt='lance' className={classes.img} />
                                <Typography>Spear</Typography>
                            </span>
                        </MenuItem>
                        <MenuItem value={3}>
                            <span className={classes.menuItem}>
                                <img src={catalyste} alt='catalyste' className={classes.img} />
                                <Typography>Catalyst</Typography>
                            </span>
                        </MenuItem>
                        <MenuItem value={4}>
                            <span className={classes.menuItem}>
                                <img src={arc} alt='arc' className={classes.img} />
                                <Typography>Bow</Typography>
                            </span>
                        </MenuItem>
                    </TextField>
                </section>
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </Paper>
            <div className={classes.flex}>
                <div>
                    <AppBar position="relative">
                        <Toolbar variant="dense">
                            <Typography className={classes.title} variant="h6" color="inherit">
                                Attributes
                            </Typography>
                            <Button color='secondary' onClick={generateStats}>Generate</Button>
                        </Toolbar>
                    </AppBar>
                    {stats && <Chip className={classes.chip} label={stats} variant="outlined" />}
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Strength
                                    </TableCell>
                                    <TableCell><TextField margin='dense' onChange={handleDegatsChange} /></TableCell>
                                    <TableCell align='right'>
                                        Damage : {degats}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Body
                                    </TableCell>
                                    <TableCell><TextField margin='dense' onChange={handlePvChange} /></TableCell>
                                    <TableCell align='right'>Health : {pv}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Intellect
                                    </TableCell>
                                    <TableCell><TextField margin='dense' /></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Power
                                    </TableCell>
                                    <TableCell><TextField margin='dense' onChange={handlePouvoirChange} /></TableCell>
                                    <TableCell align='right'>Vision points : {vision}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Dexterity
                                    </TableCell>
                                    <TableCell><TextField margin='dense' /></TableCell>
                                    <TableCell align='right'></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Charisma
                                    </TableCell>
                                    <TableCell><TextField margin='dense' /></TableCell>
                                    <TableCell align='right'></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div>
                    <AppBar position="relative">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Vision
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Paper className={classes.identity}>
                        <TextField label='Element' variant='outlined' select>
                            <MenuItem value={0}>
                                <span className={classes.menuItem}>
                                    <img src={anemo} alt='anemo' className={classes.img} />
                                    <Typography>Anemo</Typography>
                                </span>
                            </MenuItem>
                            <MenuItem value={1}>
                                <span className={classes.menuItem}>
                                    <img src={dendro} alt='dendro' className={classes.img} />
                                    <Typography>Dendro</Typography>
                                </span>
                            </MenuItem>
                            <MenuItem value={2}>
                                <span className={classes.menuItem}>
                                    <img src={pyro} alt='pyro' className={classes.img} />
                                    <Typography>Pyro</Typography>
                                </span>
                            </MenuItem>
                            <MenuItem value={3}>
                                <span className={classes.menuItem}>
                                    <img src={hydro} alt='hydro' className={classes.img} />
                                    <Typography>Hydro</Typography>
                                </span>
                            </MenuItem>
                            <MenuItem value={4}>
                                <span className={classes.menuItem}>
                                    <img src={cryo} alt='cryo' className={classes.img} />
                                    <Typography>Cryo</Typography>
                                </span>
                            </MenuItem>
                            <MenuItem value={5}>
                                <span className={classes.menuItem}>
                                    <img src={geo} alt='geo' className={classes.img} />
                                    <Typography>Geo</Typography>
                                </span>
                            </MenuItem>
                            <MenuItem value={6}>
                                <span className={classes.menuItem}>
                                    <img src={electro} alt='electro' className={classes.img} />
                                    <Typography>Electro</Typography>
                                </span>
                            </MenuItem>
                        </TextField>
                        <TextField multiline label='Ability' variant='outlined' rows={3} />
                        <TextField multiline label='Elemental brust' variant='outlined' rows={3} />
                    </Paper>
                </div>
            </div>
            <Paper className={classes.identity}>
                <AppBar position="relative">
                    <Toolbar variant="dense">
                        <Typography className={classes.title} variant="h6" color="inherit">
                            Inventory
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    multiline
                    rows={8}
                    variant="outlined"
                />
            </Paper>
        </div>
    );
}
