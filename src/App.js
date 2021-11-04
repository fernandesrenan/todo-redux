import "./App.css";
import {
  Button,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="action">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" size="large">
          Add Todo
        </Button>
      </div>
      <Divider />
      <div className="list">
        <List sx={{ bgcolor: "background.paper" }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} disablePadding>
                <ListItemButton
                  // onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      // checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
