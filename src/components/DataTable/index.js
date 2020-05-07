import React from 'react';
import MaterialTable from 'material-table';
import { Button, Icon, IconButton } from '@material-ui/core';
import { format, parseISO } from 'date-fns';
import formatToMoney from 'util/formatToMoney';
import { useStyles } from './styles';

export default function DataTable({
  sales,
  handleUpdate,
  handleDelete,
  confirmPay,
}) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id' },
      {
        title: 'Data',
        field: 'date',
        render: (rowData) => format(parseISO(rowData.date), 'dd/MM/yyyy'),
      },
      { title: 'Qtd', field: 'quantity' },
      {
        title: 'Valor Un',
        field: 'unitary_value',
        render: (rowData) => formatToMoney(rowData.unitary_value),
      },
      {
        title: 'Total',
        field: 'total',
        render: (rowData) => formatToMoney(rowData.total),
      },
      { title: 'Taxa', field: 'tax', render: (rowData) => `${rowData.tax}%` },
      {
        title: 'Imposto Pago',
        field: 'isPay',
        render: (rowData) =>
          rowData.is_pay ? (
            <Icon className={classes.isPay}>thumb_up</Icon>
          ) : (
            <Icon className={classes.notPay}>thumb_down</Icon>
          ),
      },
      {
        title: 'Informar Pagamento',
        field: 'isPay',
        render: (rowData) =>
          rowData.is_pay ? null : (
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => confirmPay(rowData)}
            >
              Confirmar Pagamento
            </Button>
          ),
      },
      {
        title: 'Ações',
        field: 'id',
        render: (rowData) => (
          <>
            <IconButton onClick={() => handleUpdate(rowData)}>
              <Icon>edit</Icon>
            </IconButton>
            <IconButton onClick={() => handleDelete(rowData.id)}>
              <Icon>delete</Icon>
            </IconButton>
          </>
        ),
      },
    ],
    data: [...sales].reverse(),
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      options={{
        search: false,
      }}
      style={{ width: '100%', margin: '0 25px' }}
    />
  );
}
