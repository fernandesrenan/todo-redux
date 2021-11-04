import { useState } from "react";
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
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  function handleClick() {
  }

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <div className="action">
        <TextField
          id="outlined-basic"
          label="TODO"
          variant="outlined"
          size="small"
          value={inputText}
          onChange={handleChange}
        />
        <Button variant="contained" size="large" onClick={handleClick}>
          Add Todo
        </Button>
      </div>
      <Divider />
      <div className="list">
        <List sx={{ bgcolor: "background.paper" }}>
          {[].map((todo) => {
            return (
              <ListItem key={todo.id} disablePadding>
                <ListItemButton onClick={() => {}} dense>
                  {/* <ListItemIcon>
                    <Checkbox
                      edge="start"
                      // checked={}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon> */}
                  <ListItemText id={todo.id} primary={todo.text} />
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
