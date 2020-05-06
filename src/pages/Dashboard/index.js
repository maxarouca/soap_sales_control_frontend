import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import Card from 'components/Card';
import Modal from 'components/Modal';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { LinearProgress, Button } from '@material-ui/core';
import api from '../../services/api';

const Dashboard = ({ headers }) => {
  const classes = useStyles();

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    const { data } = await api.get(
      '/tax?startDate=2020-01-01&endDate=2020-11-31&tax=6',
      {
        ...headers,
      }
    );

    if (data) {
      setState(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(loading);

    loadData();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className={classes.root}>
      <div className={classes.headerPage}>
        <h1>Dashboard</h1>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Nova Venda
        </Button>
      </div>

      <div className={classes.filters}>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={handleClickOpen}
        >
          Ultimo Mês
        </Button>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={handleClickOpen}
        >
          Últimos 30 dias
        </Button>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={handleClickOpen}
        >
          Últimos 6 meses
        </Button>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={handleClickOpen}
        >
          Último ano
        </Button>
        <div className={classes.dateInputContainer}>
          <span>De:</span>
          <KeyboardDatePicker
            placeholder="10/10/2018"
            value={selectedDate}
            onChange={(date) => handleDateChange(date)}
            format="dd/MM/yyyy"
            style={{ width: 150 }}
          />
        </div>
        <div className={classes.dateInputContainer}>
          <span>Até:</span>
          <KeyboardDatePicker
            placeholder="10/10/2018"
            value={selectedDate}
            onChange={(date) => handleDateChange(date)}
            format="dd/MM/yyyy"
            style={{ width: 150 }}
          />
        </div>
      </div>

      {loading ? (
        <LinearProgress />
      ) : (
        <div className={classes.container}>
          <Card
            title="Total em Vendas"
            subtitle="Tudo o que foi vendido sem nenhum desconto"
            value={state.rough}
            icon="shopping_cart"
            color="0, 182, 255"
          />
          <Card
            title="Gastos em produtos"
            subtitle="Pagamento de alíquota de produtos"
            value={state.aliquot}
            icon="money_off"
            color="255, 55, 0"
          />
          <Card
            title="Gastos em impostos"
            subtitle="Pagamento dos impostos devidos"
            value={state.tax}
            icon="money_off"
            color="255, 153, 0"
          />
          <Card
            title="Lucro no Período"
            subtitle="Total recebido após todos os descontos"
            value={state.profit}
            icon="attach_money"
            color="4, 204, 70"
          />
        </div>
      )}
      <Modal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Dashboard;
