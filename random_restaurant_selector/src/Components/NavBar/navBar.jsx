import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
    const [menuListOpen, setMenuListOpen] = useState(false);
    const user = props.user;
    const anchorRef = useRef(null);
    const prevOpen = useRef(menuListOpen);

    const handleMenuList = () => {
        setMenuListOpen((prevOpen) => !prevOpen);
    };

    const handleMenuListToClosed = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }     
        setMenuListOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenuListOpen(false);
        }
    };

    useEffect(() => {
        if (prevOpen.current === true && menuListOpen === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = menuListOpen;
    }, [menuListOpen]);


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon 
                            ref={anchorRef}
                            aria-controls={menuListOpen ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleMenuList}
                        />
                        <Popper open={menuListOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleMenuListToClosed}>
                                            <MenuList
                                                autoFocusItem={menuListOpen} 
                                                id="menu-list-grow" 
                                                onKeyDown={handleListKeyDown}
                                                onClose={handleMenuListToClosed}
                                                anchorOrigin={{
                                                    vertical: "top",
                                                    horizontal: "left",
                                                }}
                                            >
                                            {!user.userName ? (
                                                <div>
                                                    <MenuItem onclick={handleMenuListToClosed}>
                                                        <Link to="/register">
                                                            Register
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem onclick={handleMenuListToClosed}>
                                                        <Link to="/login">
                                                            Login
                                                        </Link>
                                                    </MenuItem>
                                                </div>
                                            ) : (
                                                <div>

                                                </div>
                                            )}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Random Restaurant Generator
                    </Typography>
                    <Typography color="inherit">Welcome {user.userName}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}