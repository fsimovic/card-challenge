import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fecthSubscribers } from "./features/subscribers/subscribersSlice";
import Grid from "./features/cards-grid/Grid";
import "./app.scss";

const MOCK_DATA_ULR =
  "https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthSubscribers(MOCK_DATA_ULR));
  }, []);

  return (
    <div className="app">
      <Grid />
    </div>
  );
}

export default App;
