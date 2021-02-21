import React, {useState, useEffect} from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import Toast from '../../../common/Toast';
import SearchInput from '../../../components/SearchInput';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
const domain = 'http://localhost:3307/api/';
import EditIcon from '@material-ui/icons/Edit';
import LoopIcon from '@material-ui/icons/Loop';
let toast = new Toast();

import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  CardHeader,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));
function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [, setRole] = React.useState('');

  const handleClickOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {};
  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const createNewCrime = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3307/api/offences/crimedesc', {
        payload: crimedata,
      })
      .then((res) => {
        if (res.data.message == 'Success') {
          // setCrime(res.data);
          toast.showSuccessToast(res.data.message);
        } else {
          toast.showErrorToast(res.data.message);
        }
      })
      .catch((e) => {
        if (e.message === 'Network Error') {
          toast.showErrorToast('Connection timeout');
        } else {
          toast.showErrorToast(e.message);
        }
      });
    setOpen(false);
  };

  const classes = useStyles();
  const schema = {
    penaltyamount: {
      presence: {allowEmpty: false, message: 'is required'},
      length: {
        maximum: 64,
      },
    },
    crimedesc: {
      presence: {allowEmpty: false, message: 'is required'},
      length: {
        maximum: 64,
      },
    },
  };
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const crimedata = {
    offencedescription: formState.values.crimedesc,
    offenceamount: formState.values.penaltyamount,
  };
  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      <Button
        style={{marginTop: 5, marginRight: 300}}
        variant="contained"
        color="secondary"
        onClick={(event) => {
          handleClickOpen(event);
        }}>
        NEW CRIME
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <form className={classes.form} onSubmit={createNewCrime}>
          <DialogTitle id="form-dialog-title">Add New Crime</DialogTitle>
          <DialogContent style={{fontFamily: ''}}>
            {/* <DialogContentText>
Please Fill In the Details
</DialogContentText> */}

            <TextField
              className={classes.textField}
              error={hasError('crimedesc')}
              fullWidth
              helperText={
                hasError('crimedesc') ? formState.errors.crimedesc[0] : null
              }
              label="Crime Description"
              name="crimedesc"
              onChange={handleChange}
              type="text"
              value={formState.values.crimedesc || ''}
            />
            <TextField
              className={classes.textField}
              error={hasError('penaltyamount')}
              fullWidth
              helperText={
                hasError('penaltyamount')
                  ? formState.errors.penaltyamount[0]
                  : null
              }
              label="Penalty Amount"
              name="penaltyamount"
              onChange={handleChange}
              type="number"
              value={formState.values.penaltyamount || ''}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color="primary">
              Cancel
            </Button>
            <Button
              onClick={(event) => {
                createNewCrime(event);
              }}
              color="primary"
              disabled={!formState.isValid}>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
function UpdateCrime({editCrime}) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState({});
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const handleClickOpen = (event) => {
    // event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {};
  const handleChange = (event) => {
    event.persist();
    console.log(event.target.type);

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const createNewCrime = async (event) => {
    event.preventDefault();
    await axios
      .post('http://localhost:3307/api/offences/crimedesc', {
        payload: crimedata,
      })
      .then((res) => {
        if (res.data.message == 'Success') {
          console.log(res);
          toast.showSuccessToast(res.data.message);
        } else {
          toast.showErrorToast(res.data.message);
        }
      })
      .catch((e) => {
        if (e.message === 'Network Error') {
          toast.showErrorToast('Connection timeout');
        } else {
          toast.showErrorToast(e.message);
        }
      });
    setOpen(false);
  };

  const classes = useStyles();
  const schema = {
    penaltyamount: {
      presence: {allowEmpty: false, message: 'is required'},
      length: {
        maximum: 64,
      },
    },
    crimedesc: {
      presence: {allowEmpty: false, message: 'is required'},
      length: {
        maximum: 64,
      },
    },
    offenceid: {
      presence: {allowEmpty: false, message: 'is required'},
      length: {
        maximum: 64,
      },
    },
  };

  const crimedata = {
    offencedescription: formState.values.crimedesc,
    offenceamount: formState.values.penaltyamount,
  };
  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      {
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{color: 'white'}}
          onClick={() => {
            handleClickOpen(event);
          }}>
          {' '}
          Update
        </Button>
      }
      <EditIcon
        size="small"
        variant="contained"
        color="secondary"
        name="edit"
        onClick={() => {
          handleClickOpen();
        }}>
        edit
      </EditIcon>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <form className={classes.form} onSubmit={createNewCrime}>
          <DialogTitle id="form-dialog-title">Update Crime</DialogTitle>
          <DialogContent style={{fontFamily: ''}}>
            <TextField
              className={classes.textField}
              error={hasError('offenceid')}
              fullWidth
              helperText={
                hasError('offenceid') ? formState.errors.offenceid[0] : null
              }
              label="Offence Id"
              name="offenceid"
              onChange={handleChange}
              type="text"
              value={formState.values.offenceid || ''}
            />

            <TextField
              className={classes.textField}
              error={hasError('crimedesc')}
              fullWidth
              helperText={
                hasError('crimedesc') ? formState.errors.crimedesc[0] : null
              }
              label="Crime Description"
              name="crimedesc"
              onChange={handleChange}
              type="text"
              value={formState.values.offencedescription || ''}
            />
            <TextField
              className={classes.textField}
              error={hasError('penaltyamount')}
              fullWidth
              helperText={
                hasError('penaltyamount')
                  ? formState.errors.penaltyamount[0]
                  : null
              }
              label="Penalty Amount"
              name="penaltyamount"
              onChange={handleChange}
              type="text"
              value={formState.values.offenceamount || ''}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color="primary">
              Cancel
            </Button>
            <Button
              onClick={(event) => {
                createNewCrime(event);
              }}
              color="primary"
              disabled={!formState.isValid}>
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

const AddDescription = (props) => {
  const [crime, setCrime] = React.useState([]);
  const [] = React.useState('');
  let toast = new Toast();
  React.useEffect(() => {
    getCrimes();
  }, []);
  function getCrimes() {
    axios
      .post('http://localhost:3307/api/offences/pullOffence', {payload: {}})
      .then((res) => {
        if (res.data.message == 'Success') {
          // toast.showSuccessToast(res.data.message + "fully Refreshed List");
          setCrime(res.data.payload);
        } else if (res.data.httpStatus == 'Not Found') {
          toast.showErrorToast(res.data.message);
        } else {
          toast.showErrorToast(res.data.message);
        }
      })
      .catch((e) => {
        if (e.message == 'Network Error') {
          toast.showErrorToast('Connection timeout');
        } else {
          toast.showErrorToast(e.message);
        }
      });
  }

  const {className, users, ...rest} = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [, setRowsPerPage] = useState(10);
  const [, setPage] = useState(0);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div></div>
      <CardHeader
        action={
          <LoopIcon
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => {
              let toast = new Toast();
              getCrimes();
              toast.showSuccessToast('Successfully refreshed');
            }}
          />
        }
        title="ALL CRIMES"></CardHeader>
      <AlertDialogSlide />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>Offence Id</TableCell>
                  <TableCell>Offence Description</TableCell>
                  <TableCell>Penalty Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {crime.map((value, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={index}
                    selected={selectedUsers.indexOf(value.userId) !== -1}>
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">
                          {value.offenceid}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>{value.offencedescription}</TableCell>
                    <TableCell>{value.offenceamount}</TableCell>
                    <UpdateCrime editCrime={value} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}></CardActions>
    </Card>
  );
};

AddDescription.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default AddDescription;
