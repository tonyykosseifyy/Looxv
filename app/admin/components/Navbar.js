"use client"
import { useState } from 'react'
import styles from "./navbar.module.css";
import { InputAdornment , IconButton, InputLabel, FormControl, OutlinedInput, Select, MenuItem } from '@mui/material';
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from '@mui/material/Avatar';

const Navbar = ({ router }) => {
  const [ search, setSearch ] = useState("");
  const [ authProvider, setAuthProvider] = useState("");
  const handleSelect = (event) => {
    setAuthProvider(event.target.value);
  }
  return (
    <section className={styles.navbar_wrapper}>
      <div className={styles.navbar_search}>
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
            <OutlinedInput
              sx={{width:"300px"}}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Search"
                    onClick={() => {}}
                    edge="end"
                  >
                    <AiOutlineSearch />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
          <Select
            value={authProvider}
            onChange={handleSelect}
            label="auth provider"
            sx={{marginLeft: "10px", minWidth:"150px"}}
            size="sm"
            placeholder='Filter'
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="google">Google</MenuItem>
          <MenuItem value="salla">Salla</MenuItem>
        </Select>
      </div>
      <div className={styles.navbar_user}>
        <Avatar alt="Avatar" src="" />
        <p>John Doe</p>
      </div>
      
    </section>
  )
}

export default Navbar