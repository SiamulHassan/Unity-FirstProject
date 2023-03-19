import {
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Component/Cards";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoMdPaperPlane } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { clientRed } from "../Slice/ClientSlice";
import "./style.css";

const Home = () => {
  const dispatch = useDispatch();
  const [selectDate, setSelectDate] = useState(null);

  const newDate =
    selectDate && `${selectDate.$D}/${selectDate.$M + 1}/${selectDate.$y}`;
  // const newDate = selectDate && JSON.stringify(selectDate);
  console.log(newDate);
  const [info, setInfo] = useState({
    from: "",
    to: "",
    guestNumber: "",
    catagory: "",
    id: "",
  });
  const currencies = [
    {
      from: "Dhaka",
      value: 1,
      class: "Business",
    },
    {
      from: "Khulna",
      value: 2,
      class: "Economy",
    },
    {
      to: "Sylhet",
      value: 3,
    },
    {
      to: "Cox Bazar",
      value: 4,
    },
  ];
  const handleFrom = (e) => {
    const { value, name } = e.target;
    console.log("name:", name, "::::::value:", value);
    setInfo((prev) => ({
      ...prev,
      [name]: value,
      id: Math.floor(Math.random() * 100),
    }));
  };
  // const handleDate = (date) => {
  //   setSelectDate(date);
  //   setInfo((prev) => ({ ...prev, date: newDate }));
  // };
  const handleBook = () => {
    if (info.from && info.to && newDate && info.guestNumber && info.catagory) {
      dispatch(clientRed({ ...info, date: newDate }));
      // const user = JSON.parse(localStorage.getItem("userClients")) || [];
      // const update = [...user, info];
      // localStorage.setItem("userClients", JSON.stringify(update));
    }
  };
  console.log("info", info);
  // console.log("select date parse", selectDate);
  return (
    <>
      <div>
        <div className="background">
          <div className="header">
            <h1>Ruptanza Airline</h1>
            <div className="logo">
              <GiCommercialAirplane />
            </div>
          </div>

          <div className="iputContainer">
            <div className="destination">
              <div className="desFrom">
                <div className="input_divs">
                  <TextField
                    sx={{
                      "& .MuiInputLabel-root": { color: "rgb(82 79 79)" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "rgb(82 79 79)" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgb(82 79 79)",
                          border: "1px solid",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgb(82 79 79)",
                      },
                    }}
                    className="inputs"
                    select
                    label="Travel From"
                    name="from"
                    value={info.from}
                    onChange={handleFrom}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IoMdPaperPlane className="icon_TravelFrom" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {currencies.map((option, i) => (
                      <MenuItem key={i} value={option.from}>
                        {option.from}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className="input_divs">
                  <TextField
                    className="inputs"
                    select
                    label="Travel To"
                    name="to"
                    value={info.to}
                    onChange={handleFrom}
                    sx={{
                      "& .MuiInputLabel-root": { color: "rgb(82 79 79)" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "rgb(82 79 79)" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgb(82 79 79)",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgb(82 79 79)",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TfiLocationPin className="icon_TravelFrom" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {currencies.map((option, i) => (
                      <MenuItem key={i} value={option.to}>
                        {option.to}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className="input_divs">
                  <TextField
                    className="inputs"
                    select
                    label="ClassName"
                    name="catagory"
                    value={info.catagory}
                    onChange={handleFrom}
                    sx={{
                      "& .MuiInputLabel-root": { color: "rgb(82 79 79)" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "rgb(82 79 79)" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgb(82 79 79)",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgb(82 79 79)",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MdOutlineShoppingBag className="icon_TravelFrom" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {currencies.map((catagory, i) => (
                      <MenuItem key={i} value={catagory.class}>
                        {catagory.class}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className="input_divs">
                  <TextField
                    className="inputs"
                    select
                    label="Guest"
                    name="guestNumber"
                    value={info.guestNumber}
                    onChange={handleFrom}
                    type="number"
                    sx={{
                      "& .MuiInputLabel-root": { color: "rgb(82 79 79)" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "rgb(82 79 79)" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgb(82 79 79)",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgb(82 79 79)",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RxAvatar className="icon_TravelFrom" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {currencies.map((number, i) => (
                      <MenuItem key={i} value={number.value}>
                        {number.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className="input_divs">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        name="date"
                        value={selectDate}
                        // onChange={(newValue) => setValue(newValue)}
                        onChange={(date) => setSelectDate(date)}
                        className="icon_TravelFrom "
                        sx={{
                          "& .MuiInputLabel-root": { color: "rgb(82 79 79)" }, //styles the label
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "rgb(82 79 79)" },
                          },
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: "rgb(82 79 79)",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgb(82 79 79)",
                          },
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* <TextField
                    className="inputs"
                    type="date"
                    name="date"
                    value={info.date}
                    onChange={handleFrom}
                    sx={{
                      "& .MuiInputLabel-root": { color: "rgb(82 79 79)" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "rgb(82 79 79)" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgb(82 79 79)",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgb(82 79 79)",
                      },
                    }}
                  /> */}
                </div>
                <Button
                  onClick={handleBook}
                  className="bookBtn"
                  variant="contained"
                  size="small"
                >
                  Book
                </Button>
              </div>
            </div>
          </div>
          <div className="cards">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
