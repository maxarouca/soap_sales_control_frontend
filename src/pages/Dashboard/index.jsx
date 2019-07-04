/* eslint-disable react/prop-types */
import React from 'react'

import {
  Grid,
  Fab,
  Input,
  Card,
  CardContent,
  CardHeader,
  ListItem,
  List,
  Typography,
} from '@material-ui/core'
import { HourglassEmpty } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

import MainNavbar from 'components/MainNavbar'
import api from 'services/api'

import styles from './styles'


class Dashboard extends React.Component {
  state = {
    greenProcesses: {
      qty: 0,
      trucks: [],
    },
    yellowProcesses: {
      qty: 0,
      trucks: [],
    },
    redProcesses: {
      qty: 0,
      trucks: [],
    },
    greyProcesses: {
      qty: 0,
      trucks: [],
    },
  }

  async componentDidMount() {
    const response = await api.get('/processes')

    this.setState({
      greenProcesses: response.data.green,
      yellowProcesses: response.data.yellow,
      redProcesses: response.data.red,
      greyProcesses: response.data.grey,
    })
  }

  onFilterLastTimeClick = async (val) => {
    const response = await api.get(val)
    this.setState({
      greenProcesses: response.data.green,
      yellowProcesses: response.data.yellow,
      redProcesses: response.data.red,
      greyProcesses: response.data.grey,
    })
  }

  renderListItem = (processes) => {
    const { classes } = this.props
    const limitedItens = processes.trucks.length > 7 ? processes.trucks.slice(0, 7) : processes.trucks
    return limitedItens.map((item, i) => (
      <ListItem key={i.toString()} className={classes.listItem}>
        <a
          href={`/consult_container?container=${item.conteiner}`}
          style={{ textDecoration: 'none', color: '#666666' }}
        >
          {item.conteiner}
        </a>
      </ListItem>
    ))
  }

  render() {
    const { classes } = this.props
    const {
      greenProcesses, yellowProcesses, redProcesses, greyProcesses,
    } = this.state

    return (
      <div className={classes.root}>
        <MainNavbar />
        <Grid container style={{ backgroundColor: '#666666', padding: '50px' }}>
          <Grid item xs={4}>
            <Typography className={classes.titleCardWhite}>Status</Typography>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#ffffff',
                  fontSize: '14px',
                }}
              >
                <HourglassEmpty />
                {' '}
                <span>Filtrar por</span>
              </div>
              <div style={{ marginLeft: '5px' }}>
                <Fab
                  size="small"
                  className={classes.fab}
                  onClick={() => {
                    this.onFilterLastTimeClick('/processes?startDate=2019-05-17T10:15:00')
                  }}
                >
                  15m
                </Fab>
                <Fab
                  size="small"
                  className={classes.fab}
                  onClick={() => {
                    this.onFilterLastTimeClick('/processes?startDate=2019-05-17T10:00:00')
                  }}
                >
                  30m
                </Fab>
                <Fab size="small" className={classes.fab}>
                  1h
                </Fab>
                <Fab size="small" className={classes.fab}>
                  2h
                </Fab>
                <Fab size="small" className={classes.fab}>
                  6h
                </Fab>
                <Fab size="small" className={classes.fab}>
                  12h
                </Fab>
                <Fab size="small" className={classes.fab}>
                  1 d
                </Fab>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={5}
            style={{ display: 'flex', justifyContent: 'end', flexDirection: 'column' }}
          >
            <div>
              <span style={{ color: '#ffffff', fontSize: '14px' }}>Período de </span>
              <Input disableUnderline className={classes.inputPeriod} />
              {' '}
              <span style={{ color: '#ffffff', fontSize: '14px' }}> até </span>
              <Input disableUnderline className={classes.inputPeriod} />
              <Fab variant="extended" size="medium" color="secondary" style={{ marginLeft: '8px' }}>
                Filtrar
              </Fab>
            </div>
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container style={{ marginTop: '30px', padding: '0 50px' }} spacing={24}>
          <Grid item xs={3}>
            <Card style={{ border: '1px solid #00aa00', height: '395.5px' }}>
              <a href="/containers_list?process_status=ok" style={{ textDecoration: 'none' }}>
                <CardHeader
                  title={`APROVADOS: ${greenProcesses.qty}`}
                  style={{ backgroundColor: '#00aa00', textAlign: 'center' }}
                  classes={{ title: classes.titleCardWhite }}
                />
              </a>
              <CardContent>
                <List>{this.renderListItem(greenProcesses)}</List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ border: '1px solid #f7b500', height: '395.5px' }}>
              <a
                href="/containers_list?process_status=inconsistente"
                style={{ textDecoration: 'none' }}
              >
                <CardHeader
                  title={`INCONSISTENTES: ${yellowProcesses.qty}`}
                  style={{ backgroundColor: '#f7b500', textAlign: 'center' }}
                  classes={{ title: classes.titleCard }}
                  onClick={() => this.onStatusClick('ok')}
                />
              </a>
              <CardContent>
                <List>
                  <List>{this.renderListItem(yellowProcesses)}</List>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ border: '1px solid red', height: '395.5px' }}>
              <CardHeader
                title={`SUSPEITOS: ${redProcesses.qty}`}
                style={{ backgroundColor: 'red', textAlign: 'center' }}
                classes={{ title: classes.titleCardWhite }}
              />

              <CardContent>
                <List>
                  <List>{this.renderListItem(redProcesses)}</List>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ border: '1px solid #cccccc', height: '395.5px' }}>
              <CardHeader
                title={`PENDENTES: ${greyProcesses.qty}`}
                style={{ backgroundColor: '#cccccc', textAlign: 'center' }}
                classes={{ title: classes.titleCard }}
              />

              <CardContent>
                <List>
                  <List>{this.renderListItem(greyProcesses)}</List>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard)
