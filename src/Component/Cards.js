import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./style.css";
import { Typography } from "@mui/material";
import { removeItem } from "../Slice/ClientSlice";
const Cards = () => {
  //clients.ClientReducer.initialClient

  // let clientDetails = [];
  let client = useSelector((clients) => clients.ClientReducer.pushInfo);
  // clientDetails.push(client);
  console.log("details date", client);
  // from
  // to
  // date
  // guestNumber
  // catagory
  const [newVal, setNewVal] = useState([]);
  const dispatch = useDispatch();
  const handleDelet = (btnID) => {
    let filtered = client.filter((remItem) => remItem.id !== btnID);
    console.log("filtered", filtered);
    dispatch(removeItem(filtered));
    setNewVal(filtered);
  };
  return (
    <>
      <div className="flex">
        {client &&
          client.map((details, i) => (
            <div className="mainContent" key={i}>
              <Typography>
                <span> From : </span>
                {details.from}
              </Typography>
              <Typography>
                <span> To : </span>
                {details.to}
              </Typography>
              <Typography>
                <span> Date : </span>
                {details.date}
              </Typography>
              <Typography>
                <span> Guest :</span> {details.guestNumber}
              </Typography>
              <Typography>
                <span> Class : </span>
                {details.catagory}
              </Typography>
              <Button
                onClick={() => handleDelet(details.id)}
                variant="contained"
                size="small"
                className="delet"
              >
                Delet
              </Button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
