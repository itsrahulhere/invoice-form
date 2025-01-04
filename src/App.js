import { Outlet } from "react-router-dom";
import "./App.css";
import Router from "./utils/Routes";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { FormDataProvider } from "./states/FormDataContext";

function App() {
  return (
    <div className="App">
      <FormDataProvider>
        <SnackbarProvider
          maxSnack={3}
          iconVariant={{
            error: <ErrorOutlineIcon sx={{ marginRight: 1, marginLeft: 0 }} />,
          }}
          action={(snackbarId) => (
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => closeSnackbar(snackbarId)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          )}
        >
          <Outlet />
          <Router />
        </SnackbarProvider>
      </FormDataProvider>
    </div>
  );
}

export default App;
