import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import MuiFab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { mapConstLabel } from "../../shared/constant/common.constant";
import http from "../../shared/services/api";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
  },
  dialog: {
    padding: theme.spacing(2),
  },
}));

const Dialog = ({ onClose, open, selectedValue, actionType, ...props }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let formList = [];
  if (actionType == "ADD_DECK") {
    formList = [
      { name: "title", value: "name" },
      { name: "description", value: "description" },
    ];
  } else {
    // TODO add card config
    formList = [{ name: "title" }];
  }
  const handleClose = () => {
    onClose(selectedValue);
  };

  const onSubmit = (data) => {
    // TODO reload parent page
    http.post("/deck", data);
    onClose(selectedValue);
  };

  return (
    <MuiDialog onClose={handleClose} open={open}>
      <MuiDialogTitle>{mapConstLabel(actionType)}</MuiDialogTitle>
      <MuiDialogContent>
        <MuiDialogContentText>not required at this moment</MuiDialogContentText>
        {formList.map((item, index) => (
          <TextField
            key={index}
            autoFocus
            {...register(item.value)}
            margin="dense"
            label={item.name}
            type={item.type}
            fullWidth
          />
        ))}
      </MuiDialogContent>
      <MuiDialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        {/* Refactor this  */}
        <Button
          onClick={handleSubmit((data) => onSubmit(data))}
          color="primary"
        >
          Add
        </Button>
      </MuiDialogActions>
    </MuiDialog>
  );
};

const Fab = ({ actionType, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("x");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  // TODO hidden when scroll to bottom
  return (
    <React.Fragment>
      <MuiFab color="primary" className={classes.fab} onClick={handleClickOpen}>
        <AddIcon />
      </MuiFab>
      <Dialog
        {...props}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        actionType={actionType}
      ></Dialog>
    </React.Fragment>
  );
};

Fab.propTypes = {
  actionType: PropTypes.string,
};
Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  actionType: PropTypes.string.isRequired,
};

Fab.defaultProps = {
  // bla: 'test',
};

export default Fab;
