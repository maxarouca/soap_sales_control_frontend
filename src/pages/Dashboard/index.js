import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import Card from 'components/Card';
import Modal from 'components/Modal';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { format, subDays, subMonths, startOfMonth } from 'date-fns';
import formatToMoney from 'util/formatToMoney';

import { LinearProgress, Button } from '@material-ui/core';
import api from '../../services/api';

const Dashboard = ({ headers }) => {
  const classes = useStyles();

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDateIn, handleDateChangeIn] = useState(new Date('01/01/2019'));
  const [selectedDateFor, handleDateChangeFor] = useState(new Date());

  async function loadData(startDate, endDate) {
    setLoading(true);
    const { data } = await api.get(
      `/tax?startDate=${format(startDate, 'MM/dd/yyyy')}&endDate=${format(
        endDate,
        'MM/dd/yyyy'
      )}&tax=6`,
      {
        ...headers,
      }
    );

    if (data) {
      if (data.message) {
        setState({
          rough: formatToMoney(0),
          aliquot: formatToMoney(0),
          tax: formatToMoney(0),
          profit: formatToMoney(0),
        });
        return setLoading(false);
      }
      setState(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData(selectedDateIn, selectedDateFor);
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const lastMonth = () => {
    const date = startOfMonth(new Date());
    const month = subMonths(date, 1);
    loadData(month, date);
  };

  const last30Days = () => {
    const date = subDays(new Date(), 30);
    loadData(date, selectedDateFor);
  };

  const lastSixMonths = () => {
    const date = startOfMonth(new Date());
    const month = subMonths(date, 6);
    loadData(month, date);
  };

  const lastYear = () => {
    const date = startOfMonth(new Date());
    const month = subMonths(date, 12);
    loadData(month, date);
  };

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
          onClick={lastMonth}
        >
          Mês anterior
        </Button>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={last30Days}
        >
          Últimos 30 dias
        </Button>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={lastSixMonths}
        >
          Últimos 6 meses
        </Button>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={lastYear}
        >
          Último ano
        </Button>
        <div className={classes.dateInputContainer}>
          <span>De:</span>
          <KeyboardDatePicker
            placeholder="10/10/2018"
            value={selectedDateIn}
            onChange={(date) => handleDateChangeIn(date)}
            format="dd/MM/yyyy"
            style={{ width: 150 }}
          />
        </div>
        <div className={classes.dateInputContainer}>
          <span>Até:</span>
          <KeyboardDatePicker
            placeholder="10/10/2018"
            value={selectedDateFor}
            onChange={(date) => handleDateChangeFor(date)}
            format="dd/MM/yyyy"
            style={{ width: 150 }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loadData(selectedDateIn, selectedDateFor)}
        >
          Filtrar
        </Button>
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
