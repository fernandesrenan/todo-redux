import { useState } from "react";
import {
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./slices/todoSlice";

function App() {
  const todos = useSelector((state) => state.todo.list);
  const loading = useSelector((state) => state.todo.loading);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  function handleClick() {
    dispatch(addTodo(inputText));
    setInputText("");
  }

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id));
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
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          disabled={loading}
        >
          Add Todo
        </Button>
      </div>
      <Divider />
      <div className="list">
        {loading && (
          <CircularProgress
            style={{ padding: "8px", display: "block", margin: "0 auto" }}
          />
        )}
        <List sx={{ bgcolor: "background.paper" }}>
          {todos.map((todo) => {
            return (
              <ListItem key={todo.id} disablePadding>
                <ListItemButton onClick={() => handleToggle(todo.id)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={todo.checked}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
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
