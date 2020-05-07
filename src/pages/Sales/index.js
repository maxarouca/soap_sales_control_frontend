import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import Modal from 'components/Modal';
import DataTable from 'components/DataTable';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { format, subDays, subMonths, startOfMonth } from 'date-fns';

import { LinearProgress, Button } from '@material-ui/core';
import api from '../../services/api';

const Sales = ({ headers }) => {
  const classes = useStyles();

  const [sales, setSales] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDateIn, handleDateChangeIn] = useState(new Date('01/01/2019'));
  const [selectedDateFor, handleDateChangeFor] = useState(new Date());

  async function loadData(startDate, endDate) {
    setLoading(true);
    if (startDate && endDate) {
      const { data } = await api.get(
        `/sales?startDate=${format(startDate, 'MM/dd/yyyy')}&endDate=${format(
          endDate,
          'MM/dd/yyyy'
        )}&tax=6`,
        {
          ...headers,
        }
      );
      if (data) {
        if (data.message) {
          setSales([]);
          return setLoading(false);
        }
        setSales(data.sales);
        return setLoading(false);
      }
    }
    const { data } = await api.get(`/sales`, {
      ...headers,
    });

    if (data) {
      if (data.message) {
        setSales([]);
        return setLoading(false);
      }
      setSales(data.sales);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDataToUpdate(null);
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

  const [dataToUpdate, setDataToUpdate] = useState(null);

  const receiveDataToUpdate = (data) => {
    // console.log(data);
    setDataToUpdate(data);
    setOpen(true);
  };

  const handleUpdate = async (id, data, date, total) => {
    const upData = {
      ...data,
      unitary_value: data.unitary_value.replace(/\,/g, '.'),
      date,
      total,
    };
    const res = await api.put(
      `/sales/${id}`,
      { ...upData },
      {
        ...headers,
      }
    );
    if (res.status === 200) {
      setOpen(false);

      loadData();
    }
  };

  const confirmPay = async (rowData) => {
    const upData = {
      ...rowData,
      is_pay: true,
    };
    const res = await api.put(
      `/sales/${rowData.id}`,
      { ...upData },
      {
        ...headers,
      }
    );
    if (res.status === 200) {
      setOpen(false);

      loadData();
    }
  };

  const handleDelete = async (id) => {
    const res = await api.delete(`/sales/${id}`, {
      ...headers,
    });
    if (res.status === 200) {
      loadData();
    }
  };

  const handleSubmit = async (data, date, total) => {
    const newData = {
      ...data,
      unitary_value: data.unitary_value.replace(/\,/g, '.'),

      date,
      total,
    };
    const res = await api.post(
      `/sales`,
      { ...newData },
      {
        ...headers,
      }
    );
    if (res.status === 200) {
      setOpen(false);

      loadData();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerPage}>
        <h1>Sales</h1>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickOpen}
        >
          Nova Venda
        </Button>
      </div>

      <div className={classes.filters}>
        <Button
          variant="contained"
          className={classes.filterButton}
          onClick={loadData}
        >
          Todos
        </Button>
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
          className={classes.button}
          onClick={() => loadData(selectedDateIn, selectedDateFor)}
        >
          Filtrar
        </Button>
      </div>

      {loading ? (
        <LinearProgress style={{ margin: '0 25px' }} />
      ) : (
        <div className={classes.container}>
          <DataTable
            style={{ width: '100%' }}
            sales={sales}
            handleDelete={handleDelete}
            handleUpdate={receiveDataToUpdate}
            confirmPay={confirmPay}
          />
        </div>
      )}
      {open && (
        <Modal
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          dataToUpdate={dataToUpdate}
        />
      )}
    </div>
  );
};

export default Sales;
