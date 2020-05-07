import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { Form } from '@unform/web';
import { TextField, Switch } from 'unform-material-ui';
import { KeyboardDatePicker } from '@material-ui/pickers';
import formatToMoney from 'util/formatToMoney';
import { useStyles } from './styles';
import { utcToZonedTime } from 'date-fns-tz';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalComponent({
  open,
  dataToUpdate,
  handleUpdate,
  handleClose,
  handleSubmit,
  error,
}) {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [formData, setFormData] = useState({
    quantity: '',
    unitary_value: '',
    tax: '6',
    is_pay: false,
    total: 0,
  });
  console.log(dataToUpdate);

  useEffect(() => {
    if (dataToUpdate !== null && dataToUpdate !== undefined) {
      const { quantity, unitary_value, is_pay, tax, total } = dataToUpdate;
      return setFormData({
        quantity,
        unitary_value,
        total,
        tax,
        total,
        is_pay,
      });
    }
  }, []);

  useEffect(() => {
    if (formData) {
      if (formData.quantity !== '' && formData.unitary_value !== '') {
        const final =
          Number(formData.quantity) * Number(formData.unitary_value);

        return setFormData({
          ...formData,
          total: final.toFixed(2),
        });
      }
    }
  }, [formData.quantity, formData.unitary_value]);

  const handleChange = (e, name) => {
    return setFormData({
      ...formData,
      [name]:
        name === 'unitary_value'
          ? e.target.value.replace(/\,/g, '.')
          : e.target.value,
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Nova Venda</DialogTitle>
        <Form
          initialData={formData}
          onSubmit={(data) =>
            dataToUpdate
              ? handleUpdate(
                  dataToUpdate.id,
                  data,
                  utcToZonedTime(selectedDate, {
                    timeZone: 'America/Sao_Paulo',
                  }),
                  formData.total
                )
              : handleSubmit(
                  data,
                  utcToZonedTime(selectedDate, {
                    timeZone: 'America/Sao_Paulo',
                  }),
                  formData.total
                )
          }
        >
          <DialogContent>
            <div className={classes.dateInput}>
              <span className={classes.label}>Data</span>

              <KeyboardDatePicker
                placeholder="10/10/2018"
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
                format="dd/MM/yyyy"
                style={{ flex: 1 }}
              />
            </div>
            <div className={classes.inputsContainer}>
              <TextField
                name="quantity"
                variant="standard"
                placeholder="Quantidade"
                margin="normal"
                onChange={(e) => handleChange(e, 'quantity')}
              />
              <TextField
                name="unitary_value"
                variant="standard"
                placeholder="Valor Unitário"
                margin="normal"
                onChange={(e) => handleChange(e, 'unitary_value')}
              />
              <div className={classes.taxContainer}>
                <TextField
                  name="tax"
                  variant="standard"
                  placeholder="Taxa"
                  margin="normal"
                />
                <div className={classes.dateInput}>
                  <span className={classes.label}>Imposto Pago</span>
                  <Switch name="is_pay" />
                </div>
              </div>
              {formData && (
                <div className={classes.total}>
                  <span className={classes.label}>TOTAL: </span>{' '}
                  <span className={classes.totalValue}>
                    {formatToMoney(formData.total)}
                  </span>
                </div>
              )}
            </div>
            <div className={classes.error}>{error && error.message}</div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </div>
  );
}
