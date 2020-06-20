import React, {useState} from "react";
import s from './Repairs.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch'

        },
    },
}));

const Repairs = (props) => {

    const classes = useStyles();
    const [showTable, setShowTable] = useState(false)
    const [phoneCurrency, setPhoneCurrency] = useState('Телефон');
    const [malfunctionCurrency, setMalfunctionCurrency] = useState('Неисправность');

    const handleChangePhone = (event) => {
        setPhoneCurrency(event.target.value);
    };

    const handleChangeMalfunction = (event) => {
        setMalfunctionCurrency(event.target.value);
    };

    let searchPhone = () => {
        props.searchRepairs(malfunctionCurrency, phoneCurrency);
        setShowTable(true);
    }

    let createData = (name, model, price, _id) => {
        return {name, model, price, _id};
    }

    const rows = [];

    props.repairs.map(item => {
        rows.push(createData(item.name.toUpperCase(), item.model, item.price, item._id))
    })

    return <div className={s.wrapperRepairs}>
        <div className={s.buttonsAndSearchForm}>
            <div className={s.searchForm}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Выберите телефон"
                        value={phoneCurrency}
                        onChange={handleChangePhone}
                        variant="outlined"
                    >
                        {props.currenciesPhone.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Выберите неисправность"
                        value={malfunctionCurrency}
                        onChange={handleChangeMalfunction}
                        variant="outlined"
                    >
                        {props.malfunctionPhone.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <Button variant="contained" color="secondary" onClick={searchPhone}>Найти</Button>
            </div>
        </div>

        {!showTable ?
            <div className={s.titleRepairs}>
                <h2>Выберите телефон и неисправность, чтобы посмотреть цену на ремон!</h2>
            </div>
             :
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'><h2>Телефон:</h2></TableCell>
                            <TableCell align='center'><h2>Модель:</h2></TableCell>
                            <TableCell align='right'><h2>Цена:</h2></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell align='left'><h4>{row.name}</h4></TableCell>
                                <TableCell align='center'><h4>{row.model}</h4></TableCell>
                                <TableCell align='right'><h4>{row.price} руб.</h4></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        }
    </div>
}

export default Repairs;
